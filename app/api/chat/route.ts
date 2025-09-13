import { NextResponse } from 'next/server'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import { defineSecret } from 'firebase-functions/params';

// Define the secret in the code
defineSecret('GEMINI_API_KEY');

export async function GET(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      const errorMsg = "Missing Gemini API Key. Please set it as a secret in your Firebase project.";
      console.error(errorMsg);
      return new NextResponse(errorMsg, { status: 500 });
    }

    const listModelsUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const response = await fetch(listModelsUrl);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse('Error listing models', { status: 500 });
  }
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new NextResponse("Missing Gemini API Key", { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  ];

  try {
    const { history, message } = await req.json();

    const formattedHistory = history.map((item: any) => ({
      role: item.role,
      parts: item.parts,
    }));

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: formattedHistory || [],
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
