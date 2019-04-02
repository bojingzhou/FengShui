<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-card">
				<view class="uni-card-header uni-card-media">
					<image class="uni-card-media-logo" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"></image>
					<view class="uni-card-media-body">
						<text class="uni-card-media-text-top">小U<uni-tag text="祈愿" size="small" type="success" style="margin-left: 20upx;"></uni-tag></text>
						<text class="uni-card-media-text-bottom">发表于 2018-01-30 15:30</text>
					</view>
				</view>
				<view class="uni-card-content image-view">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="image"></image>
				</view>
				<view class="uni-padding-wrap" style="width: 90%;margin: 0 auto;">
					<view class="uni-btn-v">
						<button type="default" @tap="actionSheetTap">选择祈愿灯</button>
					</view>
				</view>
				<view class="flex-center">
					<uni-tag v-bind:text="selectDeng" type="warning" style="margin: 0 auto;"></uni-tag>
				</view>
				<!-- <view>{{selectDeng}}</view> -->
				<view class="uni-form-item uni-column">
					<view class="with-fun">
						<input class="uni-input" style="text-align: center;" placeholder="请输入祈愿标题" :value="inputClearValue" @input="clearInput" />
						<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
					</view>
				</view>
				<view class="uni-textarea">
					<textarea placeholder="请输入祈愿内容" />
					</view>
				<view class="uni-card-footer">
					<view class="uni-card-link">清空</view>
					<view class="uni-card-link">提交</view>
				</view>
			</view>
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
				showClearIcon: false,
				inputClearValue: '',
				deng:['光明灯', '财神灯', '健康灯', '平安灯', '求子灯', '事业灯', '桃花灯', '文殊灯', '幸福灯', '月老灯', '转运灯', '追忆灯'],
				selectDeng:""
			}
		},
		methods: {
			actionSheetTap() {
				let that=this;
				uni.showActionSheet({
					itemList: ['光明灯', '财神灯', '健康灯', '平安灯', '求子灯', '事业灯', '桃花灯', '文殊灯', '幸福灯', '月老灯', '转运灯', '追忆灯'],
					success: (e) => {
						that.selectDeng=that.deng[e.tapIndex]
// 						console.log(e.tapIndex);
// 						uni.showToast({
// 							title: "点击了第" + e.tapIndex + "个选项",
// 							icon: "none"
// 						})
					}
				})
			},
			clearIcon: function() {
				this.inputClearValue = '';
				this.showClearIcon = false;
			},
			clearInput: function(event) {
				this.inputClearValue = event.target.value;
				if (event.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
		}
	}
</script>

<style>
	.image-view {
		height: 480upx;
		overflow: hidden;
	}

	.image {
		width: 100%;
	}
	.uni-textarea uni-textarea{
		/* padding: 9px 24upx; */
		width: 90%;
		margin: 0 auto;
	}
</style>
