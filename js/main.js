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
    color:#D6BB46;
}
.token.property{
    color:#9FDBFF;
}
.token.function{ color: #905;}

/* 旋转下 */


/* 下面介绍下我自己 */
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

// writeResrume(' ',result,()=>{
//     createPaper(()=>{
//       writeResrume(result,result2,()=>{
//           writeMarkDown(mk,()=>{
//                linkWrapCss(()=>{
//                   topLine()
//               })
//           })
//       })  
//     })
// })
  topLine(()=>{
       linkWrapCss (()=>{
           createPaper(()=>{
               writeResrume(' ',result,()=>{
                  writeResrume(result,result2,()=>{
                     writeMarkDown(mk,()=>{  
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
    width:100%;

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
    domPaper.scrollTop=domPaper.scrollHeight
    if (n > markdown.length) {
        window.clearInterval(id);
        fn && fn.call()
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




