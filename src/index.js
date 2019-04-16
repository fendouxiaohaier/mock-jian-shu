import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 引入全局样式第二步，引入样式组件
import {GlobalStyle } from './styled.js';
import GlobalIconFontStyle from './statics/iconfont/iconfontt.js';


// 引入全局样式第三步，使用样式组件
ReactDOM.render(
                (
                    <React.Fragment>
                        <GlobalStyle />
                        <GlobalIconFontStyle/>
                        <App />
                    </React.Fragment>
                ), 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
