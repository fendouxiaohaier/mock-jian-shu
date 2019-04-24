import styled from "styled-components";

export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;

    .iconfont {
        font-size: 13px;
    }
`;

export const WriterTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: cneter;

    span {
        font-size: 14px;
        color: #969696;
    }
    span:nth-child(2):HOVER {
        color: #787878;;
    }

    
`;

export const WriterList = styled.div`
    margin: 0 0 20px;
`;

export const WriterItem = styled.div`
    height: 47px;
    display: flex;
    margin-top: 15px;

    & > .writer_avatar {
        width: 48px;
        margin-right: 10px;
        img {
            width: 48px;
            height: 48px;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    & > .writer_info {
        flex-grow: 1;
       
       & > .writer_nickname {
            line-height: 20px;
            font-size: 14px;
            padding-top: 5px;
            color: #2f2f2f;
       }

        & > .writer_desc {
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }

    & > .writer-follow {
        width: 60px;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;

    }
`;

export const WriterMore = styled.div`
    height: 35px;
    a {
        display: block;
        padding: 7px 7px 7px 12px;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        text-align: center;
    }
    a:HOVER {
        color: #2f2f2f;
    }
`;

