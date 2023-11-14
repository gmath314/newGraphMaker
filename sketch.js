function setup() {
  createCanvas(gmCanvas.hgt,gmCanvas.wdth);
}

function draw() {
  //draw the canvas background
  background(gmCanvas.bkgrd);

  //draw the plot area
  stroke(gmPlotArea.plotBorderColor);
  fill(gmPlotArea.plotAreaColor);    rect(gmPlotArea.topLeftCornerX,gmPlotArea.topLeftCornerY,gmPlotArea.widthPixels,gmPlotArea.heightPixels);
}
