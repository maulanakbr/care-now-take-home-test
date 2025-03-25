import {
  OnModuleInit,
  OnModuleDestroy,
  LogLevel,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, PrismaClient } from '@prisma/client';

export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  public constructor(configService: ConfigService) {
    let customLogLevels: LogLevel[];

    try {
      customLogLevels = JSON.parse(
        configService.get<string>('LOG_LEVELS')
      ) as LogLevel[];
      // eslint-disable-next-line no-empty
    } catch {}

    const log: Prisma.LogDefinition[] =
      customLogLevels?.includes('debug') || customLogLevels?.includes('verbose')
        ? [{ emit: 'stdout', level: 'query' }]
        : [];

    super({
      log,
      errorFormat: 'colorless',
    });
  }

  public async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      Logger.error(error, 'PrismaService');
    }
  }

  public async onModuleDestroy() {
    await this.$disconnect();
  }
}
