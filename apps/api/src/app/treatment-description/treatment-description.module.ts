import { PrismaModule } from '../../services/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TreatmentDescriptionService } from './treatment-description.service';
import { TreatmentDescriptionController } from './treatment-description.controller';

@Module({
  imports: [PrismaModule],
  providers: [TreatmentDescriptionService],
  controllers: [TreatmentDescriptionController],
})
export class TreatmentDescriptionModule {}
