const connection = require('../database/connection');


module.exports = {

    async index(request,response){
        const products = await connection('products')
            .select([
                'products.name',
                'products.images',
                'products.price'
            ])
            .orderBy([{column:'products.id', order: 'desc'}]);

        return response.json(products);
    },

    async list(request,response){
        const {page = 1, limit = 11} = request.query;
        const [count] = await connection('products').count();

        var products = await connection('products')
            .select([
                'products.*'
            ])
            .limit(limit)
            .offset((page -1) * limit)
            .orderBy([{column:'products.id', order: 'desc'}])
        ;

        products = Promise.all(
            products.map( async function (product) {
                return product.stock =  await connection('stock')
                    .select([
                        'color',
                        'size',
                        'quantity'
                    ])
                    .where('products_id_fk', product.id);
            })
        );


        response.header('X-Total-Cont',count['count(*)']);

        return response.json(products);
    },

    async create(request,response){
        try {
            const {
                name,
                brand,
                images,
                description,
                price,
                stock,
            } = request.body;

            const [products_id_fk] = await connection('products')
            .insert(
                {
                    name,
                    brand,
                    images,
                    description,
                    price,
                }
            );
            
            await stock.forEach( async item => {
                var {color,size,quantity} = item; 

                var [id] = await connection('stock').insert({
                    products_id_fk,
                    color,
                    size,
                    quantity,
                });
                console.log(id);
            });

            return response.status(204).send("success");

        } catch (error) {
            return response.status(500).send("internal error, msg:"+error);
        }
    },

    async alter(request,response){
        const {title,description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.status(204).send();
    },


    async delete(request,response){
        const {id} = request.params;

        if(id){
            return response.status(401).json({error:'Opertion not permitted.'});
        }

        await connection('products').where('id',id).delete();
        await connection('stock').where('products_id_fk',id).delete();

        return response.status(204).send();
    }
}