import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});
