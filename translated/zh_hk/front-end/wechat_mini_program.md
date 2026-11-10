## 新增頁面
```json [/app.json]
"pages": [
    "/pages/home/home",
    "/pages/message/message",
    "/pages/contact/contact"
]
```
編譯時會自動產生目錄

## 新增 tabBar
```json [/app.json]
"tabBar": [
    "list": [{
        "pagePath": "pages/home/home",
        "text": "首頁",
        "iconPath": "image/home.png",
        "selectedIconPath": "/image/home-active.png"
    },{
        "pagePath": "pages/message/message",
        "text": "訊息",
        "iconPath": "image/message.png",
        "selectedIconPath": "/image/message-active.png"
    },{
        "pagePath": "pages/contact/contact",
        "text": "聯絡我們",
        "iconPath": "image/contact.png",
        "selectedIconPath": "/image/contact-active.png"
    }]
]
```

## 頁面設定
```json [/pages/*/*.json]
"navigationBarTitleText": "酒店歡迎您", //頁面標題
"navigationBarBackgroundColor": "#e8886d"   //頁面顏色
"navigationBarTextStyle": "black",
"backgroundTextStyle":"light",
```

## 輪播圖
```json
data: {
    swiperList: []  //存放輪播圖列表
},

onload(options) {
    this.getSwiperList()    //生命週期
},

getSwiperList() {   //取得資料
    wx.request({
        url: 'https://applet-base-api-t.itheima.net/slides',
        methon: 'GET',
        success: (res) => {
            console.log(res)    //顯示日誌
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
* `indicator-dot` 顯示指示點
* `circular` 可以循環滑動

```css
swiper {
    height: 300rpx;
}

swiper image {          //輪播圖強制拉伸
    width: 100%;
    height: 100%;
}
```

## 九宮格
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

## 圖片
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
