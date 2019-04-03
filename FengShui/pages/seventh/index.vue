<template>
	<view>
		<view class="flex-between box">
			<view class="uni-common-mt">
				<view class="uni-form-item uni-column">
					<!-- <view class="title">带清除按钮的输入框</view> -->
					<view class="with-fun">
						<input placeholder-style="color:#F76260" class="uni-input" placeholder="输入内容" :value="inputClearValue" @input="clearInput" />
						<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
					</view>
				</view>
			</view>
			<uni-tag text="发送" size="small" type="primary" @tap="send"></uni-tag>
		</view>
		<view>
			<!-- <view class="uni-padding-wrap uni-common-mt"> -->
			<!-- <view> -->
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
			 @scroll="scroll">
				<view class="scroll-view-item" v-for="(value,key) in list" v-bind:key="key">{{value}}</view>
			</scroll-view>
			<!-- </view> -->
			<!-- <view @tap="goTop" class="uni-link uni-center uni-common-mt">
					点击这里返回顶部
				view></ -->
			<!-- </view> -->
		</view>


	</view>
</template>
<script>
	import uniTag from '@/components/uni-tag.vue'

	export default {
		components: {
			uniTag
		},
		data() {
			return {
				title: 'input',
				focus: false,
				inputValue: '',
				showClearIcon: false,
				inputClearValue: '',
				changeValue: '',
				showPassword: true,
				src: '../../../static/eye-1.png',
				i: 0,
				list: [1, 2, 3],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			clearInput: function(event) {
				this.inputClearValue = event.target.value;
				if (event.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function() {
				this.inputClearValue = '';
				this.showClearIcon = false;
			},
			send: function() {
				var that = this;
				this.list.push(this.i += 1);
				let height = 0;
				var query = wx.createSelectorQuery();
				this.$nextTick(function() {
					query.select('.scroll-Y').boundingClientRect()
					query.select('.scroll-Y .uni-scroll-view .uni-scroll-view>div').boundingClientRect()
					query.exec(function(rect) {
						let heigt = rect[0].height;
						let all_heigt = rect[1].height;
						that.scrollTop = all_heigt - height;
						// console.log(that.scrollTop)
					});
				})

			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style>
	.title {
		padding: 10upx 25upx;
	}

	.uni-common-mt {
		margin: 0;
		width: 88%;
	}


	.box {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20upx;
		position: fixed;
		bottom: 110upx;
	}

	.scroll-view-item {
		/* height: 200upx; */
	}

	.scroll-Y {
		/* height: 500upx; */
		position: fixed;
		height: calc(100% - 300upx);
	}
</style>
