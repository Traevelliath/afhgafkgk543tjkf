import { createContext, useState } from 'react';

export const DropdownContext = createContext({
    hideDropdown: true,
});

export const DropdownProvider = ({ children }) => {
    const [ hideDropdown, setHideDropdown ] = useState(true);
    const value = { hideDropdown, setHideDropdown }

    return (
        <DropdownContext.Provider value={value}>
            {children}
        </DropdownContext.Provider>
    )
}