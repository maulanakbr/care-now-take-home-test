import * as z from 'zod';
import type { FieldValues } from 'react-hook-form';

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

export type TreatmentPayload =
  | z.infer<typeof treatmentPayloadSchema>
  | FieldValues;
