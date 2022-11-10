import React, { useEffect, useState, memo } from "react";

export function useDelayUnmount(dependancy, delay = 300) {
  const [show, setShow] = useState(() => !!dependancy);
  useEffect(() => {
    let timeout;
    if (!!dependancy === false) {
      timeout = setTimeout(() => {
        setShow(false);
      }, JSON.parse(delay));
    }
    if (!!dependancy === true) {
      setShow(true);
    }
    return () => clearTimeout(timeout);
  }, [dependancy, delay]);

  return show;
}

function DelayComponent({
  component: Com,
  mount = null,
  unmount = null,
  dependancy = true,
  delay = 3000,
}) {
  const show = useDelayUnmount(dependancy, delay);

  return (
    !!show && (
      <div className={show && !dependancy ? unmount : mount}>
        <Com />
      </div>
    )
  );
}

export const Delay = memo(DelayComponent);
