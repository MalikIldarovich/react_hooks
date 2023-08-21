import logo from "./logo.svg";
import "./App.css";
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import HookUseLayoutEffect from "./components/HookLayoutEffect";
import HookUseRef from "./components/HookUseRef";
import HookUseMemo from "./components/HookUseMemo";
import HookUseCallback from "./components/HookUseCallback";
import HookUseDebugValue from "./components/HookUseDebugValue";
import Divider from "./components/Divider";
import HookUseReducer from "./components/HookUseReducer";
import HookUseContext from "./components/HookUseContext";

const reactHooksNavs = [
  "useState",
  "useEffect",
  "useLayoutEffect",
  "useRef",
  "useMemo",
  "useCallback",
  "useDebugValue",
  "useReducer",
  "useContext",
];
const customHooksNavs = [
  "useLocalStorage",
  "useOutside",
  "useInput",
  "useCookie",
  "useFetch",
];

const reactHooksContents = [
  {
    id: "useState",
    title: "1. useState()",
    component: HookUseState,
  },
  {
    id: "useEffect",
    title: "2. useEffect()",
    component: HookUseEffect,
  },
  {
    id: "useLayoutEffect",
    title: "3. useLayoutEffect()",
    component: HookUseLayoutEffect,
  },
  {
    id: "useRef",
    title: "4. useRef()",
    component: HookUseRef,
  },
  {
    id: "useMemo",
    title: "5. useMemo()",
    component: HookUseMemo,
  },
  {
    id: "useCallback",
    title: "6. useCallback()",
    component: HookUseCallback,
  },
  {
    id: "useDebugValue",
    title: "7. useDebugValue()",
    component: HookUseDebugValue,
  },
  {
    id: "useReducer",
    title: "8. useReducer()",
    component: HookUseReducer,
  },
  {
    id: "useContext",
    title: "9. useContext()",
    component: HookUseContext,
  },
];

const customHooksContents = [
  {
    id: "useLocalStorage",
    title: "1. useLocalStorage()",
    src: "/images/custom-uselocalstorage-example-1.jpg",
    description: (
      <div>
        Чаще всего используем в условиях SSR, где нет доступа к localStorage
      </div>
    ),
  },
  {
    id: "useOutside",
    title: "2. useOutside()",
    src: "/images/custom-useoutside-example-1.jpg",
    description: (
      <div>
        Используется для отслеживания клика вне области например модальных окон,
        навигационных панелей, боковых дашбордов, всплывающих баннеров и т.д.{" "}
        <br />
        То есть суть в том, что при клике вне области элемента закрывать этот
        элемента.
      </div>
    ),
  },
  {
    id: "useInput",
    title: "3. useInput()",
    src: "/images/custom-useinput-example-1.jpg",
    description: (
      <div>
        Используется для локонизации кода для элементов input-а.
        <br />
        1. Мы получаем необходимые нам данные: val, reset. <br />
        2. С помощью spread разварачиваем в input.
        <br />
        3. После отправки формы reset-им значение <br />
        То есть суть в том, что при клике вне области элемента закрывать этот
        элемента.
      </div>
    ),
  },
  {
    id: "useCookie",
    title: "4. useCookie()",
    src: "/images/custom-usecookie-example-1.jpg",
    description: (
      <div>
        Используется для манипуляции данными в Cookie.
        <br />
        1. Мы получаем необходимые методы и реализуем их.
        <br />
        2. В качестве нового значение передаем в метод updateCookie.
        <br />
        3. Удаляем значение с помощью deleteCookie
        <br />
        Пример с ипользованием библиотеки:
        <br />
        "npm i js-cookie"
        <br />и её типизации "npm i --save-dev @types/js-cookie"
      </div>
    ),
  },
  {
    id: "useFetch",
    title: "5. useFetch()",
    src: "/images/custom-usefetch-example-1.jpg",
    description: (
      <div>
        Используется для отправки запросов без инициализации постоянно состояний
        загрузки и ошибки.
        <br />
      </div>
    ),
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Стандартные хуки реакта</h2>
        <nav>
          {reactHooksNavs.map((nav) => (
            <a key={nav} href={"#" + nav}>
              {nav}
            </a>
          ))}
        </nav>
        <h2>Кастомные хуки реакта</h2>
        <nav>
          {customHooksNavs.map((nav) => (
            <a key={nav} href={"#" + nav}>
              {nav}
            </a>
          ))}
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Divider />
        <h1>Lesson#1 - React Hooks </h1>
        {reactHooksContents.map((hook) => (
          <>
            <div id={hook.id}>
              <h2>{hook.title}</h2>
              <hook.component />
            </div>
            <Divider />
          </>
        ))}
        <h1>Lesson#2 - Custom Hooks</h1>
        {customHooksContents.map((hook) => (
          <>
            <div id={hook.id}>
              <h2>{hook.title}</h2>
              <div>{hook.description}</div>
              <img src={hook.src} alt={hook.title} />
            </div>
            <Divider />
          </>
        ))}
      </main>
    </div>
  );
}

export default App;
