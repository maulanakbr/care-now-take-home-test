import treatmentDescription from '@/services/treatment-desciption';
import medicationPrescribed from '@/services/medication-prescribed';
import treatment from '@/services/treatment';

const rootServices = {
  reducers: {
    [treatmentDescription.reducerPath]: treatmentDescription.reducer,
    [medicationPrescribed.reducerPath]: medicationPrescribed.reducer,
    [treatment.reducerPath]: treatment.reducer,
  },
  middlewares: [
    treatmentDescription.middleware,
    medicationPrescribed.middleware,
    treatment.middleware,
  ],
};

export default rootServices;
