class SudokuUtils{

    static num(x,y){ return x*3 + y + 1; }
    static xy(num){
        let x = Math.floor((num-1)/3); // 123:0, 456:1, 789:2
        let y = ((num-1) % 3) + 1;     // 147:0, 258:1, 369:2 
        return [x,y];
    }

    function fullSample(){ return [[1,2,3],[4,5,6],[7,8,9]]; }
    function zeroSample(){ return [[0,0,0],[0,0,0],[0,0,0]]; }

    static zero(){
        let result = [];
        for (var i=0; i<3; i++) // main section 
        for (var j=0; j<3; j++) // main-section part
            for (var m=0; m<3; m++) // sub section
                for (var n=0; n<3; n++) // sub-section part
                    result[i][j][m][n]=0;
        return result; 
    }

    static full(){
        let result = [];
        for (var i=0; i<3; i++) // main section 
        for (var j=0; j<3; j++) // main-section part
            for (var m=0; m<3; m++) // sub section
                for (var n=0; n<3; n++) // sub-section part
                    result[i][j][m][n] = num(i,j);
        return result; 
    }
}//..sudokuUtils