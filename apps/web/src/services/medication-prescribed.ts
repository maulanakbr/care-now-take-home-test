import { apiBaseQuery } from '@/lib/api';
import type { MedicationPrescribed } from '@/lib/schemas';
import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const medicationPrescribedApi = createApi({
  reducerPath: 'medicationPrescribedApi',
  baseQuery: apiBaseQuery,
  tagTypes: ['MedicationPrescribed'],
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 259200,
  endpoints: (builder) => ({
    getMedicationPrescribed: builder.query<MedicationPrescribed, void>({
      query: () => ({
        url: `/medication-prescribed`,
        method: 'GET',
      }),
    }),
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
});

export const { useGetMedicationPrescribedQuery } = medicationPrescribedApi;

export default medicationPrescribedApi;
