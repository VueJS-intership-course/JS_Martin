/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const object = {};
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.

    object[EXT.toLowerCase()] = MT; 
}
for (let i = 0; i < Q; i++) {
    const FNAME = readline().toLowerCase(); // One file name per line.
    const extensions = FNAME.split('.');
    const extension = extensions[extensions.length - 1];

    if (extensions.length > 1 && object[extension]) {
        console.log(object[extension]);
    } else {
        console.log("UNKNOWN")
    }
}



// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.


