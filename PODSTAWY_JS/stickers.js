function makeStickers(detailsCount, robotPart) {

  const sticker = []; 
  
  
  for (let i = 1; i <= detailsCount; i++) {
    sticker.push(`${robotPart} detail #${i}`);
  }
  
  return sticker;
   
  }

  console.log (makeStickers(2, 'Body'));
  console.log (makeStickers(4, 'Head'));
  console.log (makeStickers(0, 'Foot')); 




  