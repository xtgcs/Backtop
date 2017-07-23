/**
 * Created by Action on 2017/7/23.
 */
define(['jquery','Scrollto'],function ($,Scrollto) {
    function Backtop(el,opts) {
        this.opts = $.extend({},Backtop.DEFAULT,this.opts);
        this.$el = $(el);
        this.scroll = new Scrollto.Scrollto({
            end:0,
            speed:this.opts.speed
        });
        this._checkPosition();

        if (this.opts.way == 'move'){
            this.$el.on('click',$.proxy(this._move,this));
        }else{
            this.$el.on('click',$.proxy(this._go,this));
        }
        $(window).on('scroll',$.proxy(this._checkPosition,this));
    }

    Backtop.DEFAULT = {
        way:'move',
        pos:$(window).height(),
        speed:500
    }
    Backtop.prototype._move = function () {
        this.scroll.move();
    }
    Backtop.prototype._go = function () {
        this.scroll.go();
    }
    Backtop.prototype._checkPosition = function () {
        var $el = this.$el;
        if ($(window).scrollTop()>this.opts.pos){
            $el.fadeIn();
        }else{
            $el.fadeOut();

        }
    }
    return{
        Backtop:Backtop
    }

});