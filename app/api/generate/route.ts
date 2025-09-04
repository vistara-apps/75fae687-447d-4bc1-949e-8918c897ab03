import { NextRequest, NextResponse } from 'next/server';
import { generateExperience } from '../../lib/ai';

export async function POST(request: NextRequest) {
  try {
    const { prompt, emotion, style } = await request.json();

    if (!prompt || !emotion || !style) {
      return NextResponse.json(
        { error: 'Missing required fields: prompt, emotion, style' },
        { status: 400 }
      );
    }

    const experience = await generateExperience(prompt, emotion, style);

    return NextResponse.json({
      success: true,
      experience
    });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate experience' },
      { status: 500 }
    );
  }
}
