/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('services').del()
  await knex('services').insert([
    {id: 1, name: 'assessment', price: 0.00},
    {id: 2, name: 'cleaning', price: 25.00},
    {id: 3, name: 'component_replacement_or_thermal_paste', price: 30.00},
    {id: 4, name: 'formatting', price: 75.00}
  ]);
};
