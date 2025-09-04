import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateExperience(
  prompt: string,
  emotion: string,
  style: string
): Promise<{
  title: string;
  description: string;
  imagePrompt: string;
  metadata: any;
}> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: `You are an AI that creates emotional experiences for a marketplace called Remix. 
          Generate compelling titles, descriptions, and image prompts that evoke specific emotions.
          Focus on creating experiences that would drive engagement and business metrics.
          Return JSON with: title, description, imagePrompt, metadata (with emotion, style, tags).`
        },
        {
          role: 'user',
          content: `Create an emotional experience with:
          - Prompt: "${prompt}"
          - Target Emotion: ${emotion}
          - Visual Style: ${style}
          
          Make it commercially viable and emotionally resonant.`
        }
      ],
      temperature: 0.8,
      max_tokens: 500,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content generated');
    }

    // Try to parse JSON, fallback to structured response
    try {
      return JSON.parse(content);
    } catch {
      return {
        title: `${emotion} Experience`,
        description: content.substring(0, 200) + '...',
        imagePrompt: `${style} style artwork evoking ${emotion.toLowerCase()}`,
        metadata: {
          emotion,
          style,
          tags: [emotion.toLowerCase(), style.toLowerCase()]
        }
      };
    }
  } catch (error) {
    console.error('AI generation error:', error);
    throw error;
  }
}
