import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { Submenu } from './submenu.entity';
import { CreateMenuDto, UpdateMenuDto, CreateSubmenuDto, UpdateSubmenuDto } from './menu.dto';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu)
    private menusRepository: Repository<Menu>,
    @InjectRepository(Submenu)
    private submenusRepository: Repository<Submenu>,
  ) {}

  // Menu operations
  async createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = this.menusRepository.create(createMenuDto);
    return await this.menusRepository.save(menu);
  }

  async findAllMenus(): Promise<Menu[]> {
    return await this.menusRepository.find({ 
      relations: ['submenus'],
      order: { order: 'ASC', submenus: { order: 'ASC' } }
    });
  }

  async findOneMenu(id: number): Promise<Menu> {
    const menu = await this.menusRepository.findOne({ 
      where: { id },
      relations: ['submenus'],
      order: { submenus: { order: 'ASC' } }
    });
    if (!menu) {
      throw new NotFoundException(`Menu with ID ${id} not found`);
    }
    return menu;
  }

  async updateMenu(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const menu = await this.findOneMenu(id);
    Object.assign(menu, updateMenuDto);
    return await this.menusRepository.save(menu);
  }

  async removeMenu(id: number): Promise<void> {
    const menu = await this.findOneMenu(id);
    await this.menusRepository.remove(menu);
  }

  // Submenu operations
  async createSubmenu(createSubmenuDto: CreateSubmenuDto): Promise<Submenu> {
    const submenu = this.submenusRepository.create(createSubmenuDto);
    return await this.submenusRepository.save(submenu);
  }

  async findAllSubmenus(): Promise<Submenu[]> {
    return await this.submenusRepository.find({ 
      relations: ['menu'],
      order: { order: 'ASC' }
    });
  }

  async findSubmenusByMenu(menuId: number): Promise<Submenu[]> {
    return await this.submenusRepository.find({ 
      where: { menuId },
      relations: ['menu'],
      order: { order: 'ASC' }
    });
  }

  async findOneSubmenu(id: number): Promise<Submenu> {
    const submenu = await this.submenusRepository.findOne({ 
      where: { id },
      relations: ['menu']
    });
    if (!submenu) {
      throw new NotFoundException(`Submenu with ID ${id} not found`);
    }
    return submenu;
  }

  async updateSubmenu(id: number, updateSubmenuDto: UpdateSubmenuDto): Promise<Submenu> {
    const submenu = await this.findOneSubmenu(id);
    Object.assign(submenu, updateSubmenuDto);
    return await this.submenusRepository.save(submenu);
  }

  async removeSubmenu(id: number): Promise<void> {
    const submenu = await this.findOneSubmenu(id);
    await this.submenusRepository.remove(submenu);
  }
}
