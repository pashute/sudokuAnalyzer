class SudokuAnalyze{
    // returns sorted list of done in sample
    // e.g. for a sample of rows  it checks each rowSectionPart 
    static done(sample){
        let result = zero();
        for (var i=0; i<3; i++) // main section 
            for (var j=0; j<3; j++) // main-section part
                for (var m=0; m<3; m++) // sub section
                    for (var n=0; n<3; n++) // sub-section part
                        let val = sample[i][j][m][n];
                        if ( val>0 )
                            result[i][j].push(val);
        return result.sort();
    }


    static remaining(doneData){
        let result = [];
        for (var i=0; i<3; i++) // section 
            for (var j=0; j<3; j++) // section part
                let val = doneData[i][j];
                        if ( !(result[i][j].includes(val)) )
                            result[i][j].push(val); 
        return result.sort();
    }

    static count(data){
        let result =  0;
        let arr = data.flat(4);
        for (n of arr)
            (n > 0) ? result++ ;
        return result; 
    }

    //  update sections (shapes)  
    //  count missing: 9 rows, 9 cols, 9 cubes, 9 nums, 9 sections 
    //  update by rows
    //  update by cols
    //  update by cubes
    //  update by nums
} //..class