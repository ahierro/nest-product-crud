import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Get } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product';
import { IProduct } from './interfaces/product';
import { UpdateProductDto } from './dto/update-product';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Get()
    findAll(): Promise<IProduct[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IProduct> {
        return this.productsService.findOne(id);
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<IProduct> {
        return this.productsService.create(createProductDto);
    }

    @Put(':id')
    update(@Param('id') id: string,@Body() createProductDto: UpdateProductDto): Promise<IProduct> {
        return this.productsService.update(id,createProductDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string): Promise<IProduct> {
        console.log(id);
        return this.productsService.remove(id);
    }

}
