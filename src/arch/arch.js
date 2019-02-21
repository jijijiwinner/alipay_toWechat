const cache = require('../arch/cache.js');
const page = require('../arch/page.js');
const phone = require('../arch/phone.js');
const ui = require('../arch/ui.js');
const analytics = require('../arch/analytics.js');
const data = require('../arch/data.js');
// config
const api = require('../config/api.js');
const config = require('../config/config.js');
// utils
const date = require('../utils/date.js');
const query = require('../utils/query.js');
const money = require('../utils/money.js');
const netApi = require('../utils/net-api.js');
const param = require('../utils/param.js');
const share = require('../utils/share.js');

module.exports = {
	cache: cache,
	page: page,
	phone: phone,
	ui: ui,
	analytics: analytics,
	data: data,
	api: api,
	config: config,
	date: date,
	query: query,
	money: money,
	net: netApi,
	param: param,
	share: share,
};
