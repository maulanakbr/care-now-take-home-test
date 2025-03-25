import { Controller, Get, HttpStatus } from '@nestjs/common';
import { MedicationPrescribedService } from './medication-prescribed.service';

@Controller('medication-prescribed')
export class MedicationPrescribedController {
  public constructor(
    private readonly medicationPrescribedService: MedicationPrescribedService
  ) {}

  @Get()
  public async getAll() {
    const medicationsPrescribed =
      await this.medicationPrescribedService.getAll();

    return {
      status: HttpStatus.OK,
      data: medicationsPrescribed,
    };
  }
}
