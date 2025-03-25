'use client';

import { Button } from '@/component/ui/button';
import { TreatmentPayload, treatmentPayloadSchema } from '@/lib/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/component/ui/form';
import { Input } from '@/component/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/component/ui/select';
import { useGetTreatmentDescriptionsQuery } from '@/services/treatment-desciption';
import { useGetMedicationPrescribedQuery } from '@/services/medication-prescribed';

export default function TreatmentForm() {
  const form = useForm<TreatmentPayload>({
    resolver: zodResolver(treatmentPayloadSchema),
    defaultValues: {
      name: '',
      cost: '',
      date: moment().toDate(),
      treatmentDescriptionsIds: [],
      medicationsPrescribedIds: [],
    },
  });

  function onSubmit(values: TreatmentPayload) {
    console.log({
      ...values,
      date: moment(values.date).format('YYYY-MM-DD'),
    });
  }

  const { data: treatmentDescriptionsData } =
    useGetTreatmentDescriptionsQuery();
  const treatmentDescriptionOptions = treatmentDescriptionsData.data;

  const { data: medicationPrescribedData } = useGetMedicationPrescribedQuery();
  const medicationPrescribedOptions = medicationPrescribedData.data;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="treatmentDescriptionsIds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Treatment Description</FormLabel>
              <Select
                onValueChange={(value) =>
                  field.onChange(
                    field.value.includes(value)
                      ? field.value.filter((v: string) => v !== value)
                      : [...field.value, value]
                  )
                }
              >
                <SelectTrigger>
                  {field.value.length === 0 && (
                    <SelectValue placeholder="Select treatment" />
                  )}
                  <SelectValue>
                    {field.value.length > 0
                      ? field.value
                          .map(
                            (val: string) =>
                              treatmentDescriptionOptions.find(
                                (opt) => opt.id === val
                              )?.description
                          )
                          .join(', ')
                      : 'Select treatment'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {treatmentDescriptionOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      <input
                        type="checkbox"
                        checked={field.value.includes(option.id)}
                        readOnly
                        className="mr-2"
                      />
                      {option.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="medicationsPrescribedIds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medications Prescribed</FormLabel>
              <Select
                onValueChange={(value) =>
                  field.onChange(
                    field.value.includes(value)
                      ? field.value.filter((v: string) => v !== value)
                      : [...field.value, value]
                  )
                }
              >
                <SelectTrigger>
                  {field.value.length === 0 && (
                    <SelectValue placeholder="Select medication prescribed" />
                  )}
                  <SelectValue>
                    {field.value.length > 0
                      ? field.value
                          .map(
                            (val: string) =>
                              medicationPrescribedOptions.find(
                                (opt) => opt.id === val
                              )?.prescribed
                          )
                          .join(', ')
                      : 'Select medication prescribed'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {medicationPrescribedOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      <input
                        type="checkbox"
                        checked={field.value.includes(option.id)}
                        readOnly
                        className="mr-2"
                      />
                      {option.prescribed}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cost</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter cost"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <DatePicker
                  selected={field.value ? new Date(field.value) : null}
                  onSelect={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                  className="w-full rounded-md border border-input px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
