import React from 'react'
import { ReactComponent as BellButton } from '../images/bell-icon.svg'
import { ReactComponent as SearchButton } from '../images/search-icon.svg'

function Navbar(props) {
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box mt-3">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">Tax Calc</span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Portfolio
                    </a>
                    <a className="btn btn-ghost btn-sm rounded-btn">About</a>
                    <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost">
                    <BellButton />
                </button>
                <button className="btn btn-square btn-ghost">
                    <SearchButton />
                </button>
            </div>
        </div>
    )
}

export default Navbar
