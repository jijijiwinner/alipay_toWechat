var _my$getSystemInfoSync = my.getSystemInfoSync(),
	windowWidth = _my$getSystemInfoSync.windowWidth;

Component({
	props: {
		className: '',
		activeCls: '',
		tabBarUnderlineColor: '#4DC289 ', // 选中选项卡下划线颜色
		tabBarActiveTextColor: '#108ee9', // 选中选项卡字体颜色
		tabBarInactiveTextColor: '#333333', // 未选中选项卡字体颜色
		tabBarBackgroundColor: '#ffffff', // 选项卡背景颜色
		showPlus: false,
		swipeable: true,
		activeTab: 0, // 当前激活tab
		animation: true,
	},
	data: {
		windowWidth: windowWidth,
		tabWidth: 0.2,
		autoplay: false,
		animation: false,
		version: my.SDKVersion,
	},
	didMount: function didMount() {
		var _props = this.props,
			tabs = _props.tabs,
			tabFix = _props.tabFix,
			animation = _props.animation;

		this.setData({
			tabWidth: tabs.length > 3 ? 0.2 : 1 / tabs.length,
			animation: animation,
			tabFix: tabFix,
			autoplay: true,
		});
	},
	didUpdate: function didUpdate(prevProps) {
		var tabs = this.props.tabs;
		var tabFix = this.props.tabFix;

		if (prevProps.tabs.length !== tabs.length) {
			this.setData({
				tabWidth: tabs.length > 3 ? 0.2 : 1 / tabs.length,
			});
		}
		if (prevProps.tabFix !== tabFix) {
			this.setData({
				tabFix: tabFix,
			});
		}
	},

	methods: {
		handleSwiperChange: function handleSwiperChange(e) {
			var current = e.detail.current;

			if (this.props.onChange) {
				this.props.onChange({ index: current });
			}
		},
		handleTabClick: function handleTabClick(e) {
			var index = e.target.dataset.index;

			if (this.props.onTabClick) {
				this.props.onTabClick({ index: index });
			}
		},
		handlePlusClick: function handlePlusClick() {
			if (this.props.onPlusClick) {
				this.props.onPlusClick();
			}
		},
	},
});
