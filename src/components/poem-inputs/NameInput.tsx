import React from 'react'
import LabelInput from '../LabelInput'
import { Input } from '../ui/input'

type Props = {
    value: string
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const NameInput = ({ value, handleInputChange }: Props) => {
    return (
        <div>
            <LabelInput inputId="name">Recipient&apos;s Name</LabelInput>
            <Input
                id="name"
                name="name"
                value={value}
                onChange={handleInputChange}
                required
                className="border-brand-2 mt-2"
            />
        </div>
    )
}

export default NameInput