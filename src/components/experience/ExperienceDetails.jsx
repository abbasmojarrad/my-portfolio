import { BsFillPatchCheckFill } from "react-icons/bs";

const ExperienceDetails = (props) => {
  return (
    <>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>{props.text}</h4>
      </article>
    </>
  );
};

export default ExperienceDetails;
