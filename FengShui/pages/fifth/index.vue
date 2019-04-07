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
				
			}
		},
		methods: {

		},
		onLoad(option){
			// console.log(option.type)
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

</style>
