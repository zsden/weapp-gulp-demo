# 微信小程序基于gulp构建的实践

## 主要功能点

- 基于postcss的 scss 转 css 转 wxss
- 基于imagemin的图片压缩等

## 运行


- npm install
- windows下会出现imagemin无法安装，需修改hosts
	> 通过
		[http://www.ipaddress.com](http://www.ipaddress.com)
		查询 [raw.githubusercontent.com](http://raw.githubusercontent.com) 的 ip地址修改hosts
	- 删除node_modules
	- npm install
- gulp dev

## 后续
- 集成tailwindcss