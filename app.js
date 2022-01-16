// const puzzleBoard = document.querySelector('#puzzle')
// const solveButton = document.querySelector('#solve-button')
// const squares = 81
// const submission = []
// // function GetName()
// // {
// //     const uname = document.getElementById("fname").value;
// //     document.getElementById("data").innerHTML = uname;
// // }
// for( let i=0; i<squares; i++ )
// {
//     const inputElement = document.createElement('input')
//     inputElement.setAttribute('type','number')
//     inputElement.setAttribute('min',1)
//     inputElement.setAttribute('max',9)
//     if(
//         ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 27 ) ||
//         ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27 ) ||
//         ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
//         ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53 ) ||
//         ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53 )
//     ){
//         inputElement.classList.add('odd-section')
//     }
//     //appending js to html element
//     puzzleBoard.appendChild(inputElement)
// }
// const joinValues = () => {
//     const inputs = document.querySelectorAll('input')
//     inputs.forEach( input => {
//         if(input.value)
//         {
//             submission.push(parseInt(input.value))
//         }
//         else
//         {
//             submission.push(0)
//         }
//     }) 
//     console.log('data',submission)
// }
// const populateValues =(isSolvable,board) =>{
//     const inputs = document.querySelectorAll('input')
//     if(isSolvable && board)
//     {
//         inputs.forEach((input,i) =>
//             {
//                 input.value = board[i]
//             })
//     }
// }
const solve = () =>{
    joinValues()
    const data = submission.join('')
    //console.log('data',data)
    //  const axios = require ('axios')
     var sudokuData = {
        board : submission,
        name:"default"
      };
       $.ajax({
              url:"https://sudokuopenapiexample.azurewebsites.net/api/sudoku-solver-post",
              type: "POST",
              data: sudokuData,
              contentType:"application/json; charset=utf-8",
              data: JSON.stringify(sudokuData),
              dataType:"json",
              success: function(response){
                   console.log(response)
                  populateValues(response.solvable,response.board)
                  document.getElementById("Sentence").innerHTML = "Puzzle " + response.name + " solved on " + response.dateTimeStamp
                 },
                error:function(response){
                    console.log(response)
                }
              })
}
solveButton.addEventListener('click',solve)