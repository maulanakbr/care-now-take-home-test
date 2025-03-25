import type { MedicationPrescribed } from '@prisma/client';
import { PrismaService } from '../../services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicationPrescribedService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAll(): Promise<MedicationPrescribed[]> {
    return await this.prismaService.medicationPrescribed.findMany();
  }
}
