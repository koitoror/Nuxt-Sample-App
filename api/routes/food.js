import { Router } from 'express';
import { food } from '../db';

const foodRouter = Router();
export default Router().use('/food', foodRouter);

/* Get all food */
foodRouter.get('/', async (request, response) =>
{
  try
  {
    const foods = await food().where('userID', request.userID);
    response.json(foods);
  }
  catch(error)
  {
    response.sendStatus(500);
  }
});

/* Create food */
foodRouter.post('/', async (request, response) =>
{
  const { body, userID } = request;
  const { name } = body;
  if(!name)
    return response.sendStatus(400);

  try
  {
    const [result] = await food().returning('*').insert({ name, userID });
    response.json(result);
  }
  catch(error)
  {
    /* Error code 23505 is a duplicate error */
    response.sendStatus(error.code === '23505' ? 409 : 500);
  }
});

/* Edit food */
foodRouter.patch('/:id', async (request, response) =>
{
  const { id } = request.params;
  const data = { name: request.body.name };
  try
  {
    const [result] = await food()
      .where('id', id)
      .returning('*')
      .update(data);

    if(!result)
      return response.sendStatus(404);

    response.send(result);
  }
  catch(error)
  {
    response.sendStatus(500);
  }
});

/* Delete food */
foodRouter.delete('/:id', async (request, response) =>
{
  const { params, userID } = request;
  const { id } = params;
  try
  {
    await food().where({ id, userID }).returning('*').del();
    response.sendStatus(200);
  }
  catch(error)
  {
    response.sendStatus(500);
  }
});
