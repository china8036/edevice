import { __extends } from 'tslib'
import {Path} from 'zrender'
var CapacitanceShape = (function () {
    function CapacitanceShape() {
        this.cx = 0
        this.cy = 0
        this.len = 0
    }
    return CapacitanceShape
}());
export { CapacitanceShape }
var Capacitance = (function (_super) {
    __extends(Capacitance, _super)
    function Capacitance(opts) {
        return _super.call(this, opts) || this
    }
    Capacitance.prototype.getDefaultShape = function () {
        return new CapacitanceShape()
    };
    Capacitance.prototype.buildPath = function (ctx, shape) {
        ctx.moveTo(shape.cx , shape.cy + shape.len/2 )
        ctx.lineTo(shape.cx - shape.len*0.2, shape.cy + shape.len/2 )
        ctx.moveTo(shape.cx, shape.cy);
        ctx.lineTo(shape.cx, shape.cy + shape.len);
        ctx.moveTo(shape.cx + shape.len*0.2, shape.cy);
        ctx.lineTo(shape.cx + shape.len*0.2, shape.cy + shape.len);
        ctx.moveTo(shape.cx + shape.len*0.2 , shape.cy + shape.len/2 )
        ctx.lineTo(shape.cx + shape.len*0.4, shape.cy + shape.len/2 )
    }
    return Capacitance
}(Path))
Capacitance.prototype.type = 'Capacitance'
export default Capacitance
