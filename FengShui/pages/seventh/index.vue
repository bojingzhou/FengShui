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
		<!-- <view class="list">
			<view class="item-box" id="item-box">
				<view class="item flex-left" v-for="(item,index) in list" v-bind:key="index">
					<view>nickname:</view>
					<view>{{item}}</view>
				</view>
			</view>
		</view> -->
		<scroll-view scroll-y="true" style="height: 200px;" scroll-top="{scrollTop}">
			<view id="green" class="scroll-view-item bc_green"></view>
			<view id="red" class="scroll-view-item bc_red"></view>
			<view id="yellow" class="scroll-view-item bc_yellow"></view>
			<view id="blue" class="scroll-view-item bc_blue"></view>
		</scroll-view>

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
				list: [],
				i: 0,
				scrollTop: 200
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
				// 				this.i += 1;
				// 				this.list.unshift(this.i)
				// 				
				// 				this.$nextTick(function() {
				// 					var query = wx.createSelectorQuery();
				// 					query.select('#item-box').boundingClientRect()
				// 					query.exec(function(res) {
				// 						//console.log(res);  
				// 						console.log(res);
				// 					})
				// 
				// 				})
				console.log(this.scrollTop)
				this.scrollTop=400

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

	.list {
		/* display: flex;
		flex-direction: column; */
		position: fixed;
		height: -webkit-calc(100% - 300upx);
		overflow-y: auto;
		box-sizing: border-box;
		padding: 20upx 30upx;
	}

	.item {
		padding: 10upx 20upx;
		margin: 20upx;
		border-radius: 10upx;
		background-color: #ccc;
		color: #000;
	}

	.item-box {}


	.item>view:last-child {
		margin-left: 10upx;

	}


	.scroll-view-item {
		height: 400upx;
		background-color: #ccc;
	}
</style>
