import { configureStore} from '@reduxjs/toolkit';
import { contactsSlice} from './slices/contactsSlice'

export default configureStore({
    reducer: {
        contacts: contactsSlice
    }
});