import { FC, useEffect, useRef, useState } from "react";

const HookUseRef: FC = () => {
  const [background, setBackground] = useState("");
  const [padding, setPadding] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current) {
      console.log(divRef.current?.style.backgroundColor);
      setBackground(divRef.current?.style.backgroundColor);
      setPadding(divRef.current?.style.padding);
    }
  }, [divRef]);

  return (
    <div>
      <div ref={divRef} style={{ backgroundColor: "#b76262", padding: "24px" }}>
        <p>
          <b>Цвет фона данного элемента: </b>
          {background || null}
        </p>
        <p>
          <b>Внутренние отступы: </b>
          {padding || null}
        </p>
      </div>
      <div>
        <h3>Описание:</h3>
        <div>
          useRef - это хук в React, который предоставляет ссылку на VDOM-элемент
          или сохраняет значение, которое сохраняется между рендерами
          компонента.
        </div>
        <h3>Типизация:</h3>
        <pre>const inputRef = useRef&lt;HTMLInputElement&gt;(null)</pre>
        <p>в JSX разметке:</p>
        <pre>
          &lt;input type="text" ref={"{"}inputRef{"}"} /&gt;
        </pre>
      </div>
      <div style={{ maxWidth: "70%", margin: "12px auto" }}>
        <h3>Практическое применение:</h3>
        <div>
          <b>
            1. Сохранение данных между рендерами:
            <br />
          </b>
          Создание ссылок на DOM-элементы: Вы можете использовать useRef для
          создания ссылок на DOM-элементы. Это особенно полезно, если вам нужно
          получить доступ к элементу DOM, например, для установки фокуса,
          измерения размеров или добавления/удаления классов.
        </div>
        <img src="/images/useref-practice-1.jpg" alt="useRef Example 1" />
        <div>
          <b>
            2. Сохранение данных между рендерами:
            <br />
          </b>
          Вы можете использовать useRef для сохранения данных, которые не
          вызывают перерисовку компонента при их изменении. Значение внутри
          useRef будет сохраняться между рендерами, но изменение этого значения
          не вызовет повторный рендер компонента. Пример:
        </div>
        <img src="/images/useref-practice-2.jpg" alt="useRef Example 2" />
        <div>
          <b>
            3. Передача изменяемого значения в useEffect:
            <br />
          </b>
          Иногда вам может потребоваться передать изменяемое значение внутри
          useEffect, чтобы отслеживать его изменения между рендерами. В этом
          случае, вы можете использовать свойство .current объекта, который
          возвращает useRef. Пример:
        </div>
        <img src="/images/useref-practice-3.jpg" alt="useRef Example 3" />
      </div>
    </div>
  );
};

export default HookUseRef;
