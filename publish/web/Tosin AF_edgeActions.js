
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cv}","mouseover",function(sym,e){sym.$("cv").css("border-bottom","2px solid #f06767").css("color","#f06767");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cv}","mouseout",function(sym,e){sym.$("cv").css("border-bottom","none").css("padding","none").css("color","#3c424f");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chat}","mouseover",function(sym,e){sym.$("About").css("border-bottom","2px solid #f06767").css("color","#f06767");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chat}","mouseout",function(sym,e){sym.$("About").css("border-bottom","none").css("color","#3c424f");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4300,function(sym,e){this.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_link_copy}","mouseover",function(sym,e){sym.$("top_red").css("border-bottom","4px solid #f06767").ease(200);sym.$("lower_red").css("border-bottom","4px solid #f06767").ease(200);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_link_copy}","mouseout",function(sym,e){sym.$("top_red").css("border-bottom","none").ease(400);sym.$("lower_red").css("border-bottom","none").ease(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Work}","mouseover",function(sym,e){sym.$("Work").css("border-bottom","2px solid #f06767").css("color","#f06767");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Work}","mouseout",function(sym,e){sym.$("Work").css("border-bottom","none").css("padding","none").css("color","#3c424f").css("-webkit-transition-timing-function","ease-in-out");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Blog}","mouseover",function(sym,e){sym.$("Blog").css("border-bottom","2px solid #f06767").css("color","#f06767");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_About}","mouseover",function(sym,e){sym.$("About").css("border-bottom","2px solid #f06767").css("color","#f06767");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Blog}","mouseout",function(sym,e){sym.$("Blog").css("border-bottom","none").css("padding","none").css("color","#3c424f");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_About}","mouseout",function(sym,e){sym.$("About").css("border-bottom","none").css("padding","none").css("color","#3c424f");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-120717618");