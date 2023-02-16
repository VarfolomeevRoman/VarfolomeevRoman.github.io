export class Layer {
    /**  @param {HTMLElement} container */
    constructor(container) {                         
     container.appendChild(this.createLayer());       //put Canvas to Container
  
     addEventListener(`resize`, () => this.fitToContainer(), false);
     this.fitToContainer();                        
    }
    createLayer() {
      this.canvas = document.createElement(`canvas`);       //create new Canvas element
      this.canvas.classList.add('canvas')
      this.context = this.canvas.getContext(`2d`);         //get access to 2d drawing tools
      return this.canvas;                                 
    }
    fitToContainer() {                                  //fit Canvas size to container
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    }
    get w() { return this.canvas.width }
    get h() { return this.canvas.height }
  }