import { FC, useEffect } from "react";
import "./AboutUs.css";
import services from "./AboutUs.json";

const Service = (props: any) => (
  <div className="service">
    <div className="service-header">
      <i className={props.icon}></i>
      <h3>{props.title}</h3>
    </div>
    <p className="service-text">{props.description}</p>
  </div>
);

export const AboutUs: FC = () => {
  useEffect(() => {
    document.querySelector(".container")?.classList.remove("change");
  });

  return (
    <section className="about-us">
      <div className="section-header">
        <h1 className="section-heading">About Us</h1>
        <div className="underline"></div>
      </div>
      <div className="services">
        {services.map((item, index) => (
          <Service
            key={index.toString()}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
        <div className="about-us-img-wrapper">
          <img src="images/house.png" alt="" />
        </div>
      </div>
    </section>
  );
};
