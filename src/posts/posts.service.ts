import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Post } from './post.entity';
import { Category } from '../categories/category.entity';
import { Tag } from '../tags/tag.entity';
import { CreatePostDto, UpdatePostDto } from './post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const { categoryIds, tagIds, ...postData } = createPostDto;
    
    const post = this.postsRepository.create(postData);
    
    if (categoryIds && categoryIds.length > 0) {
      post.categories = await this.categoriesRepository.findBy({ id: In(categoryIds) });
    }
    
    if (tagIds && tagIds.length > 0) {
      post.tags = await this.tagsRepository.findBy({ id: In(tagIds) });
    }
    
    return await this.postsRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find({ 
      relations: ['categories', 'tags', 'comments']
    });
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postsRepository.findOne({ 
      where: { id },
      relations: ['categories', 'tags', 'comments']
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async findBySlug(slug: string): Promise<Post> {
    const post = await this.postsRepository.findOne({ 
      where: { slug },
      relations: ['categories', 'tags', 'comments']
    });
    if (!post) {
      throw new NotFoundException(`Post with slug ${slug} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const { categoryIds, tagIds, ...postData } = updatePostDto;
    const post = await this.findOne(id);
    
    Object.assign(post, postData);
    
    if (categoryIds !== undefined) {
      if (categoryIds.length > 0) {
        post.categories = await this.categoriesRepository.findBy({ id: In(categoryIds) });
      } else {
        post.categories = [];
      }
    }
    
    if (tagIds !== undefined) {
      if (tagIds.length > 0) {
        post.tags = await this.tagsRepository.findBy({ id: In(tagIds) });
      } else {
        post.tags = [];
      }
    }
    
    return await this.postsRepository.save(post);
  }

  async remove(id: number): Promise<void> {
    const post = await this.findOne(id);
    await this.postsRepository.remove(post);
  }
}
