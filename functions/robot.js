function returnhome(){
  const data = fetch_home_data();
    const fileIcons = {
    pdf: "fa-file-pdf",
    exe: "fa-file-code",
    zip: "fa-file-archive",
    word: "fa-file-word",
    video: "fa-file-video",
    code: "fa-file-code",
    default: "fa-file"
};
 const fixed1 = `
  <!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ZIT-CoCo-Community|CoCo编辑器的小圳社区|自定义控件下载中心</title><link rel="stylesheet" href="https://cc.zitzhen.cn/css/style.css"><link rel="icon" href="favicon.png" type="image/png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><link rel="stylesheet" href="https://cc.zitzhen.cn/css/Custom_button.css"><script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script><link rel="stylesheet" href="https://cc.zitzhen.cn/css/pay_button.css"><meta name='description' content='CoCo-Community，全称为ZIT-CoCo-Community。这是由于ZIT小圳创科工作室的创造的编程猫CoCo编辑器社区，目前提供自定义控件下载服务，后续会支持论坛的交流，'><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7240019936857616"crossorigin="anonymous"></script></head><div class="progress-container" id="Loading"><div class="progress-bar"></div></div><body><header><div class="container"><h1>ZIT-CoCo-Community CoCo编辑器的小圳社区 自定义控件下载中心</h1><p>本服务由小圳社区提供</p><p>ZIT-CoCo-Community</p></div></header><div class="container"><div class="search-bar"><input type="text" id="searchInput" placeholder="搜索文件..."><button id="searchBtn"><i class="fas fa-search"></i> 搜索</button></div><h2 style="text-align: center;" id="Loading_text">请稍后，正在加载</h2><div class="file-list" id="fileList">
  `
  const fixed2 = `           
    </div></div><footer><div class="container"><p>© 2025 小圳社区 - CoCo自定义控件下载中心 | 所有文件仅供学习交流使用</p><footer><div class="bottom-button"><a href="https://github.com/zitzhen/CoCo-Community" target="_blank"><button class="btn"><svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><image href="https://cc.zitzhen.cn/images/github.svg" width="24" height="24" x="0" y="0"/></svg></button></a><a href="https://gitee.com/hello-oliver/CoCo-Community" target="_blank"><button class="btn"><svg width="40" height="40" fill="#c71d23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitee"><image href="https://cc.zitzhen.cn/images/gitee.svg" width="24" height="24" x="0" y="0"/></svg></button></a><a href="https://jihulab.com/zitzhen/CoCo-Community"><button class="btn bins"><svg width="40" height="40" fill="#FC6D26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg></button></a></div><br><div style="margin: 0 auto;"><a href="tipping/" style="margin: 0 auto;"><button class="Btn" style="margin: 0 auto;">向我们打赏<svg class="svgIcon" viewBox="0 0 576 512"><image href="https://cc.zitzhen.cn/images/gitlab.svg" width="24" height="24" x="0" y="0"/></svg></button></a></div><p>请优先使用GitHub查看ZIT-CoCo-Community的开源项目</p></div></footer></body></html>
    `
  const fileType = file.type || 'default';
  const iconClass = fileIcons[fileType] || fileIcons.default;
  for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
  let show = "";
  show += `
    <div class="file-icon">
      <i class="fas ${iconClass}"></i>
  </div>
  <div class="file-name">${data[i]}</div>

  <a href="https://cc.zitzhen.cn/control/${data[i]}" class="download-btn">
      <i class="fas fa-download"></i> 去详情页面
  </a>
  
`

  }
  
}


async function fetch_home_data() {
  try{
      const response = await fetch(`https://cc.zitzhen.cn/list.json`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const content = await response.json();
      const list = content.list;
      return list;
  }catch (error){
    // 抛出错误
  }
}


export async function onRequest(context) {
  const { request, next } = context;
  const userAgent = request.headers.get('user-agent') || '';

  const url = new URL(request.url);
  
    if (url =="https://cc.zitzhen.cn" ||url == "https://cc.zitzhen.cn/")
    {
        const yeshome = true;
    }  
    // 使用正则获取最后一部分
  const lastPart = url.pathname.match(/\/([^\/]+)\/?$/)?.[1] || '';

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