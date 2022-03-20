
exports.up = function(knex) {
    return knex.schema.createTable('products',function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('brand').notNullable();
        table.decimal('price').notNullable();
        table.string('images').notNullable();
        table.string('description').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
