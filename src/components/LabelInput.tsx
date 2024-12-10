import React, { ReactNode } from 'react'
import { Label } from './ui/label'

type Props = {
    children: ReactNode
    inputId: string
}

const LabelInput = ({ children, inputId }: Props) => {

    return (
        <Label htmlFor={inputId} className="text-sm text-slate-50 font-semibold  bg-brand-2 p-1 rounded-xl px-4" >
            {children}
        </Label>
    )
}

export default LabelInput