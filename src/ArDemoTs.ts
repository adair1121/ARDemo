class ArDemoTs extends eui.Component {
	private mo:eui.Image;
	public constructor() {
		super();
		this.skinName="ArDemo";
		this.init();
		this.addEvent();
	}
	private  wz = [{x:51,y:130}, {x:375,y:130}, {x:51,y:561}, {x:375,y:561}]; 

	private index=0;
	private init(){
		this.mo.x=this.wz[this.index].x;
		this.mo.y=this.wz[this.index].y;
		this.index++;
	}
	private  addEvent(){
		this.mo.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
			egret.Tween.get(this.mo).to({x:this.wz[this.index].x,y:this.wz[this.index].y},200)
			this.index++;
			if(this.index==this.wz.length){
				this.index=0;
			}


		},this)
	}

	
}