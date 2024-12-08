
import React from 'react'
import LabelInput from '../LabelInput'
import { Textarea } from '../ui/textarea'

type Props = {
    id: string
    value: string
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdditionalInfoTextarea = ({ value, handleInputChange, id }: Props) => {
    return (
        <div>
            <LabelInput inputId={id} >Additional Information</LabelInput>
            <Textarea
                id={id}
                name={id}
                value={value}
                onChange={handleInputChange}
                className="border-brand-2 mt-2"
            />
        </div>
    )
}

export default AdditionalInfoTextarea