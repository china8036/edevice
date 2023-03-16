import { __extends } from 'tslib'
import Edevice from '@/lib/zrender/Edevice'
var ResistanceShape = (function () {
    function ResistanceShape() {
        this.cx = 0
        this.cy = 0
        this.width = 0
    }
    return ResistanceShape
}());
export { ResistanceShape }
var Resistance = (function (_super) {
    __extends(Resistance, _super)
    function Resistance(opts) {
        return _super.call(this, opts) || this
    }
    Resistance.prototype.getDefaultShape = function () {
        return new ResistanceShape()
    };
    Resistance.prototype.buildPath = function (ctx, shape) {
        this.ctx = ctx
        let height = shape.width / 3
        let lineLen = shape.width / 3
        ctx.rect(shape.cx - 1, shape.cy -1, 2, 2)
        ctx.rect(shape.cx - (shape.width/2), shape.cy - (height/2), shape.width, height)
    }
    Resistance.prototype.getCtx = function(){
        return this.ctx
    }

    return Resistance
}(Edevice))
Resistance.prototype.type = 'Resistance'
export default Resistance
