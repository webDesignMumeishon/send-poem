import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import LabelInput from "../LabelInput";

type Props = {
    id: string
    handleSelectChange: (field: string, value: string) => void
}

const LanguageStyleSelect = ({ handleSelectChange, id }: Props) => {

    return (
        <div>
            <LabelInput inputId={id}>
                Select Language/Style Preference
            </LabelInput>
            <Select onValueChange={(value) => handleSelectChange(id, value)}>
                <SelectTrigger id={id} className="w-full mt-2">
                    <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="archaic">Archaic</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                    <SelectItem value="poetic">Poetic</SelectItem>
                    <SelectItem value="shakespearean">Shakespearean</SelectItem>
                    <SelectItem value="simple">Simple and Clear</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageStyleSelect;
