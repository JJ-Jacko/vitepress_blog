---
title: 微信小程序
date: 2023/11/08 21:05
location: 东莞
tags: 原创 微信小程序
---

## 添加页面
```json [/app.json]
"pages": [
    "/pages/home/home",
    "/pages/message/message",
    "/pages/contact/contact"
]
```
编译自动生成目录

## 添加tabBar
```json [/app.json]
"tabBar": [
    "list": [{
        "pagePath": "pages/home/home",
        "text": "首页",
        "iconPath": "image/home.png",
        "selectedIconPath": "/image/home-active.png"
    },{
        "pagePath": "pages/message/message",
        "text": "消息",
        "iconPath": "image/message.png",
        "selectedIconPath": "/image/message-active.png"
    },{
        "pagePath": "pages/contact/contact",
        "text": "联系我们",
        "iconPath": "image/contact.png",
        "selectedIconPath": "/image/contact-active.png"
    }]
]
```

## 页面配置
```json [/pages/*/*.json]
"navigationBarTitleText": "酒店欢迎您", //页面标题
"navigationBarBackgroundColor": "#e8886d"   //页面颜色
"navigationBarTextStyle": "black",
"backgroundTextStyle":"light",
```

## 轮播图
```json
data: {
    swiperList: []  //存放轮播图列表
},

onload(options) {
    this.getSwiperList()    //生命周期
},

getSwiperList() {   //获取数据
    wx.request({
        url: 'https://applet-base-api-t.itheima.net/slides',
        methon: 'GET',
        success: (res) => {
            console.log(res)    //显示日志
            this.setData({
                swiperList: res.data
            })
        }
    })
}
```
```xml
<swiper indicator-dot circular>
    <swiper-item wx:for="{{swiperList}}" wx:key="id">
        <image src="{{item.image}}"></image>
    </swiper-item>
</swiper>
```
* `indicator-dot` 显示点
* `circular` 允许尾接头

```css
swiper {
    height: 300rpx;
}

swiper image {          //轮播图强制拉伸
    width: 100%;
    height: 100%;
}
```

## 九宫格
```js
data: {
    gridList: []
},

onload(options) {
    this.gridList()
},

getGridList() {
    wx.request({
        url: 'https://applet-base-api-t.itheima.net/categories',
        methon: 'GET',
        success: (res) => {
            console.log(res)
            this.setData({
                gridList: res.data
            })
        }
    })
}
```
```xml
<view class="grid-list">
    <view class="grid-item" wx.for="{{gridList}}" wx:key="id">
        <image src="{{item.icon}}"></iamge>
        <view>{{item.name}}</view>
    </view>
</view>
```
```css
.grid-list {
    display: flex;
    flex-wrap: wrap;
    border-left: solid #efefef;
    border-top: solid #efefef;
}

.grid-item {
    width: 33.33%;
    height: 200rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 3rpx solid #efefef;
    border-bottom: 3rpx solid #efefef;
    box-sizing: border-box;

.grid-item image {
    width: 100rpx;
    height: 100rpx;
}

.grid-item text {
    front-size: 28rpx;
    margin-top: 10rpx;
}
}
```

## 图片
```xml
<view class="img-box">
    <image src="/image/*1.png" mode="widthFix"></image>
    <image src="/image/*2.png" mode="widthFix"></image>
</view>
```
```css
.img-box {
    display: flex;
    padding: 20rpx 10rpx;
    justify-content: space-around;
}

.img-box image {
    width: 45%;
}
```
