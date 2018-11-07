exports.up = function(knex, Promise) {
  return knex.schema.createTable("test_table",table=>{
      table.increments("id").unsigned().primary();
      table.string("title");
  })
};

exports.down = function(knex, Promise) {

};
