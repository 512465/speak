import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkModule } from './work/work.module';
import { FoodModule } from './food/food.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    WorkModule,
    FoodModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'promise',
      synchronize: true,
      retryDelay: 500,
      autoLoadEntities: true,
      retryAttempts: 10,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
