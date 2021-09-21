import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

// three layered architecture
//controller -> serivice -> data stuff


@Injectable()
export class UsersService {
    private users: any =[{id:0, name: 'Marius'},{id:1, name: 'Mark'},{id:2, name: 'Marcus'}];

    findAll(name?:string)
    {
        if(name)
        {
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }

    findById(userId: number)
    {
        return this.users.find(user => user.id === userId)
    }

    createUser(user : CreateUserDto)
    {
        const newUser = {id : Date.now(), ...user};
        this.users.push(newUser);
        return newUser;
    }

}
