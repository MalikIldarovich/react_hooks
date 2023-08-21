import { ChangeEvent, FC, useState } from "react";

const HookUseState: FC = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <div>
        {" "}
        <b>Value:</b> {value}
      </div>
      <div>
        <h3>Описание:</h3>
        <div>Данный хук возвращает нам tuple (Кортеж) - из 2-х элементов.</div>
        <div>
          1. Текущее состояние, 2. Функция для работы с состоянием и как правило
          его изменения.
        </div>
        <div>
          В качестве аргумента в хук мы должны передать дефолтное значение. -
          useState(defaultValue)
        </div>
        <div>
          Для получения предыдущего состояния мы должны передать в setState() не
          значение, а callback:
          <pre>
            setState(prev =&gt; {"{ "}...prev{" }"})
          </pre>
        </div>
        <h3>Типизация:</h3>
        <div>
          Она может принять дженерик тип{" "}
          <pre>
            useState<i>&lt;IData&gt;</i>
            (defaultValue)
          </pre>
        </div>
        <div>
          Для примитивов указания типов не является обязательным: boolean,
          string, number... и т.д. он определяет автоматом.
        </div>
        <div>
          Если мы хотим типизировать в качестве передаваемых пропсов то так:
          <pre>
            interface MyComponentProps {"{ "}
            <br />
            value: string;
            <br /> setValue: Dispatch&lt;SetStateAction&lt;string&gt;&gt;;
            <br />
            {" }"}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HookUseState;
