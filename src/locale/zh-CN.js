export default {
  weekdayValues: {
    narrow: ['日', '一', '二', '三', '四', '五', '六'],
    short: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    long: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  },

  monthValues: {
    short: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    long: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  },

  timeOfDayValues: ['上午', '下午'],

  ok: '确定',
  cancel: '取消',
  noData: '无数据',
  selectAll: '全选',

  rules: {
    required: {
      message: '请输入{title}',
      tip: '',
    },
    min: {
      array: {
        message: '',
        tip: '',
      },
    },
  },
}
