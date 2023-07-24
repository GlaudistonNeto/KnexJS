/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', (table) =>{
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users');
    table.foreign('user_id').references('user.id').onDelete('CASCADE')
         .onUpdate('CASCADE');
    table.string('service_id').references('id').inTable('service');
    table.integer('quantity').notNullable();
    table.decimal('total_price', 15, 2).notNullable();
    table.timestamp('created_at', { useTz: true }).notNullable();
    table.timestamp('updated_at', { useTz: true }).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
