/**
 * Created by Action on 2017/7/21.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.1.1'
    }
});
requirejs(['jquery','backtop'],function ($,backtop){
    //1、模块化写法
    var backtop = new backtop.Backtop($("#top"),{
        way:'go',
        pos:100
    });

    //2、基础写法
    // $("#top").on("click",move);  //滚动到顶部
    // $("#top").on("click",$.proxy(scrollto.move,scrollto));//直接回到顶部
    // $(window).on("scroll",function () {
    //       position($(window).height());
    // });
    // position($(window).height());
    // function go() {
    //     $('html,body').scrollTop(0);
    // }
    // function move() {
    //     $('html,body').animate({
    //         scrollTop:0
    //     },500)
    // }
    // function position(pos) {
    //     if ($(window).scrollTop() > pos){
    //         $("#top").fadeIn();
    //     }else{
    //         $("#top").fadeOut();
    //     }
    // }
})