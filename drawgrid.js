
    function drawBackground() {
        console.log("drawing background")
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.strokeStyle="black"
        ctx.fillStyle="black"
        drawGrid(canvas,false)
        drawGrid(canvas,true)
    }


    function drawGrid(major){
      // if major is true this draws a thick grid every 100 pixels
      // and labels the lines; otherwise it draws a light grid every
      // 10 pixels
      ctx.font = "10pt Georgia"
      linewidth = major?5:1
      increment = major?100:10
      if (major){
        ctx.strokeStyle = "rgb(0,0,0)"
      } else {
        ctx.strokeStyle = "rgb(200,200,200)"
      }
      ctx.beginPath();
      for(let x = 0; x<=canvas.width; x=x+increment){
        ctx.moveTo(x,0)
        ctx.lineTo(x,canvas.height)
        if (major) {ctx.fillText("x="+x,x,20)}
      }
      ctx.stroke()
      ctx.beginPath();
      for(let y = 0; y<=canvas.height; y=y+increment){
        ctx.moveTo(0,y)
        ctx.lineTo(canvas.width,y)
        if (major) {ctx.fillText("y="+y,0,y+10)}
      }
      ctx.stroke()

    }
