import { IsString, IsNotEmpty, IsEmail, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  authorName: string;

  @IsEmail()
  @IsNotEmpty()
  authorEmail: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  @IsNotEmpty()
  postId: number;

  @IsBoolean()
  @IsOptional()
  isApproved?: boolean;
}

export class UpdateCommentDto {
  @IsString()
  @IsOptional()
  authorName?: string;

  @IsEmail()
  @IsOptional()
  authorEmail?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  @IsOptional()
  isApproved?: boolean;
}
