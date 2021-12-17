import React, { useState, useContext, createContext } from 'react'

let FormContext = createContext({})

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({})

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => {
    const context = useContext(FormContext)

    if (context === undefined) {
        throw new Error('useFormContext must be nested in FormProvider')
    }

    return context
}

export default FormProvider
