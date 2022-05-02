import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();

    const userIsAdmin = users.find((user) => user.id === user_id);

    if (!userIsAdmin.admin) {
      throw new Error("User not is admin");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
