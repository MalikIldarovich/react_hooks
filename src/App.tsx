import logo from "./logo.svg";
import "./App.css";
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import HookUseLayoutEffect from "./components/HookLayoutEffect";
import HookUseRef from "./components/HookUseRef";
import HookUseMemo from "./components/HookUseMemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <main>
          <h1> React Hooks Lesson</h1>
          <div>
            <h2>1. useState()</h2>
            <HookUseState />
          </div>
          <div>
            <h2>2. useEffect()</h2>
            <HookUseEffect />
          </div>
          <div>
            <h2>3. useLayoutEffect()</h2>
            <HookUseLayoutEffect />
          </div>
          <div>
            <h2>4. useRef()</h2>
            <HookUseRef />
          </div>
          <div>
            <h2>5. useMemo()</h2>
            <HookUseMemo />
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
