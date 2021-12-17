import React, { PureComponent } from 'react'

class Divider extends PureComponent {
    render() {
        return (
            <div className="flex flex-col w-full mb-10">
                <div className="divider"></div>
                <div className="grid h-10 card bg-neutral rounded-box place-items-center">
                    Get more information
                </div>
            </div>
        )
    }
}

export default Divider
