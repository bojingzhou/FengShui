<template>
	<view class="page">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-card">
				<view class="uni-card-header uni-card-media">
					<image class="uni-card-media-logo" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"></image>
					<view class="uni-card-media-body">
						<text class="uni-card-media-text-top">小U<uni-tag text="推荐" size="small" type="success" style="margin-left: 20upx;"></uni-tag></text>
						<text class="uni-card-media-text-bottom">发表于 2018-01-30 15:30</text>
					</view>
				</view>
				<view class="uni-card-content image-view">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="image"></image>
				</view>
				<view class="uni-card-footer">
					<view class="uni-card-link">喜欢</view>
					<view class="uni-card-link" @tap="detail">详情</view>
				</view>
			</view>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-card">
				<view class="uni-card-header uni-card-media">
					<image class="uni-card-media-logo" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"></image>
					<view class="uni-card-media-body">
						<text class="uni-card-media-text-top">小U<uni-tag text="运势" size="small" type="warning" style="margin-left: 20upx;"></uni-tag></text>
						<text class="uni-card-media-text-bottom">发表于 2018-01-30 15:30</text>
					</view>
				</view>
				<view class="uni-card-content image-view">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="image"></image>
				</view>
				<view class="flex-left line">
					<uni-tag text="姓名" size="small" type="warning"></uni-tag>
					<view class="uni-form-item uni-column">
						<view class="with-fun">
							<input class="uni-input" placeholder="请输入您的姓名" :value="inputClearValue" @input="clearInput" />
							<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
						</view>
					</view>
				</view>
				<view class="flex-left line">
					<uni-tag text="性别" size="small" type="primary"></uni-tag>
					<view class="uni-list">
						<radio-group @change="radioChange" class="flex-left">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === current" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="flex-left line">
					<uni-tag text="生日" size="small" type="success"></uni-tag>
					<view class="uni-list">
						<view class="uni-list-cell">
							<!-- <view class="uni-list-cell-left">
								出生选择
							</view> -->
							<view class="uni-list-cell-db">
								<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{date}}</view>
								</picker>
							</view>
						</view>
					</view>
				</view>


				<view class="uni-card-footer">
					<view class="uni-card-link">清空</view>
					<view class="uni-card-link">提交</view>
				</view>
			</view>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-card">
				<view class="uni-card-content image-view">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="image"></image>
				</view>
				<view class="zuqian-box">
					<view style="text-align: center;font-weight: bold;" class="flex-center">
						<view>竹签摇一摇</view>
						<uni-tag text="势" size="small" type="danger" style="margin-left: 20upx;"></uni-tag>
					</view>
					<view class="flex-left zuqian">
						<view class="flex-y-center">
							<img src="../../static/api.png" alt="">
							<uni-tag text="观音" size="small" type="warning"></uni-tag>
						</view>
						<view class="flex-y-center">
							<img src="../../static/api.png" alt="">
							<uni-tag text="关帝" size="small" type="primary"></uni-tag>
						</view>
						<view class="flex-y-center">
							<img src="../../static/api.png" alt="">
							<uni-tag text="月老" size="small" type="error"></uni-tag>
						</view>
						<view class="flex-y-center">
							<img src="../../static/api.png" alt="">
							<uni-tag text="黄大仙" size="small" type="success"></uni-tag>
						</view>
					</view>
				</view>
				<view class="uni-card-footer">
					<view class="uni-card-link">缘由</view>
					<view class="uni-card-link">故事</view>
				</view>
			</view>
		</view>


		<view style="height:80upx;"></view>
	</view>
</template>

<script>
	import uniTag from '@/components/uni-tag.vue'
	export default {
		components: {
			uniTag
		},
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {

				showClearIcon: false,
				inputClearValue: '',
				zd_flag: false,
				x: 0,
				items: [{
						value: 'man',
						name: '男士'
					},
					{
						value: 'woman',
						name: '女士',
						// checked: 'true'
					}
				],
				current: 0,
				date: currentDate,

			}
		},
		onHide() {
			this.stopjiasu()
		},
		onShow() {
			this.startjiasu();
			this.jianting();
		},
		onLoad() {

		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			zhengdong: function(cb) {
				uni.vibrateLong({
					success: function() {
						// cb();
					}
				});
			},
			stopjiasu: function() {
				uni.stopAccelerometer()
			},
			startjiasu: function() {
				uni.startAccelerometer({
					interval: "game"
				})
			},
			jianting: function() {
				let that = this;
				var x, y, z, last_update
				x = y = z = last_update = 0;
				uni.onAccelerometerChange(function(res) {

					var current_time = new Date().getTime();

					if ((current_time - last_update) > 100) {
						last_update = current_time;
						if (0 < Math.abs(res.x) && Math.abs(res.x) < 2) {
							that.zd_flag = false;
						}
						if (Math.abs(res.x) > 6 && !that.zd_flag) {
							that.zd_flag = true;
							// that.x += 1;
							that.zhengdong();
						}
					}
				});
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
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();

				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;

				return `${year}-${month}-${day}`;
			},
			detail: function() {
				uni.navigateTo({
					url: '/pages/fifth/index?type=0'
				});
			}

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.uni-card {
		margin-top: 50upx;
	}

	.page {
		/* padding-top: 60upx; */
		/* background: #efeff4; */
	}

	.image-view {
		height: 480upx;
		overflow: hidden;
	}

	.image {
		width: 100%;
	}

	.zuqian-box {
		box-sizing: border-box;
		margin: 0 36upx;
		margin-bottom: 30upx;
		padding: 30upx 0;

	}

	.zuqian {
		display: flex;
	}

	.zuqian>view {
		flex: 1;
	}


	.zuqian>view>view {
		text-align: center;
	}

	.uni-list-cell {
		justify-content: flex-start
	}

	.uni-list::before,
	.uni-list-cell::after {
		background-color: #fff;
	}

	.line {
		box-sizing: border-box;
		padding: 0 20upx;
	}
	.uni-form-item,.uni-list{
		width: 86%;
	}
	.uni-list:after{
		background-color: #fff;
	}
</style>
