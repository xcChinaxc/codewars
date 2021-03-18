/* Grasshopper - Grade book */

function getGrade (s1, s2, s3) {
  let mean = (s1+s2+s3)/3
  if(mean >= 90){ return "A"  }
  else if(mean >= 80){ return "B"  }
  else if(mean >= 70){ return "C"  }
  else if(mean >= 60){ return "D"  }
  else{ return "F"  }
}