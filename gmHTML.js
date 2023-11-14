// This saves the html event listener functions
let gmHTML = {
  // This runs when the download png button is clicked to save the canvas
  downloadPNG() {
    saveCanvas('GMGraph','png');
  },
  //This stores the select menu option functions
  selectMenu:{
    optionChanged() {
      let value = document.getElementById("selectMenuOption").value;
      let options = document.getElementsByClassName("parameterDivs");
      //hide all the divs so that only the chosen one will 'switch on'
      for(let i=0; i<options.length; i++) {
        options[i].style.display = 'none';
      }
      //display the chosen div
      switch(value) {
        case "none":
          break;
        case "Canvas Settings":
          document.getElementById("canvas_settings").style.display = 'block';
          break;
        case "Plot Area Settings":
          document.getElementById("plot_area_settings").style.display = 'block';
          break;
      }
    }
  },
  canvasParameters: {
    //changes the canvas bg color to match the one on the selector
    bgColorChange() {
      let col = document.getElementById("plot_area_color_selector").value;
      gmPlotArea.plotAreaColor = col;
    },
    canvasHeightChange() {
      let canvasHeight = document.getElementById("canvas_height_input").value;
      gmCanvas.hgt=canvasHeight;
      resizeCanvas(gmCanvas.wdth,gmCanvas.hgt);
    },
    canvasWidthChange() {
      let canvasWidth = document.getElementById("canvas_width_input").value;
      gmCanvas.wdth=canvasWidth;
      resizeCanvas(gmCanvas.wdth,gmCanvas.hgt);
    },
  plotAreaParameters: {
    //changes the plot area bg color to match the one on the selector
    bgColorChange() {
      let col = document.getElementById("plot_area_color_selector").value;
      gmPlotArea.plotAreaColor = col;
    },
    heightChange() {
      let plotHeight = document.getElementById("plot_area_height_input").value;
      gmPlotArea.heightPixels=plotHeight;
    },
    widthChange() {
      let plotWidth = document.getElementById("plot_area_width_input").value;
      gmPlotArea.widthPixels = plotWidth;
    }
  }
}
}