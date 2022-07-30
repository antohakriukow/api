import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { ProductDto } from './dto/product.dto'
import { ProductModel } from './product.model'

@Injectable()
export class ProductService {
	@InjectModel(ProductModel)
	private readonly ProductModel: ModelType<ProductModel>

	async byId(_id: string) {
		const document = await this.ProductModel.findById(_id)
		if (!document) throw new NotFoundException('Document not found')

		return document
	}

	async getAll() {
		const documents = await this.ProductModel.find({})
		return documents
	}

	async create(dto: ProductDto) {
		const document = await this.ProductModel.create(dto)
		return document
	}

	async update(_id: string, dto: ProductDto) {
		const updateDoc = await this.ProductModel.findByIdAndUpdate(_id, dto, {
			new: true,
		}).exec()

		if (!updateDoc) throw new NotFoundException('Document not found')

		return updateDoc
	}

	async toggleActive(_id: string) {
		const updateDoc = await this.ProductModel.findById(_id)

		if (!updateDoc) throw new NotFoundException('Document not found')
		const newValue = !updateDoc.isActive
		return this.ProductModel.findByIdAndUpdate(
			_id,
			{
				$set: { isActive: newValue },
			},
			{
				new: true,
			}
		).exec()
	}

	async delete(_id: string) {
		const deleteDoc = this.ProductModel.findByIdAndDelete(_id).exec()

		if (!deleteDoc) throw new NotFoundException('Document not found')

		return deleteDoc
	}
}
