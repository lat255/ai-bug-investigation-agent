import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {

  const { error, code } = await req.json();

  const prompt = `
You are an expert software debugging assistant.

Analyze the following bug.

Error Message:
${error}

Code Snippet:
${code}

Return your answer strictly in JSON format like this:

{
  "language": "detected programming language",
  "bugType": "type of bug (Runtime Error, Syntax Error, API Error, Dependency Error, Logic Error)",
  "explanation": "clear explanation of the error",
  "rootCause": ["possible cause 1", "possible cause 2"],
  "fix": ["fix suggestion 1", "fix suggestion 2"] 
  "correctedCode": "corrected version of the provided code snippet"
}

Do not include any text outside the JSON.
`;

  const completion = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "user", content: prompt }
    ]
  });

  const text = completion.choices[0].message.content ?? "{}";
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  let parsed;
  
  try {
    parsed = JSON.parse(jsonMatch ? jsonMatch[0] : "{}");
  } catch {
    parsed = {
    explanation: text,
    rootCause: [],
    fix: [] 
  };
}

return NextResponse.json(parsed);

}