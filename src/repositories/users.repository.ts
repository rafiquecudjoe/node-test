import { Injectable } from "@nestjs/common";
import { InjectModel } from "kindagoose";
import { ReturnModelType, mongoose } from "@typegoose/typegoose";
import { User } from "../api/users/schema/users.schema";
import { IUserRepository } from "./interface/users.interface";
import { CreateUserDto } from "../api/users/dto/users.dto";
import { Users } from "../api/users/entities/users.entities";


@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) { }

  async createUser(params: CreateUserDto): Promise<Users> {
    const savedUser = await this.userModel.create({
      name: params.name,
      email: params.email,
      createdAt: params.createdAt,
      updatedAt: params.updateAt
    });

    return savedUser
  }

  async retrieveUsers(): Promise<Users[]> {
    const allUsers = await this.userModel.find();
    return allUsers
  }

  async getUserById(id: string): Promise<Users | null> {
    const user = await this.userModel.findOne(new mongoose.Types.ObjectId(id));
    return user
  }
}
