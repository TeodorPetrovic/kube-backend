import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Menu } from './menu.entity';

@Entity('submenus')
export class Submenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column({ default: 0 })
  order: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  icon: string;

  @ManyToOne(() => Menu, menu => menu.submenus, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;

  @Column()
  menuId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
