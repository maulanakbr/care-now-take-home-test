import { PrismaModule } from '../../services/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { TreatmentController } from './treatment.controller';

@Module({
  imports: [PrismaModule],
  providers: [TreatmentService],
  controllers: [TreatmentController],
})
export class TreatmentModule {}
