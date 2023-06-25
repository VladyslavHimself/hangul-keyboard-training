import './App.scss';
import TextArea from "./components/TextArea/TextArea";
import TypingArea from "./components/TypingArea/TypingArea";
import {useState} from "react";

import mockedData from './sentences.json';

const processedData = mockedData;

function App() {
    const [data] = useState(mockedData);

    return (
    <div className="App">
      <div className="workspace">
          <TypingArea sentence={data} />
          <TextArea text={data}  />
      </div>
    </div>
  );
}


function convertStringToArray(string) {
    const maxLength = 65;
    const stringArray = [];

    while (string.length > 0) {
        stringArray.push(string.substring(0, maxLength));
        string = string.substring(maxLength);
    }

    return stringArray;
}



export default App;
