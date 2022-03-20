
exports.up = function(knex) {
    return knex.schema.createTable('stock',function(table){
        table.increments();
        table.integer('products_id_fk');
        table.string('color');
        table.string('size');
        table.integer('quantity');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('stock');
  };
  