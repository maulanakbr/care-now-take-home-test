import { PrismaService } from '../../services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TreatmentDescriptionService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAll() {
    return await this.prismaService.treatmentDescription.findMany();
  }
}
