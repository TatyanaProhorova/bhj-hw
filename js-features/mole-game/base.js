(() => {
  let playing = true,
    activeHole = 1;_

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),// выбор дыры по index
    deactivateHole = index =>
      getHole( index ).className = 'hole', // function to deactivate -- classsname hole
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole', // function to activate -- classsname hole_has-mole
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 ); // random numbers from 1 to -- ID of ctive hole
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();
