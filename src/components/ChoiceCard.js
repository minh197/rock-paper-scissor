import React from 'react'

export default function ChoiceCard(props) {
    console.log("props",props)
    let className=''
    if(props.previousWinner ==='Tie'){
        className ='tie'
    }else if(props.previousWinner ==='You'){
        console.log("dd",props.previousWinner)
        className = props.title==='You'?'winner':'loser'
    } else if (props.previousWinner === 'Computer'){
        className = props.title === 'Computer'?'winner':'loser'
        console.log("gg",props.previousWinner)
    }
//     const won = props.title === props.previousWinner; // trure or false 
//     console.log("ww",won)
//     let className;
//     const hasPreviousGame =
//       props.previousWinner === "Computer" || props.previousWinner === "You";
//     if (hasPreviousGame) {
//       className = won ? "winner" : "loser"; // you: winner, computer :loser 
//     }
//     let prompt;
//   if (won) {
//     prompt = "Won";
//     className = won ? "winner" : "loser";
//   } else if (props.previousWinner === "Tie") {
//     prompt = "Tie";
//   } else if (props.previousWinner === null) {
//     prompt = "Start";
//   } else {
//     prompt = "Lose";
//   }
    return (
       
        <div>
            
            <div className={`ChoiceCard ${className}`}>
              
            <h1>{props.title}</h1>
            <img className="photo" src={props.choice.url} alt={props.title}/>
            <h3>{className}</h3>

            
            
        </div>
        <div className="col-md-4 themed-grid-col">
        <h3>History</h3>
        <ul>
           
   
         </ul>
        </div>

        </div>
    )
}
