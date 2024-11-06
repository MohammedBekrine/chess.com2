let row = '0';
let column = '1';

let matrice = "";

for (i = 0; i < 8; i++){
    let currentRow = "";
    
    for(j = 0; j < 4; j++){
        currentRow += row + column;
    }

    matrice+=currentRow + "\n";
}

console.log(matrice)