
export async function loadIcons(){

    const manifestPath = document.querySelector('link[rel="manifest"]').getAttribute('href');

    fetch(manifestPath)
      .then(response => response.json())
      .then(manifest => {
        // Access the first icon's src
        const ImageSrc = manifest.icons[6].src;
        const IconSrc = manifest.icons[0].src
        // Set the src of the image element
        document.getElementById('logoImage').src = ImageSrc;
        document.querySelector('link[rel="icon"]').href = IconSrc;
      
        // Log the src for verification
        console.log('Src of the navbar icon:', ImageSrc);
      })
      .catch(error => {
        // Handle the error
        console.error('Error in index.js:', error);
      });
        
}
