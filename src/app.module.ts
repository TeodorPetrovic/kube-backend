import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PagesModule } from "./pages/pages.module";
import { PostsModule } from "./posts/posts.module";
import { CategoriesModule } from "./categories/categories.module";
import { TagsModule } from "./tags/tags.module";
import { MenusModule } from "./menus/menus.module";
import { CommentsModule } from "./comments/comments.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get<string>("DB_HOST") || "localhost",
        port: configService.get<number>("DB_PORT") || 3306,
        username: configService.get<string>("DB_USERNAME") || "root",
        password: configService.get<string>("DB_PASSWORD") || "password",
        database: configService.get<string>("DB_NAME") || "blog_db",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true, // Set to false in production
      }),
      inject: [ConfigService],
    }),
    PagesModule,
    PostsModule,
    CategoriesModule,
    TagsModule,
    MenusModule,
    CommentsModule,
  ],
})
export class AppModule {}
