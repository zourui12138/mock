/*
在安装好json server之后，通过 json-server -h 可以看到如下配置项：

json-server [options] <source>

Options:
  --config, -c       指定 config 文件                  [默认: "json-server.json"]
  --port, -p         设置端口号                                   [default: 3000]
  --host, -H         设置主机                                   [默认: "0.0.0.0"]
  --watch, -w        监控文件                                           [boolean]
  --routes, -r       指定路由文件
  --static, -s       设置静态文件
  --read-only, --ro  只允许 GET 请求                                    [boolean]
  --no-cors, --nc    禁止跨域资源共享                                   [boolean]
  --no-gzip, --ng    禁止GZIP                                          [boolean]
  --snapshots, -S    设置快照目录                                     [默认: "."]
  --delay, -d        设置反馈延时 (ms)
  --id, -i           设置数据的id属性 (e.g. _id)                     [默认: "id"]
  --quiet, -q        不输出日志信息                                     [boolean]
  --help, -h         显示帮助信息                                       [boolean]
  --version, -v      显示版本号                                         [boolean]
*/

var Mock  = require('mockjs');
var Random = Mock.Random;

module.exports = function() {
    var data = {news: []};

    for (var i = 0; i < 100; i++) {

        var content = Random.cparagraph(0,10);

        data.news.push({
            id: i,
            title: Random.cword(8,20),
            desc: content.substr(0,40),
            tag: Random.cword(2,6),
            views: Random.integer(100,5000),
            images: Random.image('200x100', Random.color(), Random.word(2,6))
        })
    }

    return data
};