import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Submenu } from './submenu.entity';

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  url: string;

  @Column({ default: 0 })
  order: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  icon: string;

  @OneToMany(() => Submenu, submenu => submenu.menu, { cascade: true })
  submenus: Submenu[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
