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
	}, 50)
}
    
var result = `

/*你好面试官 
* 这是一个仿照vscode界面做的一个简历
* 内容以动画的形式展示
* 首先准备点css
*/

/* 页面功能还在完善中*/

* {
    transition: all 1s;
}

body {
    background:#f5f5f5;
}

/* 给css点颜色 */

.token.selector{
    color:#D6BB46;
}
.token.property{
    color:#9FDBFF;
}
.token.function{ color: #905;}


/* 下面介绍下我自己  做些准备工作 */
#codeing{ 
    padding-left:16px;
    font-size:14px;
    padding-bottom:15px;
    border-right:solid 0.1px #444;
    width:calc(50% - 60px);
    height: 100%;  
    padding-top:5px;
    box-shadow:  4px 6px 5px 0px rgba(0,0,0,0.4); 
}    
 `
  topLine(()=>{
       linkWrapCss (()=>{
           createPaper(()=>{
               writeResrume(' ',result,()=>{
                  writeResrume(result,result2,()=>{
                     writeMarkDown(mk,()=>{  
                         markDown()
              })
          })
      })  
    })
})

})


var result2 = `
#paper{
    right:0;
    width: 50%;
    height: 100%; 
    float:left;
}
#paper .content{
    height:100%;
    width:calc(100% + 60px);
    padding-left:30px;
    color:#ADADAD;
    overflow:auto;
    
}

/* 引入markdown */


`
var mk=`
## 自我介绍
我叫陈楓 1990 年 9 月出生
自学前端半年 希望应聘前端开发岗位

## 技能介绍
熟悉 JavaScript CSS

## 项目介绍
* 个人简历（当然不是这个 ~.~）
* 画板
* 无缝轮播轮播
* 仿网易云音乐APP页面
* apple 网站首页

## 联系方式
* QQ 408854777
* Email 408854777 @ qq.com
* 手机 18357105521

2018-06-08 03:15:24

准备让每块都是可见的形式出现
看看代码我就 再说吧

`

function createPaper(fn){

    
    var paper = document.createElement('div')
    paper.id = 'paper'

    var content= document.createElement('pre')
        content.className='content'  
        content.id='content'
    paper.appendChild(content)
    maincontent.appendChild(paper)
    //alert('11')
    fn.call()
}

function writeMarkDown(markdown,fn){
let domPaper=document.querySelector('#paper>.content')
    var n=0
    let id = setInterval(() => {
    n += 1;
    domPaper.innerHTML = markdown.substring(0, n)
    var domPaperText=domPaper.innerHTML
        markDown(domPaperText)
    domPaper.scrollTop=domPaper.scrollHeight
    if (n > markdown.length) {
        window.clearInterval(id);
        fn.call()
    }
}, 50);
}
function linkWrapCss(fn){
 let headTag=document.querySelector('head')
 let link=document.createElement('link')
     link.rel='stylesheet'
     link.href='css/wrap.css'
     headTag.appendChild(link)

    fn && fn.call()
}
function topLine(fn){
    let bodyTag=document.querySelector('body')
    let topLineBar=document.createElement('div')
        topLineBar.className='toplinebar'
        bodyTag.appendChild(topLineBar)

    var main = document.createElement('div')
        main.className='main' 
        main.id='main'

    let sidebar = document.createElement('div') 
        sidebar.className='sidebar' 
        main.appendChild(sidebar) 


    let adjustSpeed = document.createElement('div')
        adjustSpeed.className='spd'      
        sidebar.appendChild(adjustSpeed)      

    let spd = document.createElement('img')
        spd.src='img/spd.png'     
        adjustSpeed.appendChild(spd) 

    let papersWraper = document.createElement('div')
        papersWraper.className='spd'      
        sidebar.appendChild(papersWraper)      

    let papers = document.createElement('img')
        papers.src='img/paper.png'     
        papersWraper.appendChild(papers) 

    let gitWrap = document.createElement('div')
        gitWrap.className='spd'      
        sidebar.appendChild(gitWrap)

    let git = document.createElement('img')
        git.src='img/git.png'     
        gitWrap.appendChild(git) 

    let setWrap= document.createElement('div') 
        setWrap.className='set'
        sidebar.appendChild(setWrap)

    let set = document.createElement('img')
        set.src='img/set.png'     
        setWrap.appendChild(set)             


    let mainContent= document.createElement('div')
        mainContent.className='maincontent'
        mainContent.id='maincontent' 
        main.appendChild(mainContent)

    let mainContentTopBar= document.createElement('div')
        mainContentTopBar.className='maincontenttopbar'   
        mainContent.appendChild(mainContentTopBar)

    let cssTabWrap = document.createElement('div')
        cssTabWrap.className ='csstabwrap'
        mainContentTopBar.appendChild(cssTabWrap)    

    let cssTab=document.createElement('div')
        cssTab.className='csstab1'  
        cssTab.innerHTML='# CSS  .'  
        cssTabWrap.appendChild(cssTab)

    let cssTabWrap2 = document.createElement('div')
        cssTabWrap2.className ='csstabwrap2'
        mainContentTopBar.appendChild(cssTabWrap2) 

    let cssTab2=document.createElement('div')
        cssTab2.className='csstab1'  
        cssTab2.innerHTML='{} 个人简历  .'  
        cssTabWrap2.appendChild(cssTab2)      

    let mainPre = document.createElement('pre')
        mainPre.id='codeing'
        mainContent.appendChild(mainPre)
    
    let topControllerWrap=document.createElement('div')
    let topTitle=document.createElement('div')
        topTitle.className='toptitle'
        topTitle.innerHTML='一份会动的简历/外貌是vsCode'

        topControllerWrap.className='topcontrollerwrap'
        
    let topControllerWrapBtn=document.createElement('span')
    let topControllerWrapBtn2=document.createElement('span')
    let topControllerWrapBtn3=document.createElement('span')

        topControllerWrapBtn.className='topcontrollerwrapbtn'
        topControllerWrapBtn2.className='topcontrollerwrapbtn'
        topControllerWrapBtn3.className='topcontrollerwrapbtn'
        topLineBar.appendChild(topControllerWrap)
        topLineBar.appendChild(topTitle)
        bodyTag.appendChild(main)
    
        topControllerWrap.appendChild(topControllerWrapBtn)
        topControllerWrap.appendChild(topControllerWrapBtn2)
        topControllerWrap.appendChild(topControllerWrapBtn3)
        fn && fn.call()
  }




