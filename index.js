// Executes this arrow function after everything loaded up

    
import("./build.js")
.then((module) => {
  
    const Build = module.Build;
    
   
    const game = new Build(3);
    game.createEnemies( );
    game.fillInfo();
    
    
    
});

