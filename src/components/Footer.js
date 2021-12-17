import React from 'react'
import { ReactComponent as Logo } from '../images/logo.svg'

function Footer(props) {
    return (
        <footer className="items-center p-4 footer bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <Logo />
                <p>Copyright © 2021 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </footer>
    )
}

export default Footer
