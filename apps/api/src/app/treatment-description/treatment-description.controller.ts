import { Controller, Get, HttpStatus } from '@nestjs/common';
import { TreatmentDescriptionService } from './treatment-description.service';

@Controller('treatment-description')
export class TreatmentDescriptionController {
  public constructor(
    private readonly treatmentDescriptionService: TreatmentDescriptionService
  ) {}

  @Get()
  public async getAll() {
    const treatmentDescriptions =
      await this.treatmentDescriptionService.getAll();

    return {
      status: HttpStatus.OK,
      data: treatmentDescriptions,
    };
  }
}
