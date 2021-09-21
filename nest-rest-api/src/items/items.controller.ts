import { Controller,Get,Post,Put,Delete, Body, Res, Req, Param} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-items.dto';
import { ItemsService } from './items.service';;
import {Item} from './interfaces/items.interface';
@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService : ItemsService) {} //in constructor because injectable


    @Get()
    async findAll(): Promise<Item[]>{
        return this.itemsService.findAll();
    }

    //the long way (parameter)
    @Get(':id')
    findOne2(@Param() param):string{
        return `Item id ==> ${param.id}`
    }

    //the short and cleaner way (parameter)
    @Get(':id')
    async findone(@Param('id') id):Promise<Item>{
        return this.itemsService.findOne(id)
    }

    @Post()
    Create(@Body() createItemDto:CreateItemDTO):Promise<Item>
    {
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Item>{
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Body()updateItemDto : CreateItemDTO, @Param('id') id):Promise<Item>{
        return this.itemsService.update(id, updateItemDto);
    }
}
