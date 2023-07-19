/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    let directX = '';
    let directY = '';
    // Write an action using console.log()
    
    if (initialTx > lightX) {
        directX = "W";
        initialTx--;
    } else if (initialTx < lightX) {
        directX = "E";
        initialTx++;
    }

    if (initialTy > lightY) {
        directY = "N";
        initialTy--;
    } else if (initialTy < lightY) {
        directY = "S";
        initialTy++;
    }

    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directY + directX);
}
