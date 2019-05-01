import React from "react";
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import("./index.js"),
  // loading为文件正式加载完成前的等待组件
  loading: () => {
      return (<p>加载中</p>)
  }
});

export default () => {
    return <LoadableComponent />
}