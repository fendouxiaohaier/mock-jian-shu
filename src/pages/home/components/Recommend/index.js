import React, { Component } from "react";
import {
    RecommendWrapper
} from "./style.js";

import jianshu_vip from "../../../../statics/jianshu-vip.png";
import jianshu_discount from "../../../../statics/jianshu-discount.png";
import jianshu_copyright from "../../../../statics/jianshu-copyright.png";
import jianshu_school from "../../../../statics/jianshu-school.png";

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <a href="/">
                    <img className="recommend-pic" 
                            src={`${jianshu_vip}`}
                            alt="简书会员"
                    />
                </a>
                <a href="/">
                    <img className="recommend-pic" 
                         src={`${jianshu_discount}`} 
                         alt="优选连载"
                    />
                </a>
                <a href="/">
                    <img className="recommend-pic" 
                         src={`${jianshu_copyright}`}
                         alt="简书版权"
                    />
                </a>
                <a href="/">
                    <img className="recommend-pic" 
                         src={`${jianshu_school}`} 
                         alt="简书大学堂"
                    />
                </a>

            </RecommendWrapper>
        );
    }
}

export default Recommend;