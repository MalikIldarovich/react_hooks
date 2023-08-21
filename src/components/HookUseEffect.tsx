import { ChangeEvent, FC, useEffect, useState } from "react";

const HookUseEffect: FC = () => {
  const [value, setValue] = useState("beforeUseEffect");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue("afterUseEffect");
  }, []);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <div>
        {" "}
        <b>Value:</b> {value}
      </div>
      <div>
        <h3>Описание:</h3>
        <div>Данный хук вызывается в компоненте и принимает 2 аргумента.</div>
        <div>
          1. Callback - функцию, 2. массив зависимостей, или пустой массив [].
          <pre>
            useEffect(() =&gt; {"{ "}
            <br />
            ...Наш код
            <br />
            {" }"}, ["dependencies"])
          </pre>
          * Если массив зависимостей останется пустым, это значит - что все, что
          мы укажем в useEffect сработает лишь 1 раз, при первой загрузке
          компонента.
        </div>
        <h3>Практическое применение - создание каких-либо SideEffect-ов:</h3>
        <ul style={{ textAlign: "center" }}>
          <ol> - Запросы на сервер</ol>
          <ol> - setTimeOut | setInterval</ol>
          <ol> - Работа с DOM или с VDOM</ol>
          <ol> - Работа с событиями (скролл, throtling, debounce)</ol>
          <ol> - и т.д.</ol>
        </ul>
        <h3>Важно:</h3>
        <div>
          При каких либо подписках, инициализациях таймеров и в целом создании
          каких либо сайд-эффектов, необходимо чистить среду, после выполнения
          кода в useEffect
          <pre>
            useEffect(() =&gt; {"{ "}
            <br /> const interval = setInterval(() =&gt; {"{ "}
            <br />
            console.log("INTERVAL") <br />
            {" }"}, 1000) <br />
            return () =&gt; clearInterval(interval)
            <br />
            {" }"}, ["dependencies"])
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HookUseEffect;
