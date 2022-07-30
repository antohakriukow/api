import { IsBoolean, IsString } from 'class-validator'

export class ProductDto {
	@IsString()
	title: string

	@IsString()
	price: number

	@IsString()
	description: string

	@IsBoolean()
	isActive: boolean

	@IsString()
	imageUrl: string
}
