import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getAppointmentsData = (state: StateSchema) =>
    state.appointments.data;
