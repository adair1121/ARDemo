var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArDemoTs = (function (_super) {
    __extends(ArDemoTs, _super);
    function ArDemoTs() {
        var _this = _super.call(this) || this;
        _this.wz = [{ x: 51, y: 130 }, { x: 375, y: 130 }, { x: 51, y: 561 }, { x: 375, y: 561 }];
        _this.index = 0;
        _this.skinName = "ArDemo";
        _this.init();
        _this.addEvent();
        return _this;
    }
    ArDemoTs.prototype.init = function () {
        this.mo.x = this.wz[this.index].x;
        this.mo.y = this.wz[this.index].y;
        this.index++;
    };
    ArDemoTs.prototype.addEvent = function () {
        this.mo.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.Tween.get(this.mo).to({ x: this.wz[this.index].x, y: this.wz[this.index].y }, 200);
            this.index++;
            if (this.index == this.wz.length) {
                this.index = 0;
            }
        }, this);
    };
    return ArDemoTs;
}(eui.Component));
__reflect(ArDemoTs.prototype, "ArDemoTs");
//# sourceMappingURL=ArDemoTs.js.map