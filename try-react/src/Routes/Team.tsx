import { FC, useEffect } from "react";
import "./Team.css";
import team from "./Team.json";

type PersonCardProps = {
  name: string;
  picture: string;
  role: string;
  bio: string;
};

const PersonCard = (person: PersonCardProps) => {
  return (
    <div className="card" data-tilt>
      <div className="card-img-wrapper">
        <img src={person.picture} alt={person.role} />
      </div>
      <div className="card-info">
        <h2>{person.name}</h2>
        <h3>{person.role}</h3>
        <p>{person.bio}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export const Team: FC = () => {
  useEffect(() => {
    document.querySelector(".container")?.classList.remove("change");
  });

  return (
    <section className="team">
      <div className="section-header">
        <h1 className="section-heading">Our Team</h1>
        <div className="underline"></div>
      </div>
      <div className="cards-wrapper">
        {team.map((item, index) => (
          <PersonCard
            key={index.toString()}
            name={item.name}
            role={item.role}
            picture={item.picture}
            bio={item.bio}
          />
        ))}
      </div>
    </section>
  );
};
