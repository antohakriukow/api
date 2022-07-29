import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ProductsController } from './product.controller'
import { ProductModel } from './product.model'
import { ProductService } from './product.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ProductModel,
				schemaOptions: {
					collection: 'Product',
				},
			},
		]),
	],
	controllers: [ProductsController],
	providers: [ProductService],
})
export class ProductsModule {}
