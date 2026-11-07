//https://www.freecodecamp.org/learn/daily-coding-challenge/11-04
//Image Search

function imageSearch(images, term) {
  return images.filter(image =>
    image.toLowerCase().includes(term.toLowerCase())
  );
}

console.log(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"));
// ["dog.png"]

console.log(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"));
// ["Sunset.jpg", "sunflower.jpeg"]

console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"));
// ["Moon.png", "stars.png"]

console.log(imageSearch(
  ["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"],
  "Cat"
));
// ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]