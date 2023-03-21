import { __extends } from 'tslib'
import Edevice from '@/lib/zrender/Edevice'
var ElineShape = (function () {
    function ElineShape() {
        this.cx = 0
        this.cy = 0
        this.dx = 0
        this.dy = 0

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
        ctx.lineTo(shape.dx, shape.dy);

    }
    Eline.prototype.ondblclick = function(eventPacket){
           if(this.parent){
             this.parent.remove(this)
           }
    }

  Edevice.prototype.drift = function (dx, dy, e) {
      return
  }
    return Eline
}(Edevice))
Eline.prototype.type = 'Eline'
export default Eline
