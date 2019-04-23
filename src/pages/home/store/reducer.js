import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "iphoneX",
        imgUrl: "//img13.360buyimg.com/n9/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg"
    },{
        id: 2,
        title: "魅族16",
        imgUrl: "//img13.360buyimg.com/n9/jfs/t23086/64/1842595555/326783/b2d00c8f/5b6a8f8fN0505a6c1.png"
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

