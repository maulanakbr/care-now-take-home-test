import { apiBaseQuery } from '@/lib/api';
import type { TreatmentDescription } from '@/lib/schemas';
import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const treatmentDescriptionApi = createApi({
  reducerPath: 'treatmentDescriptionApi',
  baseQuery: apiBaseQuery,
  tagTypes: ['TreatmentDescription'],
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 259200,
  endpoints: (builder) => ({
    getTreatmentDescriptions: builder.query<TreatmentDescription, void>({
      query: () => ({
        url: `/treatment-description`,
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

export const { useGetTreatmentDescriptionsQuery } = treatmentDescriptionApi;

export default treatmentDescriptionApi;
