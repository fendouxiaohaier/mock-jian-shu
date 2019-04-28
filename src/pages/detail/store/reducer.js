import { fromJS } from "immutable";

const defaultState = fromJS({
    title: "最适合新手的三门编程语言！有你中意的吗？",
    content: '<p>3、学习后想要深入了解操作系统，如果不懂C语言，怎么可能深入到这些操作系统当中去呢？更不要说你去写它们的内核程序了。</p><p>1、C++是C语言的衍生，在学习过C语言后，C++的学习会变的很简单。</p><img data-original-src="//upload-images.jianshu.io/upload_images/16557762-a53db2a209b4b214.jpg" data-original-width="640" data-original-height="276" data-original-format="image/jpeg" data-original-filesize="24646" style="cursor: zoom-in;" class="" src="//upload-images.jianshu.io/upload_images/16557762-a53db2a209b4b214.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp"><p>目前国内最火热的编程语言当属JAVA，其好处在于就业标准低，学成后一般大专以上便可入职，但不建议新手学习。</p><p>其实编程语言有非常多的共通之处，学好一门语言之后，再学另外一门很容易就能学会，这里推荐C语言，C++，python。</p><h4><b>C语言</b></h4>'
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}

export default reducer;