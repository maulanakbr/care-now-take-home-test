import { PrismaModule } from '../../services/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MedicationPrescribedService } from './medication-prescribed.service';
import { MedicationPrescribedController } from './medication-prescribed.controller';

@Module({
  imports: [PrismaModule],
  providers: [MedicationPrescribedService],
  controllers: [MedicationPrescribedController],
})
export class MedicationPrescribedModule {}
