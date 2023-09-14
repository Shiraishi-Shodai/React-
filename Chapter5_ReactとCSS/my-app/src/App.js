import './App.css';
import { CssModules } from './components/CssModules';
import {StyledJsx} from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from './components/Emotion';
import {TailwindCss} from './components/TailwindCss';
import {Test} from "./components/Test";

function App() {
  return (
    <>
      <CssModules/>
      <StyledJsx/>
      <StyledComponents/>
      <Emotion/>
      <TailwindCss/>
      <Test/>

      <h1 className="text-2xl text-blue-400">ReactでTailwind CSSを使用する</h1>
      <button className="bg-green-400 text-white py-2 px-4 rounded-lg mt-4">
        ボタン
      </button>
    </>
  );
}

export default App;
