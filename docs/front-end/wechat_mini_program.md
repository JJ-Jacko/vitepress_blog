---
title: WeChat Mini Program
date: 2023/11/08 21:05
location: Dongguan
tags: Original WeChat Mini Program
---

## Add a page
```json [/app.json]
"pages": [
    "/pages/home/home",
    "/pages/message/message",
    "/pages/contact/contact"
]
```
The directory will be generated automatically after compilation.

## Add a tabBar
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

## Page configuration
```json [/pages/*/*.json]
"navigationBarTitleText": "酒店欢迎您", //page title
"navigationBarBackgroundColor": "#e8886d"   //page color
"navigationBarTextStyle": "black",
"backgroundTextStyle":"light",
```

## Carousel
```json
data: {
    swiperList: []  //store carousel items
},

onload(options) {
    this.getSwiperList()    //lifecycle hook
},

getSwiperList() {   //fetch data
    wx.request({
        url: 'https://applet-base-api-t.itheima.net/slides',
        methon: 'GET',
        success: (res) => {
            console.log(res)    //print logs
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
* `indicator-dot` shows the indicator dots
* `circular` enables looped scrolling

```css
swiper {
    height: 300rpx;
}

swiper image {          //force carousel image stretch
    width: 100%;
    height: 100%;
}
```

## Grid menu
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

## Images
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
