import { Html } from '@react-three/drei'
import React from 'react'
import { lineSpinner } from 'ldrs'

const Loader = () => {
    return (
        <Html>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-[10vw] h-[10vw] rounded-full">
                    <l-line-spinner
                        size="40"
                        stroke="4"
                        speed="1"
                        color="white"
                    ></l-line-spinner >
                </div>
            </div>
        </Html>
    )
}

export default Loader



lineSpinner.register()

// Default values shown
