export function canvasAnimation(){
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight


  let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  }

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  })
  
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    init()
  })


  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  function Ball(x, y, radius, dx, color, radians) {
      this.x = x
      this.y = y 
      this.radius = radius
      this.color = color
      this.dx = dx
      this.radians = radians
      this.velocity = 0.02

      this.draw = function(){
        c.beginPath()
        c.strokeStyle = this.color
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.stroke()
        c.lineWidth = 10
        c.closePath()
      }

      this.update = function(){
        // grow the ball bigger
        // if( this.radius * 2 > canvas.width || this.radius * 2 < 10) {
        //    this.dx = -this.dx
        // }

        // this.radius += this.dx 


        // x coordinate
        // if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
        //   this.dx = -this.dx
        // }
      
        // this.x += this.dx


        // Math.sin & Math.cos 
        this.radians += this.velocity 
               // original x cor
        this.x = x + Math.cos(this.radians) * 200
        //new x cor 
        this.y = y + Math.sin(this.radians) * 80

        this.draw()
    }
  }



  let ballArr;
  function init(){
    ballArr = []
    let radians = 0
    for( let i =0; i < 10; i++) {   
      radians += 30
      ballArr.push(new Ball(canvas.width/2, canvas.height/2, 50, 3, "pink", radians))
    }
  }
  
  
  function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    // c.fillRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    
    for(let i = 0; i < ballArr.length; i++) {
      ballArr[i].update()   
    }
  }







  // trail effects
//   function Ball(x, y, radius, dx, color, radians) {
//     this.x = x
//     this.y = y 
//     this.radius = radius
//     this.color = color
//     this.dx = dx
//     this.radians = radians
//     this.velocity = 0.05
//     this.distanceFromCenter = randomIntFromRange(50, 200)

//     this.draw = function(){
//       c.beginPath()
//       c.fillStyle = this.color
//       c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
//       c.fill()
//       c.lineWidth = 10
//       c.closePath()
//     }

//     this.update = function(){
//       this.radians += this.velocity 
//       //this.x = new coor   // x = original coor
//       this.x = x + Math.cos(this.radians) * this.distanceFromCenter
//       this.y = y + Math.sin(this.radians) * this.distanceFromCenter

//       this.draw()
//   }
// }


// let ballArr;
// function init(){
//   ballArr = []
//   let radians = 0
//   for( let i =0; i < 50; i++) {   
//     radians += 30
//     ballArr.push(new Ball(canvas.width/2, canvas.height/2, 20, 3, "pink", radians))
//   }
// }


// function animate(){
//   // c.clearRect(0, 0, canvas.width, canvas.height)
//   requestAnimationFrame(animate)

//   c.fillStyle = 'rgba(255, 255, 255, 0.05)'
//   c.fillRect(0, 0, canvas.width, canvas.height)
  
//   for(let i = 0; i < ballArr.length; i++) {
//     ballArr[i].update()   
//   }
// }
  


  init()
  animate()

}









