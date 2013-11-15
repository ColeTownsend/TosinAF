/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['Siffon']='';
   fonts['Sifonn']='';
   fonts['\'Siffon Pro\'']='';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'copywriting',
            type:'group',
            rect:['11.1%','15%','82.3%','57.1%','auto','auto'],
            sizeRange:['','800px','',''],
            userClass:"hero",
            c:[
            {
               id:'chat',
               type:'image',
               tag:'img',
               rect:['55.5%','111.6%','334px','45px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"Tosin%20AF%20Portfolio%202.svg",'0px','0px']
            },
            {
               id:'link_copy',
               type:'group',
               rect:['26','211','746','164','auto','auto'],
               c:[
               {
                  id:'lower_red',
                  type:'text',
                  rect:['0%','56.2%','726px','72px','auto','auto'],
                  text:"Entrepreneur.",
                  align:"left",
                  font:['Sifonn',48,"rgba(240,103,103,1)","normal","none","normal"]
               },
               {
                  id:'top_red',
                  type:'text',
                  rect:['10.9%','0%','684px','72px','auto','auto'],
                  text:"an iOS &amp; Web Developer +",
                  align:"left",
                  font:['Sifonn',48,"rgba(240,103,103,1)","normal","none","normal"]
               }]
            },
            {
               id:'Im',
               type:'text',
               rect:['3.2%','46.2%','725px','72px','auto','auto'],
               text:"I'm ",
               align:"left",
               font:['Sifonn',48,"rgba(60,66,79,1)","normal","none","normal"]
            }]
         },
         {
            id:'Header',
            type:'group',
            rect:['10%','15%','801','24','auto','auto'],
            sizeRange:['0px','800px','',''],
            c:[
            {
               id:'Linx',
               type:'group',
               rect:['65%','20.6%','280','19','auto','auto'],
               c:[
               {
                  id:'About',
                  type:'text',
                  tag:'address',
                  rect:['77.1%','0%','auto','auto','auto','auto'],
                  cursor:['pointer'],
                  text:"ABOUT",
                  font:['Sifonn',18,"rgba(60,66,79,1.00)","normal","none","normal"]
               },
               {
                  id:'Blog',
                  type:'text',
                  tag:'address',
                  rect:['50%','0%','auto','auto','auto','auto'],
                  cursor:['pointer'],
                  text:"BLOG",
                  font:['Sifonn',18,"rgba(60,66,79,1.00)","normal","none","normal"]
               },
               {
                  id:'Work',
                  type:'text',
                  tag:'address',
                  rect:['21.1%','0%','auto','auto','auto','auto'],
                  cursor:['pointer'],
                  text:"WORK",
                  font:['Sifonn',18,"rgba(60,66,79,1.00)","normal","none","normal"]
               },
               {
                  id:'_hover',
                  display:'none',
                  type:'rect',
                  rect:['-5px','25px','40px','2px','auto','auto'],
                  overflow:'visible',
                  fill:["rgba(240,103,103,1.00)"],
                  stroke:[0,"rgba(0,0,0,1)","none"]
               },
               {
                  id:'cv',
                  type:'text',
                  tag:'address',
                  rect:['0%','0%','auto','auto','auto','auto'],
                  cursor:['pointer'],
                  text:"CV",
                  font:['Sifonn',18,"rgba(60,66,79,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'Title',
               type:'text',
               tag:'h1',
               rect:['0%','0%','auto','auto','auto','auto'],
               text:"TOSIN A&amp;F",
               font:['Sifonn',[24,""],"rgba(60,66,79,1.00)","normal","none",""]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Title}": [
            ["style", "top", '0%'],
            ["color", "color", 'rgba(60,66,79,1.00)'],
            ["style", "font-family", 'Sifonn'],
            ["style", "left", '0%'],
            ["style", "font-size", '24px']
         ],
         "${_chat}": [
            ["style", "top", '129.35%'],
            ["transform", "scaleY", '0.65'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0.65'],
            ["style", "opacity", '0'],
            ["style", "left", '55.53%'],
            ["style", "cursor", 'pointer']
         ],
         "${_Header}": [
            ["style", "max-width", '800px']
         ],
         "${_Linx}": [
            ["style", "left", '65.04%'],
            ["style", "top", '20.62%']
         ],
         "${_copywriting}": [
            ["style", "max-width", '800px']
         ],
         "${_Work}": [
            ["color", "color", 'rgba(60,66,79,1)'],
            ["style", "left", '21.07%'],
            ["style", "font-size", '18px'],
            ["style", "top", '0%'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Sifonn'],
            ["style", "text-decoration", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_About}": [
            ["color", "color", 'rgba(60,66,79,1)'],
            ["style", "left", '77.14%'],
            ["style", "font-size", '18px'],
            ["style", "top", '0%'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Sifonn'],
            ["style", "text-decoration", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_top_red}": [
            ["style", "line-height", '72px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(240,103,103,1.00)'],
            ["style", "right", 'auto'],
            ["style", "left", '10.89%'],
            ["style", "font-size", '48px'],
            ["style", "top", '0.01%'],
            ["style", "height", '72px'],
            ["style", "font-family", 'Sifonn'],
            ["style", "width", '665px']
         ],
         "${_cv}": [
            ["color", "color", 'rgba(60,66,79,1.00)'],
            ["style", "left", '0%'],
            ["style", "font-size", '18px'],
            ["style", "top", '0%'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Sifonn'],
            ["style", "text-decoration", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${__hover}": [
            ["color", "background-color", 'rgba(240,103,103,1.00)'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '2px'],
            ["style", "top", '25px'],
            ["style", "left", '-5px'],
            ["style", "width", '40px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(167,230,213,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "max-width", 'none'],
            ["style", "width", '100%']
         ],
         "${_Im}": [
            ["style", "line-height", '72px'],
            ["style", "bottom", 'auto'],
            ["style", "right", 'auto'],
            ["style", "left", '3.24%'],
            ["style", "font-size", '48px'],
            ["style", "top", '46.16%'],
            ["style", "height", '72px'],
            ["style", "font-family", 'Sifonn'],
            ["style", "width", '706px']
         ],
         "${_Blog}": [
            ["color", "color", 'rgba(60,66,79,1)'],
            ["style", "left", '50%'],
            ["style", "font-size", '18px'],
            ["style", "top", '0%'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Sifonn'],
            ["style", "text-decoration", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_lower_red}": [
            ["style", "line-height", '72px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(240,103,103,1.00)'],
            ["style", "right", 'auto'],
            ["style", "left", '0%'],
            ["style", "font-size", '48px'],
            ["style", "top", '56.24%'],
            ["style", "height", '72px'],
            ["style", "font-family", 'Sifonn'],
            ["style", "width", '706px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4300,
         autoPlay: true,
         labels: {
            "Done MEssage": 750
         },
         timeline: [
            { id: "eid47", tween: [ "style", "${_chat}", "top", '122.53%', { fromValue: '129.35%'}], position: 0, duration: 844, easing: "easeInOutElastic" },
            { id: "eid51", tween: [ "style", "${_chat}", "top", '113.78%', { fromValue: '122.53%'}], position: 2200, duration: 1225, easing: "easeInOutElastic" },
            { id: "eid71", tween: [ "style", "${_Work}", "height", '24px', { fromValue: '24px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid69", tween: [ "style", "${_Blog}", "height", '24px', { fromValue: '24px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid72", tween: [ "style", "${_chat}", "display", 'none', { fromValue: 'block'}], position: 3425, duration: 0, easing: "easeInOutElastic" },
            { id: "eid60", tween: [ "style", "${__hover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid35", tween: [ "transform", "${_chat}", "scaleX", '1', { fromValue: '0.65'}], position: 0, duration: 844, easing: "easeInOutElastic" },
            { id: "eid36", tween: [ "style", "${_chat}", "opacity", '1', { fromValue: '0'}], position: 202, duration: 298, easing: "easeInOutElastic" },
            { id: "eid37", tween: [ "style", "${_chat}", "opacity", '0', { fromValue: '1'}], position: 2383, duration: 699, easing: "easeInOutSine" },
            { id: "eid61", tween: [ "style", "${_cv}", "height", '24px', { fromValue: '24px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid38", tween: [ "transform", "${_chat}", "scaleY", '1', { fromValue: '0.65'}], position: 0, duration: 844, easing: "easeInOutElastic" },
            { id: "eid70", tween: [ "style", "${_About}", "height", '24px', { fromValue: '24px'}], position: 0, duration: 0, easing: "easeInOutSine" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-120717618");
