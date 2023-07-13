import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { InfoController } from './info/info.controller';
import { SystemModule } from './system/system.module';

@Module({
  imports: [SystemModule],
  controllers: [AppController, CatsController, InfoController],
  providers: [AppService],
})
export class AppModule {}
