import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ParticlesProvider } from '../../providers/particles/particles';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   // Programmatically link to the HTML5 Canvas area
   @ViewChild('canvasObj') canvasElement : ElementRef;

   private _CANVAS      : any;
   private _CONTEXT     : any;
   public particleQuantity  : number  = 0.10;
   private _NUM_PARTICLES   : number        =   this.particleQuantity;
   private _ANIMATION;
   public isPlaying         : boolean;




   constructor(public navCtrl     : NavController,
               private _PARTICLE  : ParticlesProvider)
   {

   }

   ionViewDidLoad() : void
   {
      this.prepareCanvas();
   }

   

   prepareCanvas() : void
   {
      this._CANVAS      = this.canvasElement.nativeElement;
      this._CANVAS.width    = 500;
      this._CANVAS.height   = 200;

      this.initialiseCanvas();
   }


   initialiseCanvas() : void
   {
      if(this._CANVAS.getContext)
      {
         this.setupCanvas();
         this.renderToCanvas();
      }
   }

   setupCanvas() : void
   {
      this._CONTEXT       = this._CANVAS.getContext('2d');
      this._CONTEXT.fillStyle   = "#3e3e3e";
      this._CONTEXT.fillRect(0, 0, 0, 0);
   }

   clearCanvas() : void
   {
      this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
      this.setupCanvas();
   }

   renderToCanvas() : void
   {
      this.createParticleAnimation();
      this.isPlaying    =   true;
   }

   createParticleAnimation() : void
   {
      // Generate a new particle via loop iteration
      for(var i = 0;
              i < this._NUM_PARTICLES;
              i++)
      {
         this._PARTICLE.renderParticle(this._CONTEXT,
                         this._CANVAS.width,
                         this._CANVAS.height);
      }

      this._ANIMATION = requestAnimationFrame(() =>
      {
         this.createParticleAnimation();
      });
   }

   refreshCanvas(val : any) : void
   {
      this._NUM_PARTICLES     = val.value;
      this.clearCanvas();
      this.renderToCanvas();
   }

   stopAnimation() : void
   {
      // Cancel the current animation
      cancelAnimationFrame(this._ANIMATION);
      this.isPlaying   = false;
   }


   replayAnimation() : void
   {
      this.clearCanvas();
      this.renderToCanvas();
   }

//======================== CSS animation ========================
public effect : any;
public cssClass : string;

applyClassBySelection(effect : string) : void
   {
      this.cssClass = "animated " + effect;
   }


}

