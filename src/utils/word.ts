class Word {
    public static upperCaseFirstLetter(word: string): string {
        return word[0].toUpperCase() + word.slice(1)
    }
}

export default Word