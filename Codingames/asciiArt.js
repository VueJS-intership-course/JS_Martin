const L = parseInt(readline()); //4
const H = parseInt(readline()); //5
const T = readline().toUpperCase();

for (let i = 0; i < H; i++) {
    const ROW = readline();

    let line = '';

    for (let j = 0; j < T.length; j++) {
        let indexAscii = T.charCodeAt(j) - 65;
        if (indexAscii < 0 || indexAscii > 26) {
            indexAscii = 26;
        }

        line += ROW.substring(indexAscii*L, (indexAscii + 1)*L);
    }
    console.log(line);
}