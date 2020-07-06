## 简介

采用无侵入式对代码完成日志添加，了解每个请求在 service 中代码消耗的时间，用于排查和定位问题。

依赖包：

1. elastic-apm-node

参考文档：https://www.elastic.co/guide/en/apm/agent/nodejs/current/koa.html

#### ELK+APM环境搭建

ELK
```shell
git clone https://github.com/deviantony/docker-elk.git

cd docker-elk

docker-compose up -d
```

apm
```
cd /opt

wget https://artifacts.elastic.co/downloads/apm-server/apm-server-7.8.0-linux-x86_64.tar.gz

gunzip  apm-server-7.8.0-linux-x86_64.tar.gz

tar -xf apm-server-7.8.0-linux-x86_64.tar.gz

mv  apm-server-7.8.0-linux-x86_64.tar.gz apm-server

cd apm-server

```

修改apm配置文件
```shell
vim apm-server.yml
[apm-server.yml]
apm-server:
  host: "0.0.0.0:8200"
kibana:
  enabled: true
  host: "localhost:5601"

  protocol: "http"
  username: "elastic"
  password: "changeme"


output.elasticsearch:
  hosts: ["localhost:9200"]
  username: "elastic"
  password: "changeme"
``` 

```shell
./apm-server -e
```