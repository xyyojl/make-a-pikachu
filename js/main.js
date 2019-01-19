!function(){
    let duration = 50;
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget);
        let speed = $button.attr('data-speed');
        console.log(speed);
        $button.addClass('active').siblings('.active').removeClass('active');
        switch (speed) {
            case 'slow':
                duration = 100;
                break;
            case 'normal':
                duration = 50;
                break;
            case 'fast':
                duration = 20;
                break;
        }
    })
    function writeCode(prefix,code,fn){
        let codeContainer = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
        let id = setTimeout(function run(){
            n += 1;
            codeContainer.innerHTML = code.substring(0,n);
            styleTag.innerHTML = code.substring(0,n);
            codeContainer.scrollTop = codeContainer.scrollHeight;
            if(n < code.length){
                id = setTimeout(run,duration)
            }else{
                window.clearInterval(id);
                fn && fn.call()
            }
        },duration)
    }
    let code = `
/* 
 * 你好，接下来开始我的表演
 * 用CSS来画一只可爱的皮卡丘
 */

/*给皮卡丘一层皮 皮一下，真开心*/
.preview {
    background: #FFE600;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper {
    width: 100%;
    height: 182px;
    position: relative;
}

/* 再画一下皮卡丘的鼻子 */
.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #000 transparent transparent;
    border-radius: 50%;
    border-width: 9.12px 12.16px;
    position: absolute;
    left: 50%;
    margin-left: -11px;
    top: 26.6px;
}

/* 然后画一下皮卡丘的眼睛 */
.eye {
    position: absolute;
    width: 48.6px;
    height: 48.6px;
    background: #2E2E2E;
    border: 2px solid #000;
    border-radius: 50%;
}

.eye.left {
    left: 50%;
    margin-left: -114px;
}

.eye.right {
    right: 50%;
    margin-right: -114px;
}
/* 接着画眼睛里的珠子 */
.eye::before {
    content: '';
    position: absolute;
    width: 24.3px;
    height: 24.3px;
    border: 2px solid #000;
    border-radius: 50%;
    background: #fff;
    left: 6.1px;
    top: -2px;
}

/* 画皮卡丘的脸颊 */
.face {
    position: absolute;
    width: 68.4px;
    height: 68.4px;
    border: 2px solid #000;
    border-radius: 50%;
    background: #FF0000;
    top: 83.6px;
}

/* 将脸颊挪到正确的位置 */
.face.left {
    left: 50%;
    margin-left: -159.6px;
}

.face.right {
    right: 50%;
    margin-right: -159.6px;
}

/* 画上嘴唇 */
.upperLip {
    position: absolute;
    width: 60.8px;
    height: 19px;
    border: 2px solid #000;
    top: 50.2px;
    background: #ffe600;
}

.upperLip.left {
    left: 50%;
    margin-left: -60.8px;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 60px 24px;
    transform: rotate(-25deg);
}

.upperLip.right {
    right: 50%;
    margin-right: -60.8px;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 60px 24px;
    transform: rotate(25deg);
}

/* 画下嘴唇 */
.lowerLip-wrapper {
    position: absolute;
    left: 50%;
    margin-left: -150px;
    bottom: 0;
    width: 300px;
    height: 128px;
    overflow: hidden;
}

.lowerLip {
    width: 36.5px;
    height: 128px;
    background: #9B000A;
    border: 0.6px solid #000;
    border-bottom-left-radius: 18.9px 128px;
    border-bottom-right-radius: 18.9px 128px;
    transform: scale(3);
    left: 50%;
    margin-left: -18.3px;
    position: absolute;
    bottom: 128px;
    overflow: hidden;
}

.lowerLip::after {
    content: '';
    position: absolute;
    bottom: 0;
    transform: none;
    width: 102px;
    height: 106px;
    width: 24px;
    height: 32px;
    background: #FF485F;
    left: 50%;
    margin-left: -12px;
    bottom: 0;
    border-radius: 100%;
}

/* 
* 好了，这只皮卡丘送给你，喜欢吗？
*/
`
    writeCode('',code);
    
}.call()