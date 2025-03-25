import type { TreatmentDescription } from '@prisma/client';
import { PrismaService } from '../../services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TreatmentDescriptionService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAll(): Promise<TreatmentDescription[]> {
    return await this.prismaService.treatmentDescription.findMany();
  }
}
