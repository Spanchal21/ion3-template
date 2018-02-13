
import { Injectable } from '@angular/core';

@Injectable()
export class ParticlesProvider {
   constructor()
   {  }

   renderParticle(context			: any,
                  canvasWidth 	    : number,
                  canvasHeight 	    : number)
   {


      // Define particle properties
      let startingX     : number 	= Math.round(canvasWidth/2) + Math.random() * 225,
          startingY     : number 	= Math.round(canvasHeight/2) + Math.random() * 115 - 57,
          radius        : number    = this.generateRandomValue(7, 3),
          startAngle    : number    = 0,
          endAngle      : number    = 2 * Math.PI,
          clockwise     : boolean   = true,

          // Define the colour value for each generated particle using the HSLA CSS property
          hue           : number    = this.generateRandomValue(50, 0),
          saturation    : any       = 80 + '%',
          lightness     : any       = 50 + '%',
          alpha         : number    = 1,
          colourFill    : any       = "hsla(" + hue + "," + saturation + "," + lightness + "," + alpha + ")";


      // Update the X * Y axis values for the particle
      startingX 					= startingX + Math.random() * 310 - 245;
      startingY 					= startingY + Math.random() * 410 - 225;


      // Generate the shape
      // - startingX 	(position on X axis)
      // - startingY 	(position on Y axis)
      // - radius    	(width of particle)
      // - startAngle   (starts from)
      // - endAngle   	(ends at)
      // - clockwise    (direction - clockwise or not)
      context.beginPath();
      context.arc(startingX,
                  startingY,
                  radius,
                  startAngle,
                  endAngle,
                  clockwise);
      context.fillStyle = colourFill;
      context.fill();
   }


   generateRandomValue(min : number,
                       max : number) : number
   {
      let maxVal : number     = max,
          minVal : number     = min,
          genVal : number;


      // Generate max value
      if(maxVal === 0)
      {
         maxVal = maxVal;
      }
      else {
         maxVal = 1;
      }


      // Generate min value
      if(minVal)
      {
         minVal = minVal;
      }
      else {
         minVal = 0;
      }

      genVal  = minVal + (maxVal - minVal) * Math.random();

      return genVal;
   }

}