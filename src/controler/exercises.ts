import { deleteWithId, reorderIdCall, updateCount } from "../db/exercises"
import { createExercise } from "../service/exercises"

interface IBodyPostExercises{
  id_user: number,
  name: string,
  describe?: string
}

interface IBodyDeleteExercises{
  id_user: number,
  id: number
}

interface IBodyUpdateCount{
  count: number,
  id_user: number,
  id: number
}
export const postExercises = async(body: IBodyPostExercises) => {
    const { id_user,  name, describe = '' } = body;

    await createExercise(Number(id_user), name, describe)
}
export const deleteExercises = async(body: IBodyDeleteExercises) => {
  const {id_user, id} = body

  await deleteWithId(id_user, id)
  await reorderIdCall(id_user, id)
}
export const updateExercisesCount = async(body: IBodyUpdateCount) => {
    const {count, id_user, id} = body

    await updateCount(count, id_user, id)
}