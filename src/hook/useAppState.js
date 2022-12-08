import { useContext } from 'react';
import { AppStateContext } from '../Context/AppProvider';

const useAppState = () => {
    const context = useContext(AppStateContext);

    if (!context) {
        throw new Error("useAppState must be used within the AppProvider");
    }
    return context;
};

export default useAppState;