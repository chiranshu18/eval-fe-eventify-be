import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './modules/events/events.module';
import { ThemesModule } from './modules/themes/themes.module';

// TODO: Add swagger
// TODO: Add loggers
// TODO: Write unit tests

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db.sqlite',
      autoLoadModels: true,
    }),
    EventsModule,
    ThemesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
