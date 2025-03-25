import { apiBaseQuery } from '@/lib/api';
import type { Treatment, TreatmentPayload } from '@/lib/schemas';
import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const treatmentApi = createApi({
  reducerPath: 'treatmentApi',
  baseQuery: apiBaseQuery,
  tagTypes: ['Treatment'],
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 259200,
  endpoints: (builder) => ({
    postTreatment: builder.mutation<Treatment, TreatmentPayload>({
      query: (data) => ({
        url: '/treatment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Treatment'],
    }),
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
});

export const { usePostTreatmentMutation } = treatmentApi;

export default treatmentApi;
