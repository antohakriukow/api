import { IsString } from 'class-validator'

export class ProductDto {
	@IsString()
	title: string

	@IsString()
	price: string

	@IsString()
	description: string

	@IsString()
	imageUrl: string
}
