import { __extends } from 'tslib'
import Edevice from '@/lib/zrender/Edevice'
var ElineShape = (function () {
    function ElineShape() {
        this.cx = 0
        this.cy = 0
        this.len = 0
       
    }
    return ElineShape
}());
export { ElineShape }
var Eline = (function (_super) {
    __extends(Eline, _super)
    function Eline(opts) {
        return _super.call(this, opts) || this
    }
    Eline.prototype.getDefaultShape = function () {
        return new ElineShape()
    };
    Eline.prototype.buildPath = function (ctx, shape) {
        ctx.moveTo(shape.cx , shape.cy );
        ctx.lineTo(shape.cx + shape.len, shape.cy);
        if (!this.dots) {
            this.dots = [];
        }
        for (var i = 0; i < this.dots.length; i++) {
            ctx.moveTo(this.dots[i].x1 , this.dots[i].y1);
            ctx.lineTo(this.dots[i].x2 , this.dots[i].y2);
        }
        
    }
    Eline.prototype.drift = function (dx, dy, e) {
        return
        if(Math.abs(dx) > Math.abs(dy)){
            dy = 0
        }else{
            dx = 0
        }
        if(Math.abs(dx) < 10 && Math.abs(dx) < 10) {
            return
        }
        let newLine = {x1:e.offsetX - dx, y1:e.offsetY - dy, x2:e.offsetX, y2:e.offsetY}
        if (!this.dots) {
            this.dots = [];
        }
        this.dots.push(newLine);
        console.log(this.dots);
        this.animate("shape", false).when(0, {
            len: 10}).start(); 
    }
    Eline.prototype.onmousedown = function(eventPacket){
        this.driftBX = eventPacket.event.zrX
        this.driftBY = eventPacket.event.zrY
        console.log("mouse down:", this)

    }
    Eline.prototype.onmouseup = function(eventPacket){
        let dx =  eventPacket.event.zrX - this.driftBX
        let dy = eventPacket.event.zrY - this.driftBY
        if(Math.abs(dx) < 10 && Math.abs(dy) < 10) {
            return
        }
        let newLine = {x1:this.driftBX, y1:this.driftBY, x2:eventPacket.event.zrX, y2:eventPacket.event.zrY}
        if (!this.dots) {
            this.dots = [];
        }
        this.dots.push(newLine);
        console.log(this.dots);
        this.animate("shape", false).when(0, {
            len: 10}).start(); 
        
    }
    return Eline
}(Edevice))
Eline.prototype.type = 'Eline'
export default Eline
