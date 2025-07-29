import { Elysia } from 'elysia'
import { exerciseRoutes } from './routes/exercise'
import cors from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'


const app = new Elysia()
  .use(exerciseRoutes)
  .use(swagger())
  .use(cors())
  .listen(3000, () => {
    console.log('Server running on http://localhost:3000')
  })

