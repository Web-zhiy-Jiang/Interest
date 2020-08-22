function startMove(node, cssObj, complete) {
    clearInterval(node.timer);
    node.timer = setInterval(() => {
        var isEnd = true;//假设所有动画都达到了目的值
        for (var attr in cssObj) {
            var iTarget = cssObj[attr];
            // 计算速度
            var iCur = null;
            if (attr == "opacity") {
                iCur = parseInt(parseFloat(getStyle(node, "opacity")) * 100);
            } else {
                iCur = parseInt(getStyle(node, attr))
            }

            var speed = (iTarget - iCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (attr == "opacity") {
                iCur += speed;
                node.style.opacity = iCur / 100;
                node.style.filter = "alpha(opacity=" + iCur + ")";
            }
            else {
                node.style[attr] = iCur + speed + "px";
            }
        }

    },30)
}

// 获取当前有效样式浏览器兼容的写法1
function getStyle(node, cssStr) {
    return node.currentStyle ? node.currentStyle[cssStr] : getComputedStyle(node)[cssStr];
}