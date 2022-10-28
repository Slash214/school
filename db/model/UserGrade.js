/**
 * @descrion 用户和班级的关系
 * 
 */

const seq = require('../seq')
const { INTEGER } = require('../type')

const UserGrade = seq.define('usergrade', {
	user_id: {
		type: INTEGER,
		allowNull: false,
		comment: '用户 ID'
	},
	grade_id: {
		type: INTEGER,
		allowNull: false,
		comment: '班级ID'
	}

})

module.exports = UserGrade