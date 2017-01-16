/*$(document).ready(function(){
 $("#imgs div").on("click",function(){
 var i=$(this).index();
 if(i==0){
 $(this).children("img").attr("src","imgs/mobile0"+(i+1)+".png");
 $("#imgs div").eq(i+1).children("img").attr("src","imgs/mobile"+(i+2)+".png");
 $("#imgs div").eq(i+2).children("img").attr("src","imgs/mobile"+(i+3)+".png");
 }else if(i==1){
 $(this).children("img").attr("src","imgs/mobile0"+(i+1)+".png");
 $("#imgs div").eq(i-1).children("img").attr("src","imgs/mobile"+i+".png");
 $("#imgs div").eq(i+1).children("img").attr("src","imgs/mobile"+(i+2)+".png");
 }else if(i==2){
 $(this).children("img").attr("src","imgs/mobile0"+(i+1)+".png");
 $("#imgs div").eq(i-2).children("img").attr("src","imgs/mobile"+(i-1)+".png");
 $("#imgs div").eq(i-1).children("img").attr("src","imgs/mobile"+i+".png");
 }
 $("#box>div").eq(i).addClass("block").siblings().removeClass("block");
 })
 })
 */



$(function(){
    $(".one").on("click",function(){
        $(".one").removeClass("none");
        $(this).addClass("none");
        $(this).next().removeClass("none");
        var i=$(this).parent().index();
        $("#box .row").eq(i).addClass("block").siblings().removeClass("block");
    })

})
var getId = function(Id){
    return document.getElementById(Id);
};
var addEvent = function(obj,e,fun){
    if(obj.addEventListener){
        obj.addEventListener(e,fun,false);
    }else{
        obj.addEventListener("on"+e,fun);
    }
};

addEvent(window,"scroll",function(){
    var run = getId("running");
    var body = getId("body");
    var scrollHeight = document.body.scrollTop;
    var contentHeight = body.offsetHeight-run.offsetHeight;
    if(scrollHeight>230 &&scrollHeight<contentHeight+230){
        run.style.top = scrollHeight+"px";
    }else if(scrollHeight<=230){
        run.style.top = 230+"px";
    }
})
/**
 * Created by Administrator on 16-9-17.
 */
