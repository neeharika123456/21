function isTouching(square,circle){

    if (square.x - circle.x < circle.width/2 +square.width/2
      && circle.x - square.x < circle.width/2 + square.width/2
      && square.y - circle.y < circle.height/2 + square.height/2
      && circle.y - square.y < circle.height/2 + square.height/2) {
      return true;
  }
  else {
    return false;
  }
  
  
  }