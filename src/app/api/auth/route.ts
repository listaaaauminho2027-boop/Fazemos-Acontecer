import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const scope = searchParams.get('scope') || 'repo,user';
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: 'OAUTH_GITHUB_CLIENT_ID não configurado na Vercel.' },
      { status: 500 }
    );
  }

  const redirectUri = `${new URL(request.url).origin}/api/callback`;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scope)}`;

  return NextResponse.redirect(githubAuthUrl);
}
