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

export default function TreatmentForm() {
  const treatmentOptions = [
    { label: 'Treatment 1', value: 'treatment1' },
    { label: 'Treatment 2', value: 'treatment2' },
    { label: 'Treatment 3', value: 'treatment3' },
  ];

  const medicationOptions = [
    { label: 'Medication 1', value: 'med1' },
    { label: 'Medication 2', value: 'med2' },
    { label: 'Medication 3', value: 'med3' },
  ];

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
                      ? field.value.filter((v) => v !== value)
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
                              treatmentOptions.find((opt) => opt.value === val)
                                ?.label
                          )
                          .join(', ')
                      : 'Select treatment'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {treatmentOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <input
                        type="checkbox"
                        checked={field.value.includes(option.value)}
                        readOnly
                        className="mr-2"
                      />
                      {option.label}
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
                      ? field.value.filter((v) => v !== value)
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
                              medicationOptions.find((opt) => opt.value === val)
                                ?.label
                          )
                          .join(', ')
                      : 'Select medication prescribed'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {medicationOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <input
                        type="checkbox"
                        checked={field.value.includes(option.value)}
                        readOnly
                        className="mr-2"
                      />
                      {option.label}
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
