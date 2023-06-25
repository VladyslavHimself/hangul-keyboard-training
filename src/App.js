import './App.scss';
import TextArea from "./components/TextArea/TextArea";
import TypingArea from "./components/TypingArea/TypingArea";
import {useState} from "react";

import mockedData from './sentences.json';

function App() {
    const [data, setData] = useState(convertStringToArray(mockedData));
    return (
    <div className="App">
      <div className="workspace">
          <TypingArea sentence={data[0]} setSentence={setData} />
          <TextArea text={data}  />
      </div>
    </div>
  );
}


function convertStringToArray(string) {
    return string.split(". ");
}



export default App;
