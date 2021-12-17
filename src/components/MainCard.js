import React, { useEffect, useState } from 'react'

import { useTaxContext } from '../contexts/TaxContext'
import { useFormContext } from '../contexts/FormContext'

import API from '../services/freeCurrencyApi'

function Card() {
    const taxes = useTaxContext()
    const { formData, setFormData } = useFormContext()
    const [salary, setSalary] = useState(0)
    const [usdRate, setUsdRate] = useState({})
    const [finalTaxes, setFinalTaxes] = useState(null)

    useEffect(async () => {
        let currencyData = await API.getUsdRate()
        setUsdRate(currencyData.data.data)
    }, [])

    useEffect(() => {
        let salary =
            formData.period === 'month' ? formData.salary * 12 : formData.salary
        setSalary(salary)

        let currentTaxRate = taxes[formData.country]?.['tax_rate']
        let currentCurrency = taxes[formData.country]?.['currency']

        let localTaxValue = (salary * currentTaxRate).toFixed(2)
        let localTaxValueInUsd = (
            localTaxValue / usdRate[currentCurrency]
        ).toFixed(2)
        let anualCost = (+salary + +localTaxValue).toFixed(2)
        let anualCostInUsd = (anualCost / usdRate[currentCurrency]).toFixed(2)
        let anualSalaryInUsd = (salary / usdRate[currentCurrency]).toFixed(2)

        let monthlyPayrollInUsd = (anualCostInUsd / 12).toFixed(2)

        setFinalTaxes({
            anualCost: anualCost,
            anualCostInUsd: anualCostInUsd,
            anualSalaryInUsd: anualSalaryInUsd,
            localTaxValue: localTaxValue,
            localTaxValueInUsd: localTaxValueInUsd,
            monthlyPayrollInUsd: monthlyPayrollInUsd,
            currentTaxRate: currentTaxRate,
            currentCurrency: currentCurrency,
        })
    }, [formData])

    return (
        <section className="card lg:card-side bordered mt-10 mb-20">
            <div className="card-body">
                {formData.country ? (
                    <div>
                        <h2 className="card-title mb-10 text-3xl">
                            {formData.country}
                        </h2>
                        <p className="mb-2">
                            <span className="font-bold pr-3">
                                Annual Salary:
                            </span>
                            {` ${salary} ${finalTaxes.currentCurrency} (~${finalTaxes.anualSalaryInUsd} USD)`}
                        </p>
                        <p className="mb-2">
                            <span className="font-bold pr-3">Local Taxes:</span>
                            {` ${(finalTaxes.currentTaxRate * 100).toFixed(
                                2
                            )}% ${finalTaxes.localTaxValue} ${
                                finalTaxes.currentCurrency
                            } (~${finalTaxes.localTaxValueInUsd} USD)`}
                        </p>
                        <p className="mb-2">
                            <span className="font-bold pr-3">
                                Total Annual Cost:
                            </span>
                            {` ${finalTaxes.anualCost} ${finalTaxes.currentCurrency} (~${finalTaxes.anualCostInUsd} USD)`}
                        </p>
                        <p className="mb-10">
                            <span className="font-bold pr-3">
                                Approx. Monthly Payroll:
                            </span>
                            {` ${finalTaxes.monthlyPayrollInUsd} USD`}
                        </p>
                        <div className="card-actions">
                            <a
                                href="https://pilot.co"
                                className="btn btn-primary"
                            >
                                Get Started
                            </a>
                            <a
                                href="https://pilot.co"
                                className="btn btn-ghost"
                            >
                                More info
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2 className="card-title pb-5">
                            Welcome to Tax Calc 👋
                        </h2>
                        <iframe
                            className="rounded-md"
                            src="https://embed.lottiefiles.com/animation/46411"
                        ></iframe>
                    </>
                )}
            </div>
        </section>
    )
}

export default Card
