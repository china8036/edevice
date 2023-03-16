import { __extends } from 'tslib'
import {Path} from 'zrender'
var SwitchShape = (function () {
    function SwitchShape() {
        this.cx = 0
        this.cy = 0
        this.len = 0
    }
    return SwitchShape
}());
export { SwitchShape }
var Switch = (function (_super) {
    __extends(Switch, _super)
    function Switch(opts) {
        return _super.call(this, opts) || this
    }
    Switch.prototype.getDefaultShape = function () {
        return new SwitchShape()
    };
    Switch.prototype.buildPath = function (ctx, shape) {
        ctx.setScale(10, 20, 1)
        let rad = Math.PI / 4
        ctx.moveTo(shape.cx , shape.cy )
        ctx.lineTo(shape.cx - shape.len * 2 / 3, shape.cy  )
        ctx.moveTo(shape.cx + 2 , shape.cy )
        ctx.arc(shape.cx, shape.cy, 2, 0, Math.PI * 2);
        ctx.moveTo(shape.cx, shape.cy )
        ctx.lineTo(shape.cx + shape.len * Math.cos(rad),  shape.cy  -  shape.len * Math.sin(rad))
        ctx.moveTo(shape.cx + shape.len * 2 / 3  , shape.cy )
        ctx.lineTo(shape.cx + shape.len * 4 / 3, shape.cy  )
        

    }
    return Switch
}(Path))
Switch.prototype.type = 'Switch'
export default Switch
