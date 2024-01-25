"use server"

import { NextRequest, NextResponse } from 'next/server';
import { loadGraphModel, loadLayersModel } from '@tensorflow/tfjs';

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams;
  const lng = searchQuery.get('lng') ?? '';
  const lat = searchQuery.get('lat') ?? '';
  const yearMonth = searchQuery.get('year-month') ?? '';

  try {

  const model = await loadGraphModel('http://127.0.0.1:3000/model/model.json')
  console.log(model.predict())
  } catch (err: any) {
    console.log(err)
    console.log("NOPE")
  }

  try {
    return NextResponse.json("TEST");
  } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
  }
}