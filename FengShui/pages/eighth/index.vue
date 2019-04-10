<template>
	<view class="page">
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="image-view">
					<image class="uni-product-image" :src="product.image"></image>
				</view>
				<view class="uni-product-price flex-center">
					<view>{{product.title}}</view>
					<uni-tag text="姓名" size="small" type="warning"></uni-tag>

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
				title: 'product-list',
				productList: [{
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',

					title: '星座配对'
				},{
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',

					title: '五行婚配'
				}, ],
			};
		},
		methods: {

		},
		onLoad() {

		},
		onPullDownRefresh() {

		},
		onReachBottom() {}
	};
</script>

<style>

</style>
