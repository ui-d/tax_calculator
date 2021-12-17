import React, { useState, useEffect } from 'react'

import { useTaxContext } from '../contexts/TaxContext'
import { useFormContext } from '../contexts/FormContext'
import { dictionaryToArray } from '../utils/dictionaryToArray'

import Divider from './Divider'

function TaxTable() {
    const {
        formData: { country },
    } = useFormContext()
    const taxes = useTaxContext()
    const [filteredCountries, setFilteredCountries] = useState([])
    // const countriesArr = Object.keys(taxes);

    useEffect(() => {
        let allCountriesData = { ...taxes }
        delete allCountriesData[country]
        setFilteredCountries(allCountriesData)
    }, [country])

    return (
        <div className="overflow-x-auto mt-8 mb-20">
            {country ? (
                <>
                    <Divider />
                    <h2 className="text-left pb-5 text-xs underline underline-offset-1 decoration-gray-500 decoration-1">
                        Compare with other countries
                    </h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Country</th>
                                <th>Tax rate %</th>
                                <th>Currency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dictionaryToArray(filteredCountries).map(
                                (country, index) => (
                                    <tr key={country}>
                                        <td>{index + 1}</td>
                                        <td>{country[0]}</td>
                                        <td>
                                            {(
                                                country[1]['tax_rate'] * 100
                                            ).toFixed(2)}
                                        </td>
                                        <td>{country[1]['currency']}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </>
            ) : null}
        </div>
    )
}

export default TaxTable
