import { NextRequest, NextResponse } from 'next/server';
import * as tf from '@tensorflow/tfjs'

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams;
  const lng = searchQuery.get('lng') ?? '';
  const lat = searchQuery.get('lat') ?? '';
  const yearMonth = searchQuery.get('year-month') ?? '';

  try {
    return NextResponse.json("TEST");
  } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
  }
}