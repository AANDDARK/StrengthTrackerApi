import { db } from "./db"


export const findById = async (userId: number) => {
    const result = await db.query(
    "SELECT * FROM exercises WHERE user_id = $1",
    [userId]
  );
  return result.rows
}
export const createWithId = async(user_id: number, id: number, name: string, describe: string) => {
  const result = await db.query(
    "INSERT INTO exercises (user_id, id, name, describe) VALUES ($1, $2, $3, $4)",
    [user_id, id, name, describe]
  )
  return result
}
export const deleteWithId = async(user_id: number, id: number) => {
  const result = await db.query(
    "DELETE FROM exercises WHERE user_id = $1 AND id = $2", [user_id, id]
  )
}
export const reorderIdCall = async(user_id: number, id: number) => {
  const result = await db.query(
    "SELECT reorder_id_exercises($1, $2);", [id, user_id]
  )
}