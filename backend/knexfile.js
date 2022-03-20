module.exports = {
    development: {
        client: 'mysql',
        connection: {
          host : '127.0.0.1',
          database : 'test_holpa',
          user : 'test_holpa',
          password : '123'
        },
        migrations:{
            directory:'./src/database/migrations'
        },
        useNullAsDefault:true,
      }
};