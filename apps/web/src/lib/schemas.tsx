import * as z from 'zod';
import type { FieldValues } from 'react-hook-form';

type BaseResponse = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

type BaseReduxResponse<T> = {
  status: number;
  data: T;
};

export const treatmentPayloadSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided',
    })
    .trim(),
  treatmentDescriptionsIds: z.array(
    z.string({
      required_error: 'Treatment description ID must be provided',
    })
  ),
  medicationsPrescribedIds: z.array(
    z.string({
      required_error: 'Medication prescribed ID must be provided',
    })
  ),
  date: z.date({
    required_error: 'Date must be provided',
  }),
  cost: z.number({
    required_error: 'Cost must be provided',
  }),
});

const treatmentDescriptionSchema = z.object({
  description: z.string(),
});

const medicationPrescribedSchema = z.object({
  prescribed: z.string(),
});

export type TreatmentDescription = BaseReduxResponse<
  (BaseResponse & z.infer<typeof treatmentDescriptionSchema>)[]
>;

export type MedicationPrescribed = BaseReduxResponse<
  (BaseResponse & z.infer<typeof medicationPrescribedSchema>)[]
>;

export type TreatmentPayload =
  | z.infer<typeof treatmentPayloadSchema>
  | FieldValues;
