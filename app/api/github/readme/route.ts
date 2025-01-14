import { NextResponse } from 'next/server'
import { getReadme } from '../../../../lib/github'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const repo = searchParams.get('repo')

  if (!repo) {
    return NextResponse.json({ error: 'Repository name is required' }, { status: 400 })
  }

  const content = await getReadme('qinisonhlakaniphoxulu', repo)
  return NextResponse.json({ content })
}

