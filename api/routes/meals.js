import { Router } from 'express';
import { format } from 'date-fns';
import { meals } from '../db';

const mealsRouter = Router();
export default Router().use('/meals', mealsRouter);

/* Get meals */
mealsRouter.get('/', async (request, response) =>
{
  const { from, to } = request.query;
  if(!from || !to)
    return response.sendStatus(400);

  try
  {
    const data = await meals()
      .join('food', 'food.id', 'foodID')
      .join('mealTimes', 'mealTimes.id', 'mealTimeID')
      .select(
        'meals.id',
        'date',
        'food.id as foodID',
        'food.name as foodName',
        'mealTimes.id as mealTimeID',
        'mealTimes.name as mealTimeName',
      )
      .where('food.userID', request.userID)
      .andWhere('date', '>=', from)
      .andWhere('date', '<=', to);

    const mealsData = [];
    for(const { id, date, foodID, foodName, mealTimeID, mealTimeName } of data)
    {
      mealsData.push({
        id,
        food:
        {
          id: foodID,
          name: foodName,
        },
        mealTime:
        {
          id: mealTimeID,
          name: mealTimeName
        },
        date: format(date, 'yyyy-MM-dd'),
      });
    }

    response.json(mealsData);
  }
  catch(error)
  {
    response.sendStatus(500);
  }
});

/* Add new meal/s */
mealsRouter.post('/', async (request, response) =>
{
  /**
   * @typedef Meal
   * @property {string} date
   * @property {number} foodID
   * @property {number} mealTimeID
   */
  /** @type {Meal[] */
  const data = request.body;
  if(!data
    || Object.keys(data).length === 0
    || data.some(({ foodID, date, mealTimeID }) => !foodID || !date || !mealTimeID)
  )
    return response.sendStatus(400);

  try
  {
    const foodIDs = [];
    const mealTimeIDs = [];
    const dates = [];
    for(const { foodID, mealTimeID, date } of data)
    {
      foodIDs.push(foodID);
      mealTimeIDs.push(mealTimeID);
      dates.push(date);
    }

    const [existing] = await meals()
      .whereIn('foodID', foodIDs)
      .and.whereIn('mealTimeID', mealTimeIDs)
      .and.whereIn('date', dates)
      .count('id');

    if(parseInt(existing.count))
      return response.sendStatus(409);

    const addedMeals = await meals()
      .returning('*')
      .insert(data);

    response.json(addedMeals.map(meal => ({ ...meal, date: format(meal.date, 'yyyy-MM-dd') })));
  }
  catch(error)
  {
    response.sendStatus(500);
  }
});

/* Delete meal */
mealsRouter.delete('/', async (request, response) =>
{
  const { foodID, mealTimeID, date } = request.body;
  if(!foodID || !mealTimeID || !date)
    return response.sendStatus(400);

  try
  {
    const result = await meals()
      .where({ foodID, mealTimeID, date })
      .returning('*')
      .del();

    response.send(result);
  }
  catch(error)
  {
    response.sendStatus(500);
  }
});
