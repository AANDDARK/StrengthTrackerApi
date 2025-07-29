import { Elysia } from 'elysia'
import { findById } from '../db/exercises'
import { deleteExercises, postExercises } from '../controler/exercises'



export const exerciseRoutes = new Elysia()
    .get('/exercises/:id', async({params: {id}}) => await findById(Number(id)))
    .post('/exercises/add', async(context) =>  postExercises(context.body))
    .delete('/exercises/delete', async(context) => deleteExercises(context.body))
