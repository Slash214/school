/**
 * 处理返回的数据，格式化时间的
 */
const { format } = require("date-fns");

const formatTime = (str, mb = "yyyy/MM/dd hh/mm") => {
    return format(new Date(str), mb);
};

const __formatDBTime = obj => {
	obj.createdAt = formatTime(obj.createdAt);
	obj.updatedAt = formatTime(obj.updatedAt);
	return obj
}

const formatList = (result) => {
	let list = result.rows.map((row) => row.dataValues)
	if (list === null) return list
	if (list instanceof Array) {
		return list.map(__formatDBTime)
	}
}

module.exports = {
	formatList
}