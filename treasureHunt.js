var treasureLocation = Math.floor(Math.random() * 8)
var bombLocation = Math.floor(Math.random() * 8)
var counter = 5
console.log(treasureLocation)
console.log(bombLocation)
const treasureHunt = (id) => {
//   var id = Math.floor(Math.random() * 8)
    counter = counter - 1
    document.getElementById("counter").innerHTML = `Turns Remaining: ${counter}`
  if (treasureLocation === id) {
    document.getElementById  (id).innerHTML = "💰"
    alert("💰💰💰 Winner! 💰💰💰")
    // document.getElementById  ("counter").innerHTML = ""
    // document.getElementById  ("gameboard").innerHTML = ""

//Tell the code how to randomly choose one of the numbers in the table
  }
  else if (bombLocation === id) {
    document.getElementById  (id).innerHTML = "💣"
    alert("💣 You Lost! 💣")
    // document.getElementById  ("counter").innerHTML = ""
    // document.getElementById  ("gameboard").innerHTML = ""

  }
  else if (counter === 0) {
    alert(" 🚫 Out of turns! Try Again! 🚫 ")
    document.getElementById  ("counter").innerHTML = ""
    document.getElementById  ("gameboard").innerHTML = ""


  }
  else {
    return document.getElementById  (id).innerHTML = "🌲"
  // //Tell the code how to randomly choose one of the numbers in the table
  //

  }
}
