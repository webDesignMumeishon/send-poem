import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import LabelInput from "../LabelInput";

const ToneMoodSelect = () => {
    const handleChange = (value: any) => {
        console.log("Selected tone/mood:", value);
        // Use this value in your poem generation logic
    };

    return (
        <div className="w-full">
            <LabelInput inputId="tone-mood">
                Select Tone/Mood of the Poem
            </LabelInput>
            <Select onValueChange={handleChange}>
                <SelectTrigger id="tone-mood" className="w-full mt-2">
                    <span>Select a tone/mood</span>
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
