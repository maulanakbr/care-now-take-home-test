import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { CreateTreatmentDto } from './create-treatment.dto';

@Controller('treatment')
export class TreatmentController {
  public constructor(private readonly treatmentService: TreatmentService) {}

  @Post()
  public async create(@Body() data: CreateTreatmentDto) {
    const treatment = await this.treatmentService.create(data);

    return {
      status: HttpStatus.CREATED,
      data: treatment,
    };
  }
}
