import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import LabelInput from "../LabelInput";

const LanguageStyleSelect = () => {
    const handleChange = (value: any) => {
        console.log("Selected language/style:", value);
    };

    return (
        <div>
            <LabelInput inputId="language-style">
                Select Language/Style Preference
            </LabelInput>
            <Select onValueChange={handleChange}>
                <SelectTrigger id="language-style" className="w-full mt-2">
                    <span>Select a style</span>
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
