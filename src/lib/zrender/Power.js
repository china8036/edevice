import { __extends } from 'tslib'
import Edevice from '@/lib/zrender/Edevice'
var PowerShape = (function () {
    function PowerShape() {
        this.cx = 0
        this.cy = 0
        this.len = 0
    }
    return PowerShape
}());
export { PowerShape }
var Power = (function (_super) {
    __extends(Power, _super)
    function Power(opts) {
        return _super.call(this, opts) || this
    }
    Power.prototype.getDefaultShape = function () {
        return new PowerShape()
    };
    Power.prototype.buildPath = function (ctx, shape) {
        //左连接端线
        // ctx.moveTo(shape.cx , shape.cy + shape.len/2 )
        // ctx.lineTo(shape.cx - shape.len*0.2, shape.cy + shape.len/2 )
        ctx.moveTo(shape.cx - (shape.len * 0.1), shape.cy - (shape.len/2) );
        ctx.lineTo(shape.cx - (shape.len * 0.1), shape.cy + (shape.len/2));
        ctx.moveTo(shape.cx + (shape.len * 0.1), shape.cy - (shape.len*0.3));
        ctx.lineTo(shape.cx + (shape.len * 0.1), shape.cy + (shape.len*0.3));
        //右连接端线
        // ctx.moveTo(shape.cx + shape.len*0.2 , shape.cy + shape.len/2 )
        // ctx.lineTo(shape.cx + shape.len*0.4, shape.cy + shape.len/2 )
        
    }
    return Power
}(Edevice))
Power.prototype.type = 'power'
export default Power
