import React from 'react'
import LabelInput from '../LabelInput'
import { Input } from '../ui/input'

const NameInput = () => {
    return (
        <div>
            <LabelInput inputId="name">Recipient&apos;s Name</LabelInput>
            <Input
                id="name"
                name="name"
                // value={inputs.occasion}
                // onChange={handleInputChange}
                required
                className="border-red-200 focus:ring-red-500 focus:border-red-500 mt-2"
            />
        </div>
    )
}

export default NameInput