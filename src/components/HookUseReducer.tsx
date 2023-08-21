import { FC, useReducer } from "react";
import { initialState, reducer } from "./reducer/reducer";

const HookUseReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 15,
        }}
      >
        {state.map((todo) => (
          <button
            key={todo.name}
            style={{ display: "flex", alignItems: "center", gap: 15 }}
            onClick={() =>
              dispatch({
                type: !todo.isCompleted ? "COMPLETE" : "UNCOMPLETE",
                payload: todo.name,
              })
            }
          >
            <div
              style={{
                backgroundColor: todo.isCompleted ? "green" : "gray",
                width: 32,
                height: 32,
              }}
            />
            <div>{todo.name}</div>
          </button>
        ))}
      </div>
      <h3>Определение</h3>
      <div>
        useReducer - это хук в React, который позволяет управлять состоянием
        компонента с помощью редюсера, аналогично тому, как это делается с
        использованием Redux. Он предоставляет более сложное и гибкое управление
        состоянием, чем useState, особенно при наличии сложной логики изменения
        состояния.
      </div>
      <h3>Редюсер (reducer):</h3>
      <div>
        Редюсер - это функция, которая принимает текущее состояние и действие
        (action), а затем возвращает новое состояние. Редюсер должен быть чистой
        функцией без побочных эффектов. Такая же концепция используется и в
        Redux. Пример редюсера:
      </div>
      <img src="/images/usereducer-example-1.jpg" alt="useReducer Example 1" />
      <h3>Синтаксис</h3>
      <div>
        useReducer принимает редюсер и начальное состояние в качестве аргументов
        и возвращает текущее состояние и функцию для диспетчеризации действий
        (dispatch). Диспетчеризация действий вызывает редюсер и изменяет
        состояние в соответствии с логикой редюсера. Пример использования:
      </div>
      <img src="/images/usereducer-example-2.jpg" alt="useReducer Example 2" />
      <div>
        <b>Подходит для сложной логики:</b> <br />
        useReducer часто используется, когда логика изменения состояния более
        сложная и требует множества действий и возможностей.
      </div>
      <h3>Сравнение с useState:</h3>
      <div>
        Оба хука (useReducer и useState) позволяют управлять состоянием, но
        useReducer часто используется, когда у вас есть более сложные сценарии
        управления состоянием или когда вам нужна логика действий более сложная,
        чем просто инкремент и декремент. useReducer особенно полезен, когда вам
        нужно управлять состоянием, которое зависит от предыдущего состояния,
        или когда вам нужно обрабатывать множество различных действий, меняющих
        состояние компонента.
      </div>
    </div>
  );
};

export default HookUseReducer;
