
import { useState } from 'react';
import './App.css';
import Box from './component/Box';


//1.박스 2개 그리기(title,img,result)
//2.가위바위보 button 보여주기
//3.button을 클릭하면 클릭한 값이 보임-나
//4.computer는 랜덤하게 item선택이됨-computer
//5.3&4번의 결과를 가지고 누가이겼는지 승패를 나눈다
//6.승패결과에따라 테두리색이 바뀐다(win-green,lose-red,draw-black)

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


  const play = (userChoice) => {
    setUserSelect(choice[userChoice]) 
  }
  return ( 
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer"/> */}
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
