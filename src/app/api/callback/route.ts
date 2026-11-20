import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return new NextResponse('Parâmetros OAuth em falta.', { status: 400 });
  }

  const tokenResponse = await fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    }
  );

  const data = await tokenResponse.json();
  const provider = 'github';

  if (data.error) {
    const errorHtml = `<!doctype html><html><body><script>
      window.opener.postMessage('authorization:${provider}:error:${JSON.stringify(data)}', '*');
    </script></body></html>`;
    return new NextResponse(errorHtml, {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  const payload = JSON.stringify({
    token: data.access_token,
    provider,
  });

  const successHtml = `<!doctype html><html><body><script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage('authorization:${provider}:success:${payload}', e.origin);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:${provider}", "*");
    })()
  </script></body></html>`;

  return new NextResponse(successHtml, {
    headers: { 'Content-Type': 'text/html' },
  });
}
