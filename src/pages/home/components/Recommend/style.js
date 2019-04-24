import styled from "styled-components";

export const RecommendWrapper = styled.div.attrs({
    className: "RecommendWrapper",
    "data-desc": "可以在这里声明类名"
})`
    padding-bottom: 4px;
    min-height: 228px;

    .recommend-pic {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`;