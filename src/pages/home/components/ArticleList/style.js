import styled from "styled-components";

export const ArticleListWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const ArticleItem = styled.div`
    display: flex;
    height: 100px;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    line-height: 20px;
    &  .article_list_pic {
        width: 150xp;
        height: 100px;
    }
`;

export const ArticleInfo = styled.div`
    width: calc(100% - 165px);
    & > .article_list_title {
        display: block;
        height: 27px;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;
    }
    & > .article_list_title:visited {
        color: #969696;
    }
    & > .article_list_title:HOVER {
        text-decoration: underline;
    }

    & > .article_list_content {
        height: 48px;
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
`;

export const ArticleMoreInfo = styled.div`
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    
    & > span {
        margin-right: 10px;

        .iconfont {
            font-size: 13px;
        }
    }

    & > .diamond {
        color: #ea6f5a!important;
    }

    & > .nickName {
        color: #787878;
    }
`;