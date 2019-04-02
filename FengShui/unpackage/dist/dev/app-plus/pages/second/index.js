
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"title { padding: ",[0,20],"; }\n.",[1],"tag-view { margin: ",[0,10]," ",[0,10],"; display: inline-block; }\n.",[1],"btn-box { position: fixed; z-index: 10000; width: 100%; left: 0; bottom: ",[0,100],"; background-color: rgba(255, 255, 255, .3); }\n.",[1],"uni-list-cell-navigate { padding: ",[0,32]," ",[0,30],"; }\n",],undefined,{path:"./pages/second/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/second/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      