<template>
	<view class="page">
		<!-- <page-head :title="title"></page-head> -->
		<!-- <view class="title">右侧带箭头</view> -->
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
				<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
					<view class="uni-media-list-logo">
						<image :src="value.img"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top flex-between">

							<view class="flex-left">
								<view>{{value.title}}</view>
								<!-- <uni-tag text="赞" type="warning" size="small" style="margin-left: 10upx;"></uni-tag> -->
							</view>
							<view style="margin-right: 30upx;">
								<uni-badge v-bind:text="value.zan" v-bind:type="key%2==0?'success':'danger'"></uni-badge>

							</view>

						</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.con}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn-box" v-if="btnFlag">
			<view style="display: flex;height:100%;flex-direction:  column; justify-content: center;">
				<view style="text-align: center;font-weight: bold;">{{num}}</view>
				<view style="display: flex;flex-direction: column;">
					<view class="tag-view" @tap="btnTap(0)">
						<uni-tag text="最新" type="danger"></uni-tag>
					</view>
					<view class="tag-view" @tap="btnTap(1)">
						<uni-tag text="前十" type="warning"></uni-tag>
					</view>
					<view class="tag-view" @tap="btnTap(2)">
						<uni-tag text="祈愿" type="success"></uni-tag>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import config from '@/common/config.js'
	import uniBadge from "@/components/uni-badge.vue";
	import uniTag from '@/components/uni-tag.vue'
	export default {
		components: {
			uniTag,
			uniBadge
		},
		data() {
			return {
				number: 0,
				title: 'media-list',
				showImg: false,
				btnFlag: false,
				completeFlag: false,
				num: "10s",
				arr: [],
				list: [{
						title: "木屋",
						content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
						num: "10",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
					},
					{
						num: "10",
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					},
					{
						num: "10",
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					},
					{
						num: "10",
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					},
					{
						num: "10",
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					},
					{
						num: "10",
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					},
					{
						num: "10",
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					},
					{
						num: "10",
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					}

				]
			}
		},
		methods: {
			btnTap: function(type) {
				if (type == 0) {
					this.number = 0
					this.promiseList(0, "normal")
				} else if (type == 1) {
					this.promiseList(0, "love")
				} else if (type == 2) {
					uni.navigateTo({
						url: '/pages/fourth/index'
					});
				}

			},
			btnShow: function() {
				let that = this;
				let num = 10;
				let time = setInterval(function() {
					if (num - 1 >= 0) {
						num -= 1;
						that.num = num + "s";
					} else {
						that.num = 0 + "s";
						that.btnFlag = false;
						that.num = 10 + "s";
						clearInterval(time);
						that.completeFlag = false;
					}
				}, 1000)
			},
			promiseList: function(number, type) {
				let that = this;
				uni.request({
					url: config.url + "promiseList", //仅为示例，并非真实接口地址。
					data: {
						num: number,
						type: type
					},
					method: 'POST',
					success: (res) => {
						if (type == "normal") {
							for (let i = 0; i < res.data.data.length; i++) {
								that.arr.push(res.data.data[i])
							}
							that.list = that.arr
						} else {
							that.list = res.data.data
						}
					},
					fail: () => {},
					complete: () => {

					}
				});
			}
		},
		onLoad() {
			// 			setTimeout(() => {
			// 				this.showImg = true;
			// 			}, 400)
		},
		onReachBottom() {
			if (!this.completeFlag) {
				this.completeFlag = true;
				this.btnFlag = true;
				this.btnShow();
			}
			this.number += 1;
			this.promiseList(this.number, "normal")

		},
		onShow() {
			this.promiseList(this.number, "normal");
			// this.startjiasu();
			// this.jianting();
		},
		onHide() {
			// this.stopjiasu()
		}
	}
</script>

<style>
	.title {
		padding: 20upx;
	}

	.tag-view {
		margin: 10upx 10upx;
		display: inline-block;
	}

	.btn-box {
		/* display: none; */
		position: fixed;
		z-index: 10000;
		/* width: 100%; */
		left: 0;
		bottom: 0;
		height: 100%;
		background-color: rgba(255, 255, 255, .3);
	}

	.uni-list-cell-navigate {
		padding: 32upx 30upx;
	}
</style>
