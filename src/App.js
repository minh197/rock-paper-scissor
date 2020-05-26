import React,{useState} from 'react';
import Box from './components/Box'
import './App.css';
import './components/List'
import './components/ChoiceCard'
import ChoiceCard from "./components/ChoiceCard";
const choices = {
  rock:{
    name: "rock",
    url:
      "https://manofmany.com/wp-content/uploads/2018/04/The-Rock-Tequila.jpg"
  },
   
  paper:{
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  scissors:{

   name: "scissors",
   url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  }
};






function App(props) {
  


  let [userC, setUserC] = useState({})//state
  // let  setGamePrompt;
  let [computerC,setComputerC] = useState({})//state
  let [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  let result="";
  const onplay= (userChoice) =>{
    
    
     console.log("What is user choice", userC)
    //computer choosing logic should be here
    let itemArray= Object.keys(choices)
    
    let randomNum = Math.floor(Math.random()*(itemArray.length))
    
    let itemName = itemArray[randomNum]
    let whoIsWinner =  judgement(choices[userChoice],choices[itemName])
     setUserC(choices[userChoice])
    setComputerC (choices[itemName])
    setPreviousWinner(whoIsWinner)
    
   


    
    
    
    console.log("what is computer choice", computerC)

    

  }

  const judgement = (user,computer) =>{
    let setGamePrompt='';
    if(computer.name==="rock" & user.name==="paper"){
      result="Won"
     
     

    }else if(computer.name==="paper" && user.name==="rock"){
      result ="Lose"
    
    }else if(computer.name==="scissors" && user.name==="paper"){
      result ="Lose"
    }else if(user.name ==="scissors" && computer.name==="paper"){
       result ="Won"
    }else if(computer.name === "rock" && user.name ==="scissors"){
       result = "Lose"
    }else if(user.name ==="rock" && computer.name ==="scissors"){
       result ="Won"
       
    }else if(user.name===computer.name){
      result ="Tie"
    }
    
   
    

    


    console.log("waht is result",result);

    if (result === "Won") {
      console.log("result is You")
      return "You"
    } else if (result === "Lose") {
      console.log("result is Computer")
      return "Computer"
      
    } else if(result === "Tie") {
      console.log("result is tie")
      return "Tie"
      
    }
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);
  }

  return (
    
  

  <div className="App">
  <div className="container">
    <div className="row mb-3">
      <div className="col-md-8 themed-grid-col">
      <ChoiceCard  title="You"choice={userC} previousWinner = {previousWinner}/>
      <div>
        <button onClick={()=>onplay('rock')}>Rock</button>
        <button onClick={()=>onplay('paper')}>Paper</button>
        <button onClick={()=>onplay('scissors')}>Scissor</button>
      </div>
     <ChoiceCard title="Computer"  choice={computerC} previousWinner = {previousWinner}  />
       
      </div>
      <div className="col-md-4 themed-grid-col">
  <h3>History</h3>
  <ul>
    {gameHistory.map(result => {
      console.log("final result is")
      return <li>{result}</li>;
    })}
  </ul>
</div>
    </div>
 
  </div>
</div>
  );
}


export default App;
