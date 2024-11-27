
import React from 'react'
import LabelInput from '../LabelInput'
import { Textarea } from '../ui/textarea'

const AdditionalInfoTextarea = () => {
    return (
        <div>
            <LabelInput inputId="additional-info" >Additional Information</LabelInput>
            <Textarea
                id="additional-info"
                name="additionalInfo"
                // value={inputs.additionalInfo}
                // onChange={handleInputChange}
                className="border-red-200 focus:ring-red-500 focus:border-red-500 mt-2"
            />
        </div>
    )
}

export default AdditionalInfoTextarea