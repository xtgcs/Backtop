/**
 * Created by Action on 2017/7/23.
 */
define(['jquery'],function ($) {
    function Scrollto(opts) {
       this.opts = $.extend({},Scrollto.DEFAULT,opts);
       this.$el = $('html,body');
    };
    Scrollto.prototype.move = function () {
        var opts = this.opts;
        if ($(window).scrollTop !== this.opts.end){
            if (!this.$el.is(":animated")){
                this.$el.animate({
                    scrollTop:opts.end
                },opts.speed)
            }
        }
    };
    Scrollto.prototype.go = function () {
        this.$el.scrollTop(this.opts.end);
    };
    Scrollto.DEFAULT= {
        way:'move',
        speed:500,
        end:0,
        pos:$(window).height()
    };
    return{
        Scrollto:Scrollto
    }
});