let gmPlotArea = {
  _topLeftCornerX: 10,
  _topLeftCornerY: 10,
  _widthPixels: 380,
  _heightPixels: 380,
  _plotAreaColor: 255,
  _plotBorderColor: 0,
  
  set plotBorderColor(a) {
    this._plotBorderColor = a;
  },
  
  get plotBorderColor() {
    return this._plotBorderColor;
  },
  
  set plotAreaColor(a) {
    this._plotAreaColor = a;
  },
  
  get plotAreaColor() {
    return this._plotAreaColor;
  },
  
  set topLeftCornerX(a) {
    this._topLeftCornerX = a;
  },
  get topLeftCornerX() {
    return this._topLeftCornerX;
  },
  
  set topLeftCornerY(a) {
    this._topLeftCornerY = a;
  },
  get topLeftCornerY() {
    return this._topLeftCornerY;
  },
  
  set widthPixels(a) {
    this._widthPixels = a;
  },
  get widthPixels() {
    return this._widthPixels;
  },
  
  set heightPixels(a) {
    this._heightPixels = a;
  },
  get heightPixels() {
    return this._heightPixels;
  }
}
