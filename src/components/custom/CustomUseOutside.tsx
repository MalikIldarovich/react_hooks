import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";

type TypeOut = {
  ref: any;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

const CustomUseOutside = (initialIsVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isShow, setIsShow };
};

export default CustomUseOutside;

/** Имплементация:
 *
 * const { ref, isShow, setIsShow } = CustomUseOutside(false);
 * return (
 *    <div>
 *      {
 *         isShow && <div ref={ref}>Dialog</div>
 *      }
 *      <button onClick={() => setIsShow(true)}>Открыть</button>
 *    </div>
 * )
 */
