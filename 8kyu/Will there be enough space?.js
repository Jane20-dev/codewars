function enough(cap, on, wait) {
    const passangers = on + wait // all passangers;
    const space = cap - on // available space;
     
     if (space >= wait) {
       return 0 // enough space
     } else {
       return wait - space // not enough
     }
   }