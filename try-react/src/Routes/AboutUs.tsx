import { FC, useEffect } from "react";
import "./AboutUs.css";
import house from "../images/house.png";
import services from "./AboutUs.json";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const Service: FC<ServiceProps> = (props: ServiceProps) => (
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
          <img src={house} alt="" />
        </div>
      </div>
    </section>
  );
};
