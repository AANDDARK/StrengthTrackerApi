import { Elysia } from 'elysia'
import { findById } from '../db/exercises'
import { deleteExercises, postExercises, updateExercisesCount } from '../controler/exercises'



export const exerciseRoutes = new Elysia()
    .get('/exercises/:id', async({params: {id}}) => await findById(Number(id)))
    .post('/exercises/add', async(context) =>  postExercises(context.body))
    .delete('/exercises/delete', async(context) => deleteExercises(context.body))
    .put('/exercises/update/count', async(context) => updateExercisesCount(context.body))
