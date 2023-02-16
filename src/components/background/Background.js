

import { Layer } from './helpers/layer'
import { Loop } from './helpers/loop.js'
import { Mesh } from './helpers/mesh.js'



class Background {
  constructor(container) {
    this.layer = new Layer(container);

    window.addEventListener(`resize`, () => this.createMesh());
    this.createMesh();

    this.loop = new Loop(time => this.update(time), () => this.display());
  }
  createMesh() {
    this.mesh = new Mesh(this.layer);
  }
  update(correction = 0) {
    this.mesh.updateParticles(correction);
    this.mesh.updateTriangles(correction);
  }
  display() {
    this.mesh.renderTriangles(this.layer.context);
    // this.mesh.renderParticles(this.layer.context);
  }
  
}


export default Background;
