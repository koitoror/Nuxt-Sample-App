import express from 'express';
// import jwt from 'express-jwt';
import { routes } from './routes';

const api = express();
api.use(express.json());
// api.use(jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }));
api.use((request, response, next) =>
{
  request.userID = request.user.sub;
  next();
});
api.use(routes());

api.use(function(error, request, response, next)
{
  if(error.name === 'UnauthorizedError')
    response.sendStatus(401);
});

export default api;
