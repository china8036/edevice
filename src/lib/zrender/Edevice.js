import { __extends } from 'tslib'
import {Path} from 'zrender'
import { matrix } from 'zrender'
/**
 * 电子元器件 父类
 */
var Edevice = (function (_super) {
    __extends(Edevice, _super)
    function Edevice(opts) {
        return _super.call(this, opts) || this
    }
    Edevice.prototype.driftX = Edevice.prototype.driftY = 0
    //双击以 x y为中心顺时针旋转90°
    Edevice.prototype.ondblclick = function(eventPacket){
        console.log(this);
        console.log("resistance dblclick", eventPacket)
        var m = this.transform;
          if (!m) {
              m = this.transform = [1, 0, 0, 1, 0, 0]; 
          }

          console.log("drift info:", this.driftX, this.driftY)
          matrix.translate(m, m, [-this.shape.cx - this.driftX , -this.shape.cy - this.driftY ])//旋转中心平移到原点
          matrix.rotate(m, m, -90 * Math.PI / 180);//旋转
          matrix.translate(m, m, [this.shape.cx +  this.driftX , this.shape.cy + this.driftY  ])//移动回旋转中心
          this.decomposeTransform();
          this.markRedraw();
      }

      Edevice.prototype.drift = function (dx, dy, e) {
        _super.prototype.drift.call(this, dx, dy, e);
        this.driftX += dx;
        this.driftY += dy;
    }
    return Edevice
}(Path))
export default Edevice
