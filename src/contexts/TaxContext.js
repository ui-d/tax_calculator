import firebase from '../firebase'

import { createContext } from 'react'
import React, { useState, useEffect, useContext } from 'react'

export let TaxContext = createContext([])

const TaxProvider = ({ children }) => {
    const [taxes, setTaxes] = useState([])

    useEffect(() => {
        const ref = firebase.firestore().collection('taxes')
        ref.onSnapshot((snapshot) => {
            const newTax = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }))
            setTaxes(newTax[0])
        })
    }, [])

    return <TaxContext.Provider value={taxes}>{children}</TaxContext.Provider>
}

export const useTaxContext = () => {
    const context = useContext(TaxContext)

    if (context === undefined) {
        throw new Error('usePerson must be nested in PersonProvider')
    }

    return context
}

export default TaxProvider
