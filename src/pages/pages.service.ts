import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';
import { CreatePageDto, UpdatePageDto } from './page.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private pagesRepository: Repository<Page>,
  ) {}

  async create(createPageDto: CreatePageDto): Promise<Page> {
    const page = this.pagesRepository.create(createPageDto);
    return await this.pagesRepository.save(page);
  }

  async findAll(): Promise<Page[]> {
    return await this.pagesRepository.find();
  }

  async findOne(id: number): Promise<Page> {
    const page = await this.pagesRepository.findOne({ where: { id } });
    if (!page) {
      throw new NotFoundException(`Page with ID ${id} not found`);
    }
    return page;
  }

  async findBySlug(slug: string): Promise<Page> {
    const page = await this.pagesRepository.findOne({ where: { slug } });
    if (!page) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return page;
  }

  async update(id: number, updatePageDto: UpdatePageDto): Promise<Page> {
    const page = await this.findOne(id);
    Object.assign(page, updatePageDto);
    return await this.pagesRepository.save(page);
  }

  async remove(id: number): Promise<void> {
    const page = await this.findOne(id);
    await this.pagesRepository.remove(page);
  }
}
