import { FC, useMemo, useState } from "react";

const HookUseMemo: FC = () => {
  const [count, setCount] = useState(0);

  // Вычисляем факториал числа count
  const factorial = useMemo(() => {
    console.log("useMemo");
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <div>
        <p>
          Factorial of {count} is {factorial}
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <h3>Описание:</h3>
        <div>
          useMemo - это хук в React, который используется для оптимизации
          производительности путем кеширования вычисленных значений. Он
          позволяет избегать повторных вычислений при каждом рендере компонента
          и сохранять результаты вычислений между рендерами, если зависимости не
          изменились.
        </div>
        <div>
          <h3>Синтаксис:</h3>
          <div>
            useMemo принимает два аргумента: функцию, которая вычисляет
            значение, и массив зависимостей. Зависимости - это список
            переменных, изменение которых может повлиять на результат
            вычисления. Если значения зависимостей не изменились с предыдущего
            рендера, useMemo возвращает закешированное значение, иначе он
            выполняет вычисления. Пример:
          </div>
          <img src="/images/usememo-example-1.jpg" alt="useMemo Example 1" />
        </div>
      </div>
      <div style={{ maxWidth: "70%", margin: "12px auto" }}>
        <h3>Практическое применение:</h3>
        <div>
          <b>
            1. Оптимизация вычислений:
            <br />
          </b>
          useMemo используется для оптимизации производительности, когда
          вычисление значения занимает много времени и необходимо избегать
          повторных вычислений при каждом рендере.
        </div>
        <div>
          Используйте useMemo, когда вы замечаете, что вычисления производятся
          лишний раз при каждом рендере компонента, и вы можете избежать этого,
          закешировав результаты вычислений.
        </div>
        <h3>Не переусердствуйте:</h3>
        <div>
          Не всегда стоит использовать useMemo для каждого вычисления. Он имеет
          небольшую накладную стоимость, и в большинстве случаев React сам очень
          хорошо оптимизирует рендеринг.
        </div>
      </div>
    </div>
  );
};

export default HookUseMemo;
