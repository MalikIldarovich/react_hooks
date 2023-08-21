import { ChangeEvent, useState } from "react";

const CustomUseInput = (initalValue: any) => {
  const [val, setVal] = useState(initalValue);
  const bind = {
    value: val,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value),
  };
  const reset = () => {
    setVal(initalValue);
  };

  return {
    val,
    bind,
    reset,
  };
};

export default CustomUseInput;

/** Имплементация:
 *  const {val, bind, reset} = CustomUseInput("");
 *
 *  const handleSubmit = () => {
 *    console.log(val)
 *    reset()
 *  }
 *
 *  return (
 *    <div>
 *      <input type="text" {...bind} />
 *      <button onClick={handleSubmit}>
 *        Отправить
 *      </button>
 *    </div>
 *  )
 */
