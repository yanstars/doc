---
title: Centos
id: Centos
---

### 查询端口占用

```bash
lsof -i:80
netstat -nlpt | grep 80
ps -ef | grep 8246
ps -x | grep 8246

# 正常杀死
kill -1 pid
# 强制杀死
kill -9 pid
#
pkill -9 pid
```

### crontab(定时任务)

`* * * * * commond`

```bash
/sbin/service crond start
/sbin/service crond stop
/sbin/service crond restart
/sbin/service crond reload

#
 crontab -l；
 crontab -e；
 crontab -r
 service crond status
```

### gitlab 测试邮件通知的时候报错

- 使用 gitlab 测试邮件通知的时候报错

> sendmail: fatal: parameter inet_interfaces: no local interface >found for ::1

- 修改这个文件

`vim /etc/postfix/main.cf`

- 把下面两行

```config
inet_interfaces = localhost
inet_protocols = all
```

- 改为

```config
inet_interfaces = all
inet_protocols = all
```

- 再重启 postfix

`service postfix start`

- 查看任务日志

`vim /var/spool/mail/root`

[原文链接](https://blog.csdn.net/github_37673306/java/article/details/84755551)

### 定时任务启动容器报错

> `15 8 * * * docker run --shm-size 1G -i -t --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`
> 定时任务 docker 启动容器报错
> 报错：the input device is not a TTY

方案: 任务启动容器命令中去掉 `-t` 参数
`15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`

[原文链接](https://www.cnblogs.com/killall007/p/9494189.html)

- docker 任务

`15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`

修改目录结构

`docker run --shm-size 1G --rm -v /root/popu:/app alekzonder/puppeteer:latest node my_script.js`
`docker run --shm-size 1G --rm -v /root/mydocker/popp:/app alekzonder/puppeteer:latest node app.js`

### ssh 免密登录后登录仍然需要密码

关于配置 ssh 免密登录后仍然需要密码的解决问题

- sshd_config 禁用 root 账户登录

```bash
vim  /etc/ssh/sshd_config
PermitRootLogin yes #允许root 免密登录
PubkeyAuthentication yes # 允许免密登录
AuthorizedKeysFile .ssh/authorized_keys  # 密钥位置
AuthorizedPrincipalsFile none
AuthorizedKeysCommand none
AuthorizedKeysCommandUser nobody
```

- /.ssh 权限问题

```bash
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/authorized_keys
```

- 重启 ssd 服务

`service sshd restart`
