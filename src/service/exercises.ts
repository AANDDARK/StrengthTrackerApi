import { createWithId, findById } from "../db/exercises"

export const createExercise = async(id: number, name: string, describe: string) => {
    const exercise = await findById(id)

    await createWithId(id,  exercise.length + 1, name, describe)
}

