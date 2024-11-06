let row = '0';
let column = '1';

let matrice = "";

for (i = 0; i < 8; i++){
    let currentRow = "";

    for(j = 0; j < 4; j++){
        if(i % 2 == 0){
            currentRow += row + column;
        } else {
            currentRow += column + row;
        }
    }

    matrice += currentRow + "\n";
}

console.log(matrice)