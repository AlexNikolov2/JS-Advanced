function MagicMatrix(matrix) {
        let sumRow = row => matrix[row].reduce((a, b) => a + b);
        let columnSum = column => matrix.map(row => row[column]).reduce((a, b) => a + b);
     
        let rowSum = sumRow(i);
        for (let i = 1; i < matrix.length; i++) {
        }
     
        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = columnSum(j);
            if (rowSum !== colSum) {
                return false;
            }
            else{
                return true;
            }
        }

}
MagicMatrix([[4, 5, 6],
            [6, 5, 4],
            [5, 5, 5]]
   )