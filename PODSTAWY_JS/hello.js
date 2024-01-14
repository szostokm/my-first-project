function makeStickers(detailsCount, robotPart) {

  const sticker = []; 
  
  
  for (let i = 1; i <= detailsCount; i++) {
    sticker.push(`${robotPart} detail #${i}`);
  }
  
  return sticker;
   
  }

  console.log (makeStickers(8, 'Body'));
  
  console.log (makeStickers(0, 'Foot')); 




  