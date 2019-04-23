/**
 * 将index.js作为header下redux功能的出口文件
 * 如果需要引用header下redux的功能，只需要引用此index文件即可
 */
import { reducer } from "./reducer.js";

import * as actionCreators from "./actionCreators";

import * as constants from "./constants";

export { reducer, actionCreators, constants };