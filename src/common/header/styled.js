import styled from "styled-components";
import { Link } from "react-router-dom";
import logoUrl from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    height: 56px;
    position: relative;
    border: 1px solid #ccc;
`

export const Logo = styled(Link).attrs({
    to: "/"
})`
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
    cursor: pointer;
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
    .searchIcon {
        position: absolute;
        bottom: 3px;
        right: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 15px;

        &.slide-enter {
            transition: all .3s ease-in;
        }
        &.slide-enter-active,
        &.slide-enter-done {
            background-color: #999;
        }
        
        &.slide-exit {
            transition: all .3s ease-in;
        }
        &.slide-exit-active,
        &.slide-exit-done {
            background-color: transparent;
        }
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 100%;
    width: 250px;
    padding: 20px 20px 10px;
    border-radius: 4px;
    margin-top: 9px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    display: none;
    &.focused {
        display: block;
    }
    &::after {
        content: "";
        position: absolute;
        left: 20px;
        top:-8px;
        border: 8px solid;
        border-color: #fff transparent transparent #fff;
        transform: rotate(45deg);
    }
`;

export const SearchTitle = styled.div`
    height: 20px;
    margin-bottom: 10px;
    & > span {
        float: left;
        font-size: 14px;
        color: #969696;
    }
    & > a {
        float: right;
        float: right;
        font-size: 13px;
        color: #969696;
        background-color: transparent;
        border-width: 0;
        padding: 0;
        text-decoration: none;

        & > .switchIcon {
            display: inline-block;
            font-size: 12px;
            margin-right: 3px;
            transition: all .2s ease-in;
            transform: rotate(${props => props.rotatedeg}deg);
        }
    }
`;

export const SearchList = styled.ul`

`;

export const SearchItem = styled.li`
    margin-right: 10px;
    display: inline-block;
    line-height: 28px;
    & > a {
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
        text-decoration: none;
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

    &.slide-enter {
        transition: all .3s ease-in;
    }
    &.slide-enter-active,
    &.slide-enter-done {
        width: 250px;
    }
    
    &.slide-exit {
        transition: all .3s ease-in;
    }
    &.slide-exit-active,
    &.slide-exit-done {
        width: 160px;
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