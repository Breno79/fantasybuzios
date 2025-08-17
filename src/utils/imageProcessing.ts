export const cropTopBlackArea = async (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      // Draw the original image to analyze it
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Get image data to find where the black area ends
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      let cropTop = 0;
      const threshold = 30; // Consider pixels with RGB values below this as "black"
      
      // Scan from top to find where non-black content starts
      for (let y = 0; y < canvas.height; y++) {
        let hasNonBlackPixel = false;
        
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          
          // If we find a pixel that's not black/very dark
          if (r > threshold || g > threshold || b > threshold) {
            hasNonBlackPixel = true;
            break;
          }
        }
        
        if (hasNonBlackPixel) {
          cropTop = y;
          break;
        }
      }
      
      // Create new canvas with cropped dimensions
      const croppedCanvas = document.createElement('canvas');
      const croppedCtx = croppedCanvas.getContext('2d');
      
      if (!croppedCtx) {
        reject(new Error('Could not get cropped canvas context'));
        return;
      }
      
      // Set dimensions for cropped image
      croppedCanvas.width = img.width;
      croppedCanvas.height = img.height - cropTop;
      
      // Draw the cropped portion
      croppedCtx.drawImage(
        img, 
        0, cropTop, img.width, img.height - cropTop,  // source
        0, 0, img.width, img.height - cropTop         // destination
      );
      
      // Convert to data URL
      const croppedDataUrl = croppedCanvas.toDataURL('image/png', 0.9);
      resolve(croppedDataUrl);
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageSrc;
  });
};