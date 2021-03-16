/* A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future" */

function yourFutureCareer() {
  const career = Math.random();
  if (career <= 0.32) { return 'FrontEnd Developer' } 
  if (career <= 0.65) { return 'BackEnd Developer' }
  else { return 'Full-Stack Developer' }
}


yourFutureCareer();