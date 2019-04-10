<template>
	<view class="page">
		<view class="uni-card">
			<view class="uni-card-header flex-left">
				<view>{{key}}</view>
				<view style="margin-left: 20upx;">
					<uni-badge :text=level type="warning"></uni-badge>
				</view>
			</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner">

				</view>
			</view>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view v-for="(item,index) in list" v-bind:key="index">
				<view class="uni-card" @tap="itemTap(index)">
					<view class="uni-card-header">
						<view>{{item.title}}</view>
						<view>
							<uni-badge v-bind:text="item.text" v-bind:type="item.type"></uni-badge>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							{{item.con}}
						</view>
					</view>
					<view class="uni-card-footer">
						<view> {{item.foot}}</view>
						<view>
							<uni-tag text="more" v-bind:type="item.type" size="small"></uni-tag>
						</view>

					</view>
				</view>
			</view>


		</view>
		<view style="height:80upx;"></view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge.vue";
	import uniTag from '@/components/uni-tag.vue'

	export default {
		components: {
			uniBadge,
			uniTag
		},
		data() {
			return {
				nickname: '',
				title: 'cardview',
				list: [{
						"title": "我的运势",
						"con": "我的运势",
						"foot": "2019-02-11",
						"text": "10",
						"type": "primary"
					},
					{
						"title": "我的抽签",
						"con": "我的抽签",
						"foot": "2019-02-11",
						"text": "10",
						"type": "success"
					},
					{
						"title": "我的许愿",
						"con": "我的许愿",
						"foot": "2019-02-11",
						"text": "10",
						"type": "warning"
					},
					{
						"title": "我的点赞",
						"con": "我的点赞",
						"foot": "2019-02-11",
						"text": "10",
						"type": "danger"
					}
				],
				key: "username",
				level: "0"
			}
		},
		methods: {
			itemTap: function(num) {
				// console.log(num);
			},
			getStorage: function() {
				let that = this;
				var key = this.key;
				uni.getStorage({
					key: key,
					success: (res) => {
						if (!res.data) {
							uni.navigateTo({
								url: '/pages/sixth/index'
							});
						}
						let data = JSON.parse(res.data)
						that.key = data.username
						that.level = "等级"+data.level
					},
					fail: (err) => {
// 						uni.navigateTo({
// 							url: '/pages/sixth/index'
// 						});
					}
				})
			}
		},
		onShow() {
			this.getStorage();
		}
	}
</script>

<style>
	.uni-card-header:after {
		background-color: #fff;
	}
</style>
