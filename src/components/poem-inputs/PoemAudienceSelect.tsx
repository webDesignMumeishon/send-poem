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

const PoemAudienceSelect = ({ handleSelectChange, id }: Props) => {
    return (
        <div>
            <LabelInput inputId="poem-audience">
                Who will be reading this poem?
            </LabelInput>
            < Select onValueChange={(value) => handleSelectChange(id, value)} >
                <SelectTrigger id="poem-audience" className="w-full mt-2" >
                    <SelectValue placeholder="Select your audience" />
                </SelectTrigger>
                < SelectContent >
                    <SelectItem value="friend" > A Friend </SelectItem>
                    < SelectItem value="romantic-partner" > Romantic Partner </SelectItem>
                    < SelectItem value="children" > Children </SelectItem>
                    < SelectItem value="family" > Family Member </SelectItem>
                    < SelectItem value="community" > A Community </SelectItem>
                    < SelectItem value="yourself" > Yourself </SelectItem>
                    < SelectItem value="general-audience" > General Audience </SelectItem>
                    < SelectItem value="specific-person" > A Specific Person </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default PoemAudienceSelect;
