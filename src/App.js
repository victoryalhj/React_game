
import { useState } from 'react';
import './App.css';
import Box from './component/Box';


//1.박스 2개 그리기(title,img,result)
//2.가위바위보 button 보여주기
//3.button을 클릭하면 클릭한 값이 보임-You
//4.computer는 랜덤하게 item선택이됨-computer
//5.3&4번의 결과를 가지고 누가이겼는지 승패를 나눈다
//6.승패결과에따라 테두리색이 바뀐다(win-green,lose-red,draw-black)
//컴퓨터 결과보이게하기 


//사진을 저장할수 있는 객체아이템
const choice = {
  rock:{
    name: "Rock",
    image: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-24.jpg"
  },
  scissors:{
    name: "Scissors",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20210705223721/scissor.jpeg"
  },
  paper:{
    name: "Paper",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  //computer state
  const [computerSelect,setComputerSelect] = useState(null)
  //win&lose
  const [result,setResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]) 
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice));
    };

    const judgement=(user,computer)=> {
      console.log("user",user,"computer",computer)

      //game logic
      //user==computer draw
      //lose rock < paper scissor < rock paper < scissor
      //win rock > scissor scissor > paper paper > rock 
      if(user.name == computer.name) {
        return "draw"
      }else if (user.name == "Rock")return computer.name=="Scissors"?"win":"lose";
      else if (user.name =="Scissors")return computer.name=="Parer"?"win":"lose";
      else if (user.name == "Paper")return computer.name=="Rock"?"win":"lose";
    };

    const randomChoice = () => {
      //객체 배열화
      let itemArray = Object.keys(choice);
      console.log("itemArray",itemArray)
      let randomItem = Math.floor(Math.random()*itemArray.length);
      let final = itemArray[randomItem];
      console.log("final",final)
      return choice[final];
    }


  return ( 
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
