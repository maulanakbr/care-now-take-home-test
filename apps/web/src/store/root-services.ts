import treatmentDescription from '@/services/treatment-desciption';
import medicationPrescribed from '@/services/medication-prescribed';

const rootServices = {
  reducers: {
    [treatmentDescription.reducerPath]: treatmentDescription.reducer,
    [medicationPrescribed.reducerPath]: medicationPrescribed.reducer,
  },
  middlewares: [
    treatmentDescription.middleware,
    medicationPrescribed.middleware,
  ],
};

export default rootServices;
