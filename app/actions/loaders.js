import { START_LOADING, STOP_LOADING } from '../constants/loaders';

export const startLoading = name => ({
    type: START_LOADING,
    payload: { name }
});

export const stopLoading = name => ({
    type: STOP_LOADING,
    payload: { name }
});
