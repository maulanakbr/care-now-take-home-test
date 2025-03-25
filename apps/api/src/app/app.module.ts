import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TreatmentModule } from './treatment/treatment.module';
import { TreatmentDescriptionModule } from './treatment-description/treatment-description.module';
import { MedicationPrescribedModule } from './medication-prescribed/medication-prescribed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TreatmentModule,
    TreatmentDescriptionModule,
    MedicationPrescribedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
