/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let newArr = []
  newArr = time.split(':');
  if (newArr[0] >= 0 && newArr[0] < 12)
    return "Good Morning"

  else if (newArr[0] >= 12 && newArr[0] <= 17)
    return "Good Afternoon"

  else
  return "Good Evening"
  end

}
/* Write your implementation of displayMessage() */
function displayMessage(string){
   document.querySelector('#greeting').innerText = string
}
