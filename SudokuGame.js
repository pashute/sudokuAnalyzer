// main sudoku game

// all are 3x3.
// 1: 00, 2: 01, 3: 02
// 4: 10, 5: 11, 6: 12
// 7: 20, 8: 21, 9: 22  

// So:  row 1: r[0][0]
//      row 5: r[1][1]

// 
// ySection / yRow, yxSection, yxPlace 
initialVals = [ 
    [   
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
    ][ 
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
    ][ 
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
      [[0,0,0],[0,0,0],[0,0,0]],
    ] 
  ];
  