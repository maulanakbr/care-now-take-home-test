import { PrismaService } from '../../services/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTreatmentDto } from './create-treatment.dto';
import type {
  TreatmentDescription,
  MedicationPrescribed,
} from '@prisma/client';

@Injectable()
export class TreatmentService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async create({
    name,
    treatmentDescriptionsIds,
    medicationsPrescribedIds,
    date,
    cost,
  }: CreateTreatmentDto): Promise<{
    id: string;
    name: string;
    date: Date;
    cost: number;
    treatmentDescriptions: TreatmentDescription[];
    medicationsPrescribed: MedicationPrescribed[];
  }> {
    const validTreatmentDescriptionItems =
      await this.prismaService.treatmentDescription.findMany({
        where: {
          id: { in: treatmentDescriptionsIds },
        },
      });

    const validMedicationPrescribedItems =
      await this.prismaService.medicationPrescribed.findMany({
        where: {
          id: { in: medicationsPrescribedIds },
        },
      });

    if (
      validTreatmentDescriptionItems.length !==
        treatmentDescriptionsIds.length &&
      validMedicationPrescribedItems.length !== medicationsPrescribedIds.length
    ) {
      throw new BadRequestException('Input not valid');
    }
    const treatment = await this.prismaService.treatment.create({
      data: {
        name,
        treatmentDescriptionsIds,
        medicationsPrescribedIds,
        date,
        cost,
      },
    });

    const [treatmentDescriptions, medicationsPrescribed] = await Promise.all([
      this.prismaService.treatmentDescription.findMany({
        where: { id: { in: treatment.treatmentDescriptionsIds } },
      }),
      this.prismaService.medicationPrescribed.findMany({
        where: { id: { in: treatment.medicationsPrescribedIds } },
      }),
    ]);

    return {
      id: treatment.id,
      name: treatment.name,
      date: treatment.date,
      cost: treatment.cost,
      treatmentDescriptions,
      medicationsPrescribed,
    };
  }
}
