/**
 * NeoSpace - Main class
 * @author berge
 */
 
if(typeof NS == "undefined")
{
   NS = {};	
}

NS.Main = Class.extend({
	
	/**
	 * Stage
	 * @type aj.Stage
	 */
	stage : null,
	
	/**
	 * Plane
	 * @type NS.Plane
	 */
	plane : null,
	
	/**
	 * Constructor
	 */
	init : function()
	{
		this.stage = new aj.Stage("neospace");
		this.stage.library.addImage("plane", "http://asset1.rentability.com/images/transport/plane.png");
		this.stage.library.addImage("bullet", "http://www.usda.gov/img/bullets/l_c_bullet_unselected.gif");
		
		this.stage.load();
		this.stage.showFps = true;
		
		NS.Main.stage = this.stage;
		
		this.plane = new NS.Plane();
		this.stage.addChild(this.plane);
		
		var plane2 = new NS.Plane();
		this.stage.addChild(plane2);
		plane2.x -= 30;
		
		var plane3 = new NS.Plane();
		this.stage.addChild(plane3);
		plane3.x -= 60;
		
		var plane;
		for(var i=0; i<0; i++)
		{
			plane = new NS.Plane();
			this.stage.addChild(plane);
			plane.x = i;
		}
	}
	
});