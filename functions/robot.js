export async function onRequest(context) {
  const { request, next } = context;
  const userAgent = request.headers.get('user-agent') || '';
  
  // 常见爬虫的User-Agent列表（可根据需要扩展）
  const botUserAgents = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebot',
    'ia_archiver',
    'twitterbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'outbrain',
    'pinterest',
    'slackbot',
    'vkShare',
    'W3C_Validator',
    'WhatsApp',
    'TelegramBot',
    'Discordbot'
  ];

  // 检查User-Agent是否包含爬虫关键词
  const isBot = botUserAgents.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isBot) {
    // 返回给爬虫的指定HTML
    const botHtml = `
    <!--这里写爬虫看到的页面--!>
    `;

    return new Response(botHtml, {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  // 非爬虫请求，返回正常页面
  return next();
}