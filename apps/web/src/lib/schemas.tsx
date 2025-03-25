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

export const treatmentSchema = z.object({
  name: z.string(),
  treatmentDescriptionsIds: z.array(z.string()),
  medicationsPrescribedIds: z.array(z.string()),
  date: z.date(),
  cost: z.number(),
});

export const treatmentPayloadSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided',
    })
    .trim()
    .min(1, { message: 'Name cannot be empty' }),
  treatmentDescriptionsIds: z
    .array(
      z.string({
        required_error: 'Treatment description ID must be provided',
      })
    )
    .min(1, { message: 'Treatment description cannot be empty' }),
  medicationsPrescribedIds: z
    .array(
      z.string({
        required_error: 'Medication prescribed ID must be provided',
      })
    )
    .min(1, { message: 'Medication prescribed cannot be empty' }),

  date: z.date({
    required_error: 'Date must be provided',
  }),
  cost: z
    .number({
      required_error: 'Cost must be provided',
    })
    .min(1, { message: 'Cost cannot be empty' }),
});

const treatmentDescriptionSchema = z.object({
  description: z.string(),
  fee: z.number(),
});

const medicationPrescribedSchema = z.object({
  prescribed: z.string(),
  fee: z.number(),
});

export type Treatment = BaseReduxResponse<
  (BaseResponse & z.infer<typeof treatmentSchema>)[]
>;

export type TreatmentDescription = BaseReduxResponse<
  (BaseResponse & z.infer<typeof treatmentDescriptionSchema>)[]
>;

export type MedicationPrescribed = BaseReduxResponse<
  (BaseResponse & z.infer<typeof medicationPrescribedSchema>)[]
>;

export type TreatmentPayload =
  | z.infer<typeof treatmentPayloadSchema>
  | FieldValues;
