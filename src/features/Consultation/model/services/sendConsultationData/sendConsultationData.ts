import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { ConsultationData } from '../../types/consultationSchema';
import { consultationActions } from '../../slice/consultationSlice';

interface sendConsultationDataProps {
    name: string;
    surname: string;
    lastname: string;
    email: string;
}

export const sendConsultationData = createAsyncThunk<
    string,
    sendConsultationDataProps,
    ThunkConfig
>(
    'consultation/sendConsultationData',
    async (
        { name, surname, lastname, email },
        { extra, rejectWithValue, dispatch },
    ) => {
        const { api } = extra;
        try {
            const response = await api.post<ConsultationData>(
                '/consultations',
                {
                    name,
                    surname,
                    lastname,
                    email,
                },
            );

            if (!response.data) throw new Error();

            dispatch(
                consultationActions.setData({
                    name: '',
                    surname: '',
                    lastname: '',
                    email: '',
                }),
            );

            return '';
        } catch (error) {
            console.error(error);
            return rejectWithValue('error');
        }
    },
);
