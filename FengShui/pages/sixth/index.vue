<template>
	<view style="display: flex;flex-direction: column;justify-content: center;position: fixed;
	width: 100%;height: 100%;left: 0;top: 0;">
		<view class="uni-common-mt">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">用户名</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" v-model="username" type="text" placeholder="请输入用户名" name="key" :value="key"></input>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">密码</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="password" v-model="password" placeholder="请输入密码" name="data" :value="data"></input>
					</view>
				</view>
			</view>
			<view class="flex-center user">
				<view @tap="show(0)">创建账户</view>
				<view @tap="show(1)">忘记密码</view>
				<view @tap="index">
					<uni-tag size="small" text="回首页" type="warning"></uni-tag>
				</view>
			</view>
			<view class="uni-padding-wrap" v-if="btnFlag">
				<view class="uni-btn-v">
					<button type="primary" class="btn-setstorage" @tap="login('login')">登陆</button>
				</view>
			</view>
		</view>
		<view class="fix" v-if="hideFlag" @tap="hide"></view>
		<view class="fix-con" v-if="hideFlag" style="display: flex;flex-direction: column;justify-content: center;">
			<view v-if="createFlag" style="text-align: center;font-weight: bold;">创建账户</view>
			<view class="item flex-center" v-if="createFlag">
				<uni-tag size="small" text="账户" type="success"></uni-tag>
				<input type="text" placeholder="输入您的账户名" style="margin-left: 30upx;" v-model="accountName">

			</view>
			<view class="item flex-center" v-if="createFlag">

				<uni-tag size="small" text="密码" type="warning"></uni-tag>
				<input type="text" placeholder="输入您的密码" style="margin-left: 30upx;" v-model="accountPassword">
			</view>
			<view class="item flex-center" v-if="createFlag">

				<uni-tag size="small" text="邮箱" type="primary"></uni-tag>
				<input type="text" placeholder="输入您的邮箱" style="margin-left: 30upx;" v-model="accountEmail">
			</view>
			<view v-if="forgetFlag" style="text-align: center;font-weight: bold;">忘记密码</view>

			<view class="item flex-center" v-if="forgetFlag">
				<uni-tag size="small" text="邮箱" type="danger"></uni-tag>
				<input type="text" placeholder="输入您的邮箱" style="margin-left: 30upx;" v-model="forgetEmail">
			</view>

			<view class="flex-center btn-box" v-if="fixBtn">
				<view @tap="hide">取消</view>
				<view @tap="submit">提交</view>
			</view>
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
				title: 'get/set/clearStorage',
				key: '',
				data: '',
				hideFlag: false,
				createFlag: false,
				forgetFlag: false,
				username: "",
				password: "",
				btnFlag: false,
				status: false,
				accountName: "",
				accountPassword: "",
				accountEmail: "",
				forgetEmail: "",
				fixBtn: false
			}
		},
		onShow() {

		},
		computed: {
			statusX: function() {
				return this.username && this.password ? true : false;
			},
			create: function() {
				return this.accountName && this.accountPassword && this.accountEmail ? true : false;
			},
			forget: function() {
				return this.forgetEmail ? true : false;
			}
		},
		watch: {
			statusX(newVal, oldVal) {
				if (newVal) {
					this.btnFlag = true
				} else {
					this.btnFlag = false
				}
			},
			create(newVal, oldVal) {
				if (newVal) {
					this.fixBtn = true
				} else {
					this.fixBtn = false
				}
			},
			forget(newVal, oldVal) {
				if (newVal) {
					this.fixBtn = true
				} else {
					this.fixBtn = false
				}
			},

		},
		methods: {

			index: function() {
				uni.switchTab({
					"url": "/pages/index/index"
				})
			},
			hide: function() {
				this.hideFlag = false;
			},
			show: function(type) {
				this.fixBtn = false;
				if (type == 0) {
					this.accountName = ""
					this.accountPassword = ""
					this.accountEmail = ""
					this.createFlag = true;
					this.forgetFlag = false;

				} else {
					this.forgetEmail = ""
					this.createFlag = false;
					this.forgetFlag = true;

				}
				this.hideFlag = true;

			},
			keyChange: function(e) {
				this.key = e.target.value
			},
			dataChange: function(e) {
				this.data = e.target.value
			},
			getStorage: function() {
				var key = this.key,
					data = this.data;
				if (key.length === 0) {
					uni.showModal({
						title: '读取数据失败',
						content: "key 不能为空",
						showCancel: false
					})
				} else {
					uni.getStorage({
						key: key,
						success: (res) => {
							uni.showModal({
								title: '读取数据成功',
								content: "data: '" + res.data + "'",
								showCancel: false
							})
						},
						fail: () => {
							uni.showModal({
								title: '读取数据失败',
								content: "找不到 key 对应的数据",
								showCancel: false
							})
						}
					})
				}
			},
			setStorage: function() {
				var key = this.key
				var data = this.data
				if (key.length === 0) {
					uni.showModal({
						title: '保存数据失败',
						content: 'key 不能为空',
						showCancel: false
					})
				} else {

				}
			},
			clearStorage: function() {
				uni.clearStorageSync()
				this.key = '',
					this.data = ''
				uni.showModal({
					title: '清除数据成功',
					content: ' ',
					showCancel: false
				})
			},
			login: function(type) {
				let that = this;
				let url = ""
				let data = ""
				if (type == "login") {
					url = config.url + "login"
					data = {
						username: that.username,
						password: that.password
					}
				} else {
					url = config.url + "forget"
					data = {
						email: that.forgetEmail
					}
				}
				uni.request({
					url: url,
					data: data,
					method: 'POST',
					success: (res) => {
						if (res.data.status == 200) {
							if (res.data.data) {
								let data = res.data.data;
								if (type == "login") {
									that.set("username", JSON.stringify(data).toString(), function() {
										uni.switchTab({
											url: '/pages/third/index'
										});
									})
								} else {
									uni.showToast({
										title: "稍后将会发送到您的邮箱",
										duration: 2000,
										complete: function() {
											that.hide();
										}
									});
								}

							}
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			set: function(key, data, cb) {
				uni.setStorage({
					key: key,
					data: data,
					success: (res) => {
						if (cb) {
							cb();
						}
					},
					fail: () => {

					}
				})
			},
			submit: function() {
				let that = this;
				if (this.createFlag) {
					uni.request({
						url: config.url + "add", //仅为示例，并非真实接口地址。
						data: {
							username: that.accountName,
							password: that.accountPassword,
							email: that.accountEmail

						},
						method: 'POST',
						success: (res) => {
							uni.showToast({
								title: res.data.data,
								duration: 2000,
								complete: function() {
									that.hide();
								}
							});
						},
						fail: () => {},
						complete: () => {}
					});
				} else {
					that.login("forget")
				}

			}
		}
	}
</script>

<style>
	.btn-setstorage {
		background-color: #007aff;
		color: #ffffff;
	}

	.user {
		color: #007AFF;
		font-size: 15px;
		line-height: 1.8;
		padding: 20upx 0;
	}

	.user>view:not(:first-child) {
		margin-left: 20upx;
	}

	.uni-list::before,
	.uni-list:after {
		background-color: #fff;
	}

	.fix {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 100;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .2);
	}

	.fix-con {
		position: fixed;
		width: 520upx;
		height: 440upx;
		z-index: 101;
		left: 50%;
		top: 50%;
		margin-left: -260upx;
		margin-top: -220upx;
		border-radius: 10upx;
		box-sizing: border-box;
		padding: 20upx;
		background-color: rgba(255, 255, 255, 1);
	}

	.fix-con>input {
		padding: 20upx 0;
		margin: 20upx;
	}

	.btn-box {
		padding: 30upx 0;
	}

	.btn-box>view {
		padding: 2upx 32upx;
		border-radius: 10upx;
		background-color: #007AFF;
		color: #fff;
	}

	.btn-box>view:last-child {
		margin-left: 20upx;
	}

	.item {
		padding: 18upx 0;
	}
</style>
