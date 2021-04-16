const mulan = {
title: `Mulan`,
main:`Fa Mulam`,
quote: function(){
    return `dishonor on yout family`;
},
storyline: function(){
return `the movie ${this.title} is about ${this.main}.`
}
};

const tangled = {
    title: `tangled`,
main:`repunzel`,
quote: function(){
    return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
},

storyline: function(){
    return `The movie ${this.title} is about ${this.main}.`;
  }
}

// 3a
function DisneyMovie(title, main){
  this.title = title;
  this.main = main;
}

DisneyMovie.prototype.storyline = function(){
    return `The movie ${this.title} is about ${this.main}.`;
  }
  
  // 3c
  const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
  console.log(mulan1);
  console.log(mulan1.storyline());
  
  // 3d
  const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
  console.log(tangled1);
  console.log(tangled1.storyline());


  class DM {
      constructor(title, main){
          this.title = title;
          this.main = main;
      }

      storyline(){
          return `the move ${this.title} is about ${this.main}`
      }

      static loveDisneyMovies(){
          return `i love disney`;
      }
  }


  const mulan2 = new DM(`mulan`, `fa mulan`);



  const tangeled2 = new DM(`repunzel`, `tangled`);



  console.log(DM.loveDisneyMovies());


  class DMCast extends DM{
      constructor(title, main, cast){
          super(title, main);
          this.cast = cast;
      }
  }

  const mulan3 = new DMCast(
      `mulan`, 
      `fa mulan`,
        
      );




 