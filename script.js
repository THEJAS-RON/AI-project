const twoDArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
//console.log(twoDArray[3][3])
function is_valid(row, col, number) {
    for (let x = 0; x < 9; x++) {
        if (twoDArray[row][x] == number) {
            return false
        }
    }
    for (let y = 0; y < 9; y++) {
        if (twoDArray[y][col] == number) {
            return false
        }
    }
    corner_row = row - row % 3
    corner_col = col - col % 3
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (twoDArray[corner_row + x][corner_col + y] == number) {
                return false
            }
        }
    }
    return true
}
function solve(row, col) {
    if (col == 9) {
        if (row == 8) {
            return true
        }
        row += 1
        col = 0
    }
    if (twoDArray[row][col] > 0) {
        return solve(row, col + 1)
    }
    for (let num = 1; num <= 9; num++) {
        if (is_valid(row, col, num)) {
            twoDArray[row][col] = num
            if (solve(row, col)) {
                return true
            }
        }
        twoDArray[row][col] = 0
    }
    return false

}
btn.addEventListener("click", function handleclick() {
    console.log("hi") 
    // if(document.getElementById("box"+'1'+'1').value == ""){
    //     console.log("check")
    // }
    for(let i=1;i<=9;i++){
        for(let j=1;j<=9;j++){
            if(document.getElementById("box"+i.toString()+j.toString()).value == ""){
                console.log("check")
                twoDArray[i-1][j-1] = 0
            }
            else{
                console.log("check")
                twoDArray[i-1][j-1] = document.getElementById("box"+i.toString()+j.toString()).value
            }
        }
    }
    solve(0, 0)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            console.log(twoDArray[i][j])
            let output = document.getElementById("box"+(i+1).toString()+(j+1).toString())
            // console.log('hyy')
            output.innerHTML = twoDArray[i][j]
        }
    }

})