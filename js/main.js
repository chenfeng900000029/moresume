function writeResrume(prefix,code,fn) {
    console.log(fn)
    let domCode=document.querySelector('#codeing')
     domCode.innerHTML=prefix || ''
	let n = 0
	let id = setInterval(() => {
		n += 1;
		domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0, n);
       domCode.scrollTop=domCode.scrollHeight
		if (n > code.length) {
            window.clearInterval(id);
            fn && fn.call()
        }
	}, 10)
}

var result = `

/*
* 我用一个动画的形式介绍自己
* 文字太单调了
* 我用代码来介绍自己吧
* 首先准备点css
*/




* {
    transition: all 1s;
}

body {
    background:#f5f5f5;
}

/* 给css点颜色 */

.token.selector{
    color:#3cba92;
}
.token.property{
    color:#af3eb0;
}

/* 旋转下 */

#codeing{ 
    
   }


/* 下面介绍下我自己 */
#codeing{ 
    padding-left:16px;
    font-size:14px;
    padding-bottom:15px;
    position: fixed;
    border:solid 1px #999;
    left:0;
    width: 50%;
    height: 100%;  
    box-shadow:  4px 6px 5px 0px rgba(0,0,0,0.4); 
}    
 `

writeResrume(' ',result,()=>{
    createPaper(()=>{
      writeResrume(result,result2,()=>{
          writeMarkDown(mk)
      })  
    })
})
		

var result2 = `
#paper{
    position: fixed;
    right:0;
    width: 50%;
    height: 100%; 
    background:#000;
    z-index:-1;
}
#paper .content{
    border:solid 1px #999;
    height:100%;
    width:100%;
    margin:2px;
    background:#fff;

}
`
var mk=`
##自我介绍

##技能介绍

##项目介绍

##练习方式
`
function createPaper(fn){
	var paper = document.createElement('div')
        paper.id = 'paper'
    var content= document.createElement('pre')
        content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    //alert('11')
    fn.call()
}

function writeMarkDown(markdown,fn){
let domPaper=document.querySelector('#paper>.content')
    var n=0
    let id = setInterval(() => {
    n += 1;
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop=domPaper.scrollHeight
    if (n > markdown.length) {
        window.clearInterval(id);
       fn && fn.call()
    }
}, 10);
}




