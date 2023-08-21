import { useState, useCallback } from "react";
import Cookies from "js-cookie";

const CustomUseCookie = (name: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;

    Cookies.set(name, initialValue);
    return initialValue;
  });

  const updateCookie = useCallback(
    (newValue: any, options?: any) => {
      Cookies.set(name, newValue, options);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
};

export default CustomUseCookie;

/** Имплементация:
 *  const [value, updateCookie, deleteCookie] = CustomUseCookie("token", "")
 *
 *  return (
 *    <div>
 *      <span>Token: {value}</span>
 *      <button onClick={() => updateCookie(String(new Date()))}>
 *        Change your token
 *      </button>
 *       OR
 *      <button onClick={() => deleteCookie()}>
 *        Delete your token
 *      </button>
 *    </div>
 *  )
 */
