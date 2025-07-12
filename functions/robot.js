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
  <!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ZIT-CoCo-Community|CoCo编辑器的小圳社区|自定义控件下载中心</title><link rel="stylesheet" href="css/style.css"><link rel="icon" href="favicon.png" type="image/png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><link rel="stylesheet" href="css/Custom_button.css"><script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script><link rel="stylesheet" href="css/Loading.css"><link rel="stylesheet" href="control/css/error.css"><link rel="stylesheet" href="css/pay_button.css"><meta name='description' content='CoCo-Community，全称为ZIT-CoCo-Community。这是由于ZIT小圳创科工作室的创造的编程猫CoCo编辑器社区，目前提供自定义控件下载服务，后续会支持论坛的交流，'><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7240019936857616"crossorigin="anonymous"></script></head><div class="progress-container" id="Loading"><div class="progress-bar"></div></div><body><header><div class="container"><h1>ZIT-CoCo-Community CoCo编辑器的小圳社区 自定义控件下载中心</h1><p>本服务由小圳社区提供</p><p>ZIT-CoCo-Community</p></div></header><div class="container"><div class="search-bar"><input type="text" id="searchInput" placeholder="搜索文件..."><button id="searchBtn"><i class="fas fa-search"></i> 搜索</button></div><h2 style="text-align: center;" id="Loading_text">请稍后，正在加载</h2><div class="file-list" id="fileList">
  `
  const fixed2 = `           
    </div></div><footer><div class="container"><p>© 2025 小圳社区 - CoCo自定义控件下载中心 | 所有文件仅供学习交流使用</p><footer><div class="bottom-button"><a href="https://github.com/zitzhen/CoCo-Community" target="_blank"><button class="btn"><svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></button></a><a href="https://gitee.com/hello-oliver/CoCo-Community" target="_blank"><button class="btn"><svg width="40" height="40" fill="#c71d23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitee"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.593.593v1.482a.594.594 0 0 1-.593.593H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.593.593.593h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.593-.593h-4.15a.593.593 0 0 1-.593-.593v-1.482a.593.593 0 0 1 .593-.593h6.37c.327 0 .593.266.593.593v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"/></svg></button></a><a href="https://jihulab.com/zitzhen/CoCo-Community"><button class="btn bins"><svg width="40" height="40" fill="#FC6D26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg></button></a></div><br><div style="margin: 0 auto;"><a href="tipping/" style="margin: 0 auto;"><button class="Btn" style="margin: 0 auto;">向我们打赏<svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg></button></a></div><p>请优先使用GitHub查看ZIT-CoCo-Community的开源项目</p></div></footer></body></html>
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