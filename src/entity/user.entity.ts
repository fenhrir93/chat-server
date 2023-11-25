import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  @MinLength(12)
  name: string;

  @Column({ unique: true, length: 255 })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(12)
  email: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  @MinLength(12)
  password: string;
}
