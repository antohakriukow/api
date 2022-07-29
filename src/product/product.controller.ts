import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { IdValidationPipe } from 'src/pipes/IdValidationPipe'
import { ProductDto } from './dto/product.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductsController {
	constructor(private readonly ProductService: ProductService) {}

	@Get(':_id')
	async get(@Param('_id', IdValidationPipe) _id: string) {
		return await this.ProductService.byId(_id)
	}

	@Get()
	async getAll() {
		return this.ProductService.getAll()
	}

	@Post()
	@HttpCode(200)
	async create(@Body() dto: ProductDto) {
		return await this.ProductService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@Put(':_id')
	@HttpCode(200)
	async update(
		@Param('_id', IdValidationPipe) _id: string,
		@Body() dto: ProductDto
	): Promise<any> {
		return this.ProductService.update(_id, dto)
	}

	@Delete(':_id')
	@HttpCode(200)
	async delete(@Param('_id', IdValidationPipe) _id: string) {
		return this.ProductService.delete(_id)
	}
}
