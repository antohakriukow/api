import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class ProductDto {
	@IsString()
	title: string

	@IsNumber()
	price: number

	@IsString()
	description: string

	@IsOptional()
	@IsBoolean()
	isActive?: boolean

	@IsString()
	imageUrl: string
}
