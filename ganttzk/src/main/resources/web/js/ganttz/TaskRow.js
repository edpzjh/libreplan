zk.$package("ganttz");

ganttz.TaskRow = zk.$extends(zk.Widget, {
	hideTaskLabel : function(){
		this.firstChild.hideTaskLabel();
	},
	showTaskLabel : function(){
		this.firstChild.showTaskLabel();
	}
});