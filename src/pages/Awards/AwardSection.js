import awardsData from "./awardsData.json";
import ContactCard from "../../components/ContactCard";

export default function AwardSection({ currentYear, currentTab }) {
  return (
    <>
      <h2 className="sectionHeading"> Awards </h2>
      <div className="cards" data-aos="zoom-in-up">
        {currentTab !== "specialRecog"
          ? awardsData[currentYear][currentTab]["awards"]?.map(
              (winner, index) => (
                <ContactCard
                  key={index}
                  name={winner.Name}
                  imgSrc={`data/media/images/awards/${winner.Image}`}
                  designation={winner.Award}
                  email={winner.email}
                  facebook={winner.facebook}
                  linkedin={winner.linkedin}
                />
              )
            )
          : awardsData[currentYear][currentTab].map((winner, index) => (
              <ContactCard
                key={index}
                name={winner.Name}
                imgSrc={`data/media/images/awards/${winner.Image}`}
                designation={winner.Award}
                email={winner.email}
                facebook={winner.facebook}
                linkedin={winner.linkedin}
              />
            ))}
      </div>
    </>
  );
}
