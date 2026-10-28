//https://www.freecodecamp.org/learn/daily-coding-challenge/10-28
//Navigator

function navigate(commands) {
  const history = ["Home"];
  let current = 0;

  for (const command of commands) {
    if (command === "Back") {
      if (current > 0) current--;
    } else if (command === "Forward") {
      if (current < history.length - 1) current++;
    } else if (command.startsWith("Visit ")) {
      const page = command.slice(6);

      history.splice(current + 1);
      history.push(page);
      current++;
    }
  }

  return history[current];
}

console.log(navigate(["Visit About Us", "Back", "Forward"])); 
// About Us

console.log(navigate(["Forward"])); 
// Home

console.log(navigate(["Back"])); 
// Home

console.log(navigate(["Visit About Us", "Visit Gallery"])); 
// Gallery

console.log(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])); 
// Home

console.log(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"])); 
// Contact

console.log(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"])); 
// Visit Us