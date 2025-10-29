import { NextResponse } from 'next/server'
import { supabase } from '@/lib/databaseHelper'

export async function GET() {
  try {
    // Fetch only metadata columns + file_url
    const { data, error } = await supabase
      .from('gifs_metadata')
      .select('id, file_name, file_url, title, description, tags, created_at, updated_at')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error('Get GIF Metadata Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
