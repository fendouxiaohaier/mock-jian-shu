import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    width: 960px;
    margin: 0 auto;
    & .home_banner_img {
        width: 100%;
        height: 270px;
    }
`;

export const HomeLft = styled.div`
    width: 640px;
    padding: 30px 0 0 15px;
`;

export const HomeRight = styled.div`
    width: 280px;
    padding-top: 30px;
    margin-left: 40px; 
`;

export const ScrollToTopBtn = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    &:HOVER {
        color: #2f2f2f;
        background-color: rgba(181, 181, 181, 0.1);
    }
`;