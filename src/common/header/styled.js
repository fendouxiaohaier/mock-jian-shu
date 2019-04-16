import styled from "styled-components";

import logoUrl from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    height: 56px;
    position: relative;
    border: 1px solid #ccc;
`

export const Logo = styled.a`
    width: 100px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoUrl});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 56px;
    margin: 0 auto;
    padding-right: 30px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    color: #333;
    margin-right: 10px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    margin-top: 9px; 
    & > .iconfont {
        position: absolute;
        bottom: 3px;
        right: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 15px;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 160px;
    height: 38px;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 19px;
    border: none;
    outline: none;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    height: 38px;
    line-height: 38px;
    text-align: center;
    margin-top: 9px;
    margin-right: 15px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        width: 80px;
        color: #ec6149;
    }
    &.writting {
        width: 100px;
        color: #fff;
        background-color: #ec6149;
    }
`;