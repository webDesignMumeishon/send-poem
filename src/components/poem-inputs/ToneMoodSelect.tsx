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

const ToneMoodSelect = ({ handleSelectChange, id }: Props) => {

    return (
        <div className="w-full">
            <LabelInput inputId="tone-mood">
                Select Tone/Mood of the Poem
            </LabelInput>
            <Select onValueChange={(value) => handleSelectChange(id, value)} >
                <SelectTrigger id="tone-mood" className="w-full mt-2">
                    <SelectValue placeholder="Select a tone/mood" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="romantic">Romantic</SelectItem>
                    <SelectItem value="melancholic">Melancholic</SelectItem>
                    <SelectItem value="uplifting">Uplifting</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                    <SelectItem value="serene">Serene</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="hopeful">Hopeful</SelectItem>
                    <SelectItem value="nostalgic">Nostalgic</SelectItem>
                    <SelectItem value="mysterious">Mysterious</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default ToneMoodSelect;
