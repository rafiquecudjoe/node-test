import { CreateUserDto } from "../../api/users/dto/users.dto";


export interface IUserRepository {
  createUser(params: CreateUserDto): Promise<any>;
  retrieveUsers(): Promise<any>;
  getUserById(id:string): Promise<any>;
}
