var background=new Konva.Layer;background.add(new Konva.Rect({x:0,y:0,width:stage_val.w,height:stage_val.h}));for(var i=20;i<stage_val.w;i+=20)background.add(new Konva.Line({points:[i,0,i,stage_val.h],stroke:i%100==0?"black":"#929292",strokeWidth:.7,lineCap:"round",lineJoin:"round"}));var move_background=!1;background.on("mousedown",function(){document.body.style.cursor="move",move_background={stage:stage.getOffset(),mouse:stage.getPointerPosition()}});for(var i=20;i<stage_val.h;i+=20)background.add(new Konva.Line({points:[0,i,stage_val.w,i],stroke:i%100==0?"black":"#929292",strokeWidth:.7,lineCap:"round",lineJoin:"round"}));