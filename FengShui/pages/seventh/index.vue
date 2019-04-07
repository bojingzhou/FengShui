<template>
	<view>
		<view class="flex-between box">
			<view class="uni-common-mt" style="background-color: #ccc;">
				<view class="uni-form-item uni-column">
					<view class="with-fun">
						<input v-model="con" placeholder-style="color:#F76260" class="uni-input" placeholder="输入内容" :value="inputClearValue"
						 @input="clearInput" />
						<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
					</view>
				</view>
			</view>
			<view>发送</view>
			<!-- <uni-tag text="发送" size="small" type="primary" @tap="send"></uni-tag> -->
		</view>
		<view class="flex-center" :class="nickNameFlag?'nickOn':''">{{nickName}}</view>
		<view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
			 @scroll="scroll">
				<view class="scroll-view-item" v-for="(value,key) in list" v-bind:key="key">{{value}}</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import uniTag from '@/components/uni-tag.vue'
	import config from '@/common/config.js'
	export default {
		components: {
			uniTag
		},
		data() {
			return {
				con: 'input',
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
				},
				socket: null,
				nickNameFlag: false,
				nickName: null
			}
		},
		onLoad() {
			this.connect();

		},
		onShow() {

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
			connect: function() {
				
			},
			send: function() {

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
		bottom: 0;
	}

	.scroll-view-item {
		/* height: 200upx; */
	}

	.scroll-Y {
		/* height: 500upx; */
		position: fixed;
		height: -webkit-calc(100% - 300upx);
		box-sizing: border-box;
		padding: 20upx;
	}

	.nickOn:before {
		content: "欢迎:";
	}

	.nickOn:after {
		content: "加入!";
	}

	.nickOn {
		position: fixed;
		width: 100%;
		top: 100upx;
		left: 0;
		z-index: 100;
		text-align: center;
		-webkit-animation: mymove 5s;
		opacity: 0;
	}

	@-webkit-keyframes mymove {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
</style>
