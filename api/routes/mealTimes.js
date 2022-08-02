import { Router } from 'express';
import { mealTimes } from '../db';

const mealTimesRouter = Router();
export default Router().use('/meal-times', mealTimesRouter);

/* Get meal times */
mealTimesRouter.get('/', async (request, response) =>
{
  try
  {
    const data = await mealTimes();
    response.json(data);
  }
  catch(error)
  {
    response.sendStatus(500);
  }
});
