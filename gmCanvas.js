// This stores the canvas settings
let gmCanvas = {
  // default canvas values
  _hgt: 400,
  _wdth: 400,
  _bkgrd: 240,
  
  // the height should be an integer number of pixels
  get hgt() {return this._hgt},
  set hgt(a) {
    this._hgt = a;
  },
  
  // the width should be an integer number of pixels
  get wdth() {return this._wdth},
  set wdth(a) {
    this._wdth = a
  },
  
  //the background needs no error check necessary since p5js will throw an error is the type is wrong
  get bkgrd() {return this._bkgrd},
  set bkgrd(a) {
    this._bkgrd = a
  }
}