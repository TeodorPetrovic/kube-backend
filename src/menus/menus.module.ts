import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { Menu } from './menu.entity';
import { Submenu } from './submenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Submenu])],
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
