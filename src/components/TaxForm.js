import React, { useState } from 'react'
import { useTaxContext } from '../contexts/TaxContext'
import { useFormContext } from '../contexts/FormContext'

function TaxForm() {
    const [salary, setSalary] = useState('')
    const [country, setCountry] = useState('')
    const [period, setPeriod] = useState('')
    const taxes = useTaxContext()
    const countriesArr = Object.keys(taxes)
    const { formData, setFormData } = useFormContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            country: country,
            salary: salary,
            period: period,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:items-end justify-center mt-12">
                <div className="form-control w-full sm:w-6/12">
                    <label className="label">
                        <span className="label-text">Salary</span>
                    </label>
                    <input
                        required={true}
                        onChange={(e) => setSalary(e.target.value)}
                        type="text"
                        placeholder="Amount"
                        className="input input-bordered"
                    />
                </div>
                <div className="flex gap-3 sm:gap-1 sm:flex-col">
                    <div className="flex items-center">
                        <input
                            onChange={(e) => setPeriod(e.target.value)}
                            type="radio"
                            className="radio radio-xs"
                            id="radio-1"
                            value="annual"
                            name="salary"
                        />
                        <label htmlFor="radio-1" className="ml-2">
                            Annual
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            onChange={(e) => setPeriod(e.target.value)}
                            type="radio"
                            className="radio radio-xs"
                            id="radio-2"
                            value="month"
                            name="salary"
                        />
                        <label htmlFor="radio-2" className="ml-2">
                            Month
                        </label>
                    </div>
                </div>
                <div className="form-control w-full sm:w-3/12">
                    <label className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <select
                        required={true}
                        defaultValue={'DEFAULT'}
                        onChange={(e) => setCountry(e.target.value)}
                        className="select select-bordered w-full mx-auto "
                    >
                        <option value={'DEFAULT'} disabled="disabled">
                            Choose country
                        </option>
                        {countriesArr.map((tax, index) => {
                            return (
                                <option key={index} value={tax}>
                                    {' '}
                                    {tax}{' '}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <button type="submit" className="btn w-3/12">
                    Check
                </button>
            </div>
        </form>
    )
}

export default TaxForm
