export async function onRequestGet(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const code = url.searchParams.get("code");

    if (!code) {
        return new Response(JSON.stringify({ error: "缺少 code 参数" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        // 1. 用 code 换取 GitHub access_token
        const accessToken = await getGitHubToken(code, env.GITHUB_CLIENT_ID, env.GITHUB_CLIENT_SECRET);
        
        // 2. 获取用户信息
        const userData = await getGitHubUser(accessToken);

        // 3. 返回 JSON 数据给前端
        return new Response(JSON.stringify({
            success: true,
            access_token: accessToken,
            user: {
                id: userData.id,
                login: userData.login,
                avatar_url: userData.avatar_url,
                name: userData.name || userData.login,
            },
        }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: "登录失败" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// 辅助函数：用 code 换取 access_token
async function getGitHubToken(code, clientId, clientSecret) {
    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await response.json();
    return data.access_token;
}

// 辅助函数：获取 GitHub 用户信息
async function getGitHubUser(token) {
    const response = await fetch("https://api.github.com/user", {
        headers: { "Authorization": `Bearer ${token}` },
    });
    return await response.json();
}