import { IsArray, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateTreatmentDto {
  @IsString()
  name: string;

  @IsDateString()
  date: string;

  @IsArray()
  @IsString({ each: true })
  treatmentDescriptionsIds: string[];

  @IsArray()
  @IsString({ each: true })
  medicationsPrescribedIds: string[];

  @IsNumber()
  cost: number;
}
