import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'
// import { fromJS } from 'immutable'

// 引入 immutableJS 把 store 变成不可修改的数据
const defaultState = {
  homeData: {
    numberCards: [],
    LineBarChartOption: {
      series: []
    },
    pieOptions: {
      datas: []
    },
    orderTable: [],
    CommentList: []
  }
}

/**
 * home store
 * @param [state]
 * @param [action]
 * @return 新的 home store
 */

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOME_DATA:
      return Object.assign({}, state, { homeData: action.data });
    default:
      return state;
  }
}

export { homeReducer, actionTypes, actionCreators }