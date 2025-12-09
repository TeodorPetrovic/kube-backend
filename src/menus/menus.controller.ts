import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto, UpdateMenuDto, CreateSubmenuDto, UpdateSubmenuDto } from './menu.dto';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  // Menu endpoints
  @Post()
  createMenu(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.createMenu(createMenuDto);
  }

  @Get()
  findAllMenus() {
    return this.menusService.findAllMenus();
  }

  @Get(':id')
  findOneMenu(@Param('id') id: string) {
    return this.menusService.findOneMenu(+id);
  }

  @Patch(':id')
  updateMenu(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.updateMenu(+id, updateMenuDto);
  }

  @Delete(':id')
  removeMenu(@Param('id') id: string) {
    return this.menusService.removeMenu(+id);
  }

  // Submenu endpoints
  @Post('submenus')
  createSubmenu(@Body() createSubmenuDto: CreateSubmenuDto) {
    return this.menusService.createSubmenu(createSubmenuDto);
  }

  @Get('submenus/all')
  findAllSubmenus() {
    return this.menusService.findAllSubmenus();
  }

  @Get(':menuId/submenus')
  findSubmenusByMenu(@Param('menuId') menuId: string) {
    return this.menusService.findSubmenusByMenu(+menuId);
  }

  @Get('submenus/:id')
  findOneSubmenu(@Param('id') id: string) {
    return this.menusService.findOneSubmenu(+id);
  }

  @Patch('submenus/:id')
  updateSubmenu(@Param('id') id: string, @Body() updateSubmenuDto: UpdateSubmenuDto) {
    return this.menusService.updateSubmenu(+id, updateSubmenuDto);
  }

  @Delete('submenus/:id')
  removeSubmenu(@Param('id') id: string) {
    return this.menusService.removeSubmenu(+id);
  }
}
