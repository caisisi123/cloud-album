<h2 align='center'>云相册</h2>
<p style="text-align: center">
<a href="https://angular.io/"><img src="https://img.shields.io/badge/Angular-16.2-red" alt="Angular Version"></a>
<a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-4.17-blue" alt="Express Version"></a>
<a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-7.02-brightgreen" alt="MongoDB Version"></a>
<a href="https://mongoosejs.com/"><img src="https://img.shields.io/badge/Mongoose-7.63-orange" alt="Mongoose Version"></a>
<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18.18.2-brightgreen" alt="Node.js Version"></a>
</p>

#### 介绍：这是一个使用Angular框架、Express框架、MongoDB数据库和Mongoose驱动，用Typescript开发的云相册，可以上传图片、查看图片和下载图片。
#### 演示
![演示](./演示.gif "屏幕截图.png")

#### 项目结构
<img src="./项目结构.png">

#### 运行项目
1. 安装MongoDB数据库，启动MongoDB服务
```shell
mongod --dbpath C:\Program Files\MongoDB\Server\7.0\data\db
```
2. 启动angular的开发服务器
```shell
ng serve
```
3. 启动express服务器
```shell
npm run server
```
4. 打开浏览器，浏览
```angular2html
http://localhost:4200
```

