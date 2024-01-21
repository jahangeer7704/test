import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('pdf');
  
  // Get the filename and create a path to save the file
  const filename = file.name;
  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

  // Convert the ArrayBuffer to Buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Write the file to the specified path
  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({ ok: true });
}
