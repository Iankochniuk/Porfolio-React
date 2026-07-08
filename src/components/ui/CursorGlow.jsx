import { useState, useEffect } from "react";

function CursorGlow() {
  const [posicion, setPosicion] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moverMouse = (e) => {
      setPosicion({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moverMouse);

    return () => {
      window.removeEventListener("mousemove", moverMouse);
    };
  }, []);

  console.log(posicion);

  return (
    <div
      className="fixed w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"
      style={{
        left: posicion.x,
        top: posicion.y,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
}

export default CursorGlow;
