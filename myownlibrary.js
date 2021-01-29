function isTouching(Obj1, Obj2){
    if(Obj2.x-Obj1.x<Obj1.width/2+Obj2.width/2&&
      Obj1.x-Obj2.x<Obj1.width/2+Obj2.width/2&&
      Obj2.y-Obj1.y<Obj1.height/2+Obj2.height/2&&
      Obj1.y-Obj2.y<Obj1.height/2+Obj2.height/2){
      return true;
    }
    else{
     return false;
    }
  }