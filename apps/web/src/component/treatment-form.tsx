'use client';

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
import { Select, SelectTrigger, SelectContent } from '@/component/ui/select';
import { useGetTreatmentDescriptionsQuery } from '@/services/treatment-desciption';
import { useGetMedicationPrescribedQuery } from '@/services/medication-prescribed';
import { usePostTreatmentMutation } from '@/services/treatment';
import { Button } from '@/components/ui/button';
import { Checkbox } from './ui/checkbox';
import * as React from 'react';
import SuccessState from './misc/success-state';

export default function TreatmentForm() {
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

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

  const { data: treatmentDescriptionsData } =
    useGetTreatmentDescriptionsQuery();
  const treatmentDescriptionOptions = treatmentDescriptionsData?.data || [];

  const { data: medicationPrescribedData } = useGetMedicationPrescribedQuery();
  const medicationPrescribedOptions = medicationPrescribedData?.data || [];

  const [postTreatment, { isLoading }] = usePostTreatmentMutation();

  function handleIsSuccess() {
    setIsSuccess(!isSuccess);
  }

  async function onSubmit(values: TreatmentPayload) {
    const result = await postTreatment(values).unwrap();

    if (!isLoading && result.status === 201) {
      form.reset();
      handleIsSuccess();
    }
  }

  if (isSuccess) {
    return <SuccessState handleBack={handleIsSuccess} />;
  }

  return (
    <section className="max-w-screen-sm mx-auto">
      <h3 className="text-2xl mb-4 text-center font-bold">Treatment Form</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-screen-sm"
        >
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
                <Select>
                  <SelectTrigger>
                    <div className="truncate text-gray-700">
                      {field.value.length > 0
                        ? field.value
                            .map(
                              (val: string) =>
                                treatmentDescriptionOptions.find(
                                  (opt) => opt.id === val
                                )?.description
                            )
                            .join(', ')
                        : 'Select'}
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {treatmentDescriptionOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          field.onChange(
                            field.value.includes(option.id)
                              ? field.value.filter((id) => id !== option.id)
                              : [...field.value, option.id]
                          );
                        }}
                      >
                        <Checkbox
                          checked={field.value.includes(option.id)}
                          onCheckedChange={(checked) => {
                            field.onChange(
                              checked
                                ? [...field.value, option.id]
                                : field.value.filter((id) => id !== option.id)
                            );
                          }}
                        />
                        <span>{option.description}</span>
                      </div>
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
                <Select>
                  <SelectTrigger>
                    <div className="truncate text-gray-700">
                      {field.value.length > 0
                        ? field.value
                            .map(
                              (val: string) =>
                                medicationPrescribedOptions.find(
                                  (opt) => opt.id === val
                                )?.prescribed
                            )
                            .join(', ')
                        : 'Select'}
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {medicationPrescribedOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          field.onChange(
                            field.value.includes(option.id)
                              ? field.value.filter((id) => id !== option.id)
                              : [...field.value, option.id]
                          );
                        }}
                      >
                        <Checkbox
                          checked={field.value.includes(option.id)}
                          onCheckedChange={(checked) => {
                            field.onChange(
                              checked
                                ? [...field.value, option.id]
                                : field.value.filter((id) => id !== option.id)
                            );
                          }}
                        />
                        <span>{option.prescribed}</span>
                      </div>
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
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={field.value ? new Date(field.value) : null}
                    onSelect={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    className="w-full rounded-md border border-neutral-200 text-gray-700 border-input px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" isLoading={isLoading}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
