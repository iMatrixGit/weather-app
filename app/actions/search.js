import { INPUT_SEARCH_TEXT } from '../constants/search';

export const inputSearchText = text => ({
    type: INPUT_SEARCH_TEXT,
    payload: { text }
});