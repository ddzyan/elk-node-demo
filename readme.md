## 简介

采用无侵入式对代码完成日志添加，了解每个请求在 service 中代码消耗的时间，用于排查和定位问题。

依赖包：

1. koa-await-breakpoint
2. node-async-hook

#### koa-await-breakpoint

参考文档：https://www.bookstack.cn/read/node-in-debugging/6.1koa-await-breakpoint.md

在引入时配置一下，就可以记录每个请求到来时 await 表达式前后的现场，例如：

1. await 表达式所在的文件及行列号（filename）。
2. await 表达式是执行的第几步（step）。
3. await 表达式字符串形式（fn）。
4. 执行 await 表达式所花费的毫秒（take）。
5. 执行 await 表达式的结果（result）。
6. 当前请求的 ctx。

branch

1. master : 采用 logstash 完成日志上传到 elasticsearch
2. apm : 日志上传到 apm-server
