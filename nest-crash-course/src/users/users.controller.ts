import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { exception } from 'console';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiOkResponse({type : User, isArray : true})
    @ApiQuery({name : 'name', required : false})
    @Get()
    getUsers(@Query('name') name?:string) : User[] {

        return this.usersService.findAll(name);
    }

    @ApiOkResponse({type : User})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id') id: string) : User {
        // ParseIntPipe can used here to 
        // It changes the type itself and we don't need to type cast
        const user = this.usersService.findById(Number(id));
        if(!user)
        {
            throw new NotFoundException;
        }
        return user;
    }

    @Post()
    createUser(@Body() body : CreateUserDto): User {
        return this.usersService.createUser(body)
    }
}
