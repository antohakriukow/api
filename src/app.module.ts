import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { getMongoDbConfig } from './config/mongo.config'
import { ProductsModule } from './product/product.module'
import { FileModule } from './file/file.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoDbConfig,
		}),
		ProductsModule,
		FileModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
