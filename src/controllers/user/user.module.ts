import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  exports: [UserController],
  providers: [UserService],
  imports: [],
})
export class UserModule {}
