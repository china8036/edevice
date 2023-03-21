<template>
  <div class="hello">
    <div id="zren"></div>
    <!-- <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas> -->
  </div>
</template>

<script>
import * as zrender from 'zrender'
import Power from '@/lib/zrender/Power'
import Capacitance from '@/lib/zrender/Capacitance'
import Resistance from '@/lib/zrender/Resistance'
import Switch from '@/lib/zrender/Switch'
import Eline from '@/lib/zrender/Eline'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('mounted')
    this.zr = zrender.init(document.getElementById('zren'))
    this.group = new zrender.Group()
    this.zr.add(this.group)
    let power = new Power({
      shape: {cx: 350, cy: 150, len: 100},
      style: {fill: 'none', stroke: '#000000'},
      draggable: true})
    // power.animate("shape", false)
    // .when(500, {
    //   len: 150,
    // })
    // .start();
    let capacitance = new Capacitance({
      shape: {cx: 550, cy: 150, len: 20},
      style: {fill: 'none', stroke: '#000000'}})
    let resistance = new Resistance({
      shape: {cx: 750, cy: 150, width: 200},
      style: {fill: 'none', stroke: '#000000',text:'RRRRR',textFill:'#333',textStroke:'yellow',
      textPosition:'inside',fontSize:12,textWidth:1,textHeight:12,textLineWidth:1,textLineHeight:14},
      draggable: true})
    let sw = new Switch({
      shape: {cx: 950, cy: 150, len: 20},
      style: {fill: 'none', stroke: '#000000'},
      draggable: true})
    let line = new Eline({shape: {cx: 150, cy: 150, dx: 210, dy:150}, style: {fill: 'none', stroke: '#000000'},draggable: true})
    this.group.add(power)
    // this.group.add(capacitance)
    // this.group.add(line)
    this.group.add(resistance)
    this.group.add(sw)
    this.group.add(line)
    // resistance.beforeUpdate = function(){
    //   //console.log('capacitance after', this.invTransform)
    //    console.log('resistance after', this.transform)
    // }
    // resistance.onmouseover = function(eventPacket){
    //   console.log("resistance mouseover", eventPacket)
    //   console.log("resistance this", this)
    //   if(!this.line){
    //     this.line = []
    //   }
    //   this.line[0] = new zrender.Line({shape: {x1: eventPacket.event.zrX, y1: eventPacket.event.zrY,
    //     x2:  eventPacket.event.zrX + 60,y2:  eventPacket.event.zrY + 60, percent:0.8},style: {stroke: 'red'}})
    //   this.parent.add(this.line[0])
    // }

    // resistance.onmouseout = function(eventPacket){
    //   console.log("resistance onmouseout", this)
    //   // this.parent.remove(this.line[0])
    // }

    // resistance.ondblclick = function(eventPacket){
    //   console.log(this);
    //   console.log("resistance dblclick", eventPacket)
    //   var m = this.transform;
    //     if (!m) {
    //       // [cos Q,-sina Q, dx]    [x]
    //       // [sin Q, cos Q, dy]    [y]
    //       // [ 0,    0,       1]              [1]
    //         m = this.transform = [1, 0, 0, 1, 0, 0];
    //     }
    //     // let rotate = 30 * Math.PI / 180
    //     // var sin = Math.sin(rotate);
    //     // var cos = Math.cos(rotate);
    //     debugger
    //     matrix.translate(m, m, [-this.shape.cx , -this.shape.cy - this.shape.width/6 ])//旋转中心平移到远点
    //     matrix.rotate(m, m, 180);//旋转
    //     matrix.translate(m, m, [this.shape.cx , this.shape.cy + this.shape.width/6])//移动回旋转中心

    //     this.decomposeTransform();
    //     this.markRedraw();
    // }

    var _this = this
    this.zr.handler.on("mousemove",function(event){
      if(this.beginDrawLine){
        this.endDx = event.offsetX
        this.endDy = event.offsetY
        if(this.beginDx != this.endDx || this.beginDy != this.endDy){
          let moveX = Math.abs(this.endDx - this.beginDx)
          let moveY = Math.abs(this.endDy - this.beginDy)
          if(moveX > moveY){
            this.endDy = this.beginDy
          }else {
            this.endDx = this.beginDx
          }
           if(this.drawingLine){
             _this.group.remove(this.drawingLine)
           }
          this.drawingLine = new Eline({shape: {cx: this.beginDx, cy: this.beginDy, dx: this.endDx, dy:this.endDy}, style: {fill: 'none', stroke: '#000000'},draggable: true})
          _this.group.add(this.drawingLine)
        }
      }
    })
    this.zr.handler.on("mousedown",function(event){
      this.beginDrawLine = true
      this.endDx = event.offsetX
      this.endDy = event.offsetY
      this.beginDx = event.offsetX
      this.beginDy = event.offsetY
      // console.log(arguments)
      console.log("zr mouse down")
    })

    this.zr.handler.on("mouseup",function(event){
      this.beginDrawLine = false
      if(this.drawingLine){
        this.drawingLine = null
      }

      //
      // console.log(arguments)
      console.log("zr mouse up")
    })

    // sw.onmouseout = function(){
    //  // this.isClose = false
    //   // this.markRedraw();
    //   this.animate("shape", false) .when(500, {
    //    toClose: 0}).start();
    // }




  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#zren {
 width: 100%;
 height: 1000px;
 background-color: #42b983;
}
</style>
