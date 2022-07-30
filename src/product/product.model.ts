import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps {
	@prop()
	title: string

	@prop()
	price: number

	@prop()
	description: string

	@prop()
	isActive: boolean

	@prop()
	imageUrl: string
}
