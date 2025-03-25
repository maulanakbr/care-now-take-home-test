import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  exports: [PrismaService],
  providers: [ConfigService, PrismaService],
})
export class PrismaModule {}
