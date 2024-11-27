import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-3zn2T1ZPN4i10Zq2FKEuomSj",
    project: "proj_xVTk9cgIidZj0ax7MmWwFfDY",
});

export default openai