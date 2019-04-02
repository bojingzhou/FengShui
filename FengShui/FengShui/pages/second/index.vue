<template>
	<view class="page">
		<!-- <page-head :title="title"></page-head> -->
		<!-- <view class="title">右侧带箭头</view> -->
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
				<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
					<view class="uni-media-list-logo">
						<image v-if="showImg" :src="value.img"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top flex-between">

							<view>{{value.title}}</view>
							<view style="margin-right: 30upx;">
								<uni-badge v-bind:text="value.num" v-bind:type="key%2==0?'warning':'danger'"></uni-badge>

							</view>

						</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.content}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex-center btn-box" v-if="btnFlag">
			<view>{{num}}</view>
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
</template>
<script>
	import uniBadge from "@/components/uni-badge.vue";
	import uniTag from '@/components/uni-tag.vue'
	export default {
		components: {
			uniTag,
			uniBadge
		},
		data() {
			return {
				title: 'media-list',
				showImg: false,
				btnFlag: false,
				completeFlag: false,
				num: "10s",
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
				if (type == 0) {} else if (type == 1) {
					uni.navigateTo({
						url: 'pages/fourth/index'
					});
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


			}
		},
		onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
		},
		onReachBottom() {
			if (!this.completeFlag) {
				this.completeFlag = true;
				this.btnFlag = true;
				this.btnShow();
			}

		},
		onShow() {

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
		width: 100%;
		left: 0;
		bottom: 100upx;
		background-color: rgba(255, 255, 255, .3);
	}

	.uni-list-cell-navigate {
		padding: 32upx 30upx;
	}
</style>
