
photoArray = JSON.parse(content);
console.log(photoArray);

for (let photo of photoArray) {
    outputCard(photo);
}

function outputCard(photo) {
    console.log("photo: ", photo)
    document.write(`
        <article>
            <img src="./images/${photo.filename}"> 
            <div class="caption">
                <p>${photo.location.city} ${photo.location.country}</p>
                <h2>${photo.title}</h2>`);
                for (const color of photo.colors) {
                    document.write(`<span style=${constructStyle(color)}>${color.name}</span>
                    `)
                };      
    document.write(`</div>
    </article>`);

}

function outputColors(colorsArray) {
    for (let color of colorsArray) {
        constructColor(color);
    };
}

function constructColor(colorObj) {
    let color = colorObj.hex;
    return color;
}

function constructStyle(colorObj) {
    let background = `background-color: ${colorObj.hex}`;
  
    if (colorObj.luminance < 70) {
      background += '; color: white';
    }
  
    return `"${background}"`; // Add quotes around the entire style string
  }