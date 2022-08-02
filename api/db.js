import knex from 'knex';

export const db = knex({
  client: 'pg',
  connection: process.env.DB_CONNECTION,
});

export const food = () => db('food');
export const meals = () => db('meals');
export const mealTimes = () => db('mealTimes');
