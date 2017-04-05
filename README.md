# Face

本人第一个基于angular2开发的项目，既是学习，也是试水，开发的过程中，我会把开发中遇到的坑罗列出来。

本项目采用angular-cli快速开发，所有数据使用接口均是真实接口，如需使用本项目学习，请自行安装angular-cli。

郑重声明：本项目禁止商用。

### 项目更新日志：

2017-04-05增加卡列表，删卡，卡号绑卡


### 开发心得

1.ng2对浏览器参数的支持很是暧昧，巨坑！！！首先ng2官方推荐用HTML 5 pushState风格的来配置链接

    “现代HTML 5浏览器支持history.pushState API， 这是一项可以改变浏览器的当前地址和历史，却又不会触发服务端页面请求的技术。 路由器可以合成出一个“自然的”URL，它看起来和那些需要进行页面加载的URL没什么区别。”

    看起来是这样的：localhost:3002/crisis-center/

    “老旧的浏览器在当前地址的URL变化时总会往服务器发送页面请求……唯一的例外规则是：当这些变化位于“#”（被称为“hash”）后面时不会发送。通过把应用内的路由URL拼接在#之后，路由器可以获得这条“例外规则”带来的优点。”

    看起来是这样的：localhost:3002/src/#/crisis-center/

好的，你X大你说什么都对。乍一看你说的还蛮有道理的，用pushState风格除了地址栏的链接变漂亮了，对于浏览器加载速度也显著提升（请求少了，自然加载的就快）。

呵，要不是之前就对pushState有所了解，还真就上了你的当。

闲话少说，pushState风格有一个特点，那就是不支持深链接直接访问或者强刷，打个比方，比如正常浏览新闻，里面有新闻列表页，可能长这样
    
    localhost/list

那么文章详情页可能是这样

    localhost/list/page/1

当你觉得这篇文章很好，想分享出去的时候，这个时候如果用pushState风格，你的朋友点开你的链接，是访问不到里面的文章的。因为pushState本身摒弃了#，所以localhost后面的链接都是前端生成的虚拟路径，实际上这个路径根本没有东西，浏览器自然就访问不到资源。

对于这个坑，angular官网的提出的解决方案是在index.html的头部添加

    <base href="/">

这么做的原理是当服务器访问到某个页面，自动返回根目录，返回根目录后，路由就可以接手生成虚拟路径，从而实现正常访问。

但是亲测 并 没 用！！！有人看到这就会觉得汗颜，你说了那么多，没有用那你还说什么呢？嘿，别着急，虽然官方方法不适用，但是原理是对的，我们只要照着这个原理去实践不就好了么。

这里引用前辈大漠穷秋的文章，对照着修改服务器对应文件即可。https://my.oschina.net/mumu/blog/830696