import { IUser } from "./user";
import { IFunction } from "./function";

export interface IGroup {
  functions: Array<IFunction>
  groupName: string
  id: number
  minValue: string
  maxValue: string
  users: Array<IUser>
  warning?: string


}