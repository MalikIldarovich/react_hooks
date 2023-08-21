import { FC, useState, useDebugValue } from "react";

const HookUseDebugValue: FC = () => {
  const [name, setName] = useState("");
  useDebugValue(name ? "Имя есть" : "Без имени");

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <h3>Описание:</h3>
      <div>
        <b>useDebugValue</b> - это хук в React, который используется для вывода
        дополнительной отладочной информации в инструментах разработчика, таких
        как React DevTools. Основные моменты по использованию useDebugValue:
      </div>
      <h3>Синтаксис:</h3>
      <div>
        <b>useDebugValue</b> принимает два аргумента: значение и функцию для
        форматирования этого значения для отладочных целей. Пример:
      </div>
      <img
        src="/images/usedebugvalue-example-1.jpg"
        alt="useDebugValue Exmple 1"
      />
      <div>
        В этом примере, при использовании инструментов разработчика, вы увидите
        отформатированное значение рядом с хуком useCustomHook.
      </div>
      <h3>Когда использовать:</h3>
      <div>
        <b>useDebugValue</b> особенно полезен, когда вы создаете
        пользовательские хуки и хотите предоставить дополнительную информацию о
        значении, возвращаемом из хука. Это может помочь вам и другим
        разработчикам легче понимать, как работает ваш пользовательский хук.
      </div>
      <h3>Полезные дополнения:</h3>
      <div>
        Хотя useDebugValue не влияет на работу компонентов в режиме разработки,
        он может быть очень полезным инструментом для более глубокого понимания
        происходящего в ваших хуках.
      </div>
      <h3>Общий пример использования useDebugValue:</h3>
      <img
        src="/images/usedebugvalue-example-2.jpg"
        alt="useDebugValue Example 2"
      />
      <div>
        При использовании инструментов разработчика (например, React DevTools),
        вы увидите Count: "значение" рядом с хуком useCustomHook.
      </div>
    </div>
  );
};

export default HookUseDebugValue;
