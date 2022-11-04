import { FC, useEffect } from "react";

export const Home: FC = () => {
  
  useEffect(()=> {
    document.querySelector(".container")?.classList.remove("change");
  });

  return (
    <header className="header">
      <div className="img-wrapper">
        <img src="images/bg.jpg" alt="" />
      </div>
      <div className="banner">
        <h1>Architecture & Interior Design</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Discover now</button>
      </div>
    </header>
  );
};
