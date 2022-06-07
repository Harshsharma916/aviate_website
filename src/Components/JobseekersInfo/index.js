import {
  JobseekerInfoCard,
  JobseekerInfoCardReverse,
} from "./JobseekerInfoCard";
import style from "./JobseekersInfo.module.scss";

const JobseekersInfo = () => {
  const jobSeekerInfo = [
    {
      img: "",
      heading: "Free training",
      info: "We train candidates on company-specific and role-specific courses that are designed in collaboration with the respective employers.",
    },
    {
      img: "",
      heading: "Mentorship & feedback",
      info: "All trained applicants undergo a mentorship and feedback session designed to help them crack interviews.",
    },
    {
      img: "",
      heading: "Quick turn around time",
      info: "Aviate predicts the companies most likely to hire you with a short 15 minute skills test. Job discovery to job offers happen within a week.",
    },
  ];

  return (
    <div className={style.jobseekersInfo}>
      <div className={style.content}>
        <p className={style.heading}>
          How <span style={{ color: "#1e3760" }}>Aviate</span> helps{" "}
          <span style={{ color: "#1e3760" }}>job-seekers</span>
        </p>
        {jobSeekerInfo.map((item, key) => {
          if (key !== 1) {
            return (
              <JobseekerInfoCard
                img={item.img}
                heading={item.heading}
                info={item.info}
              />
            );
          } else {
            return (
              <JobseekerInfoCardReverse
                img={item.img}
                heading={item.heading}
                info={item.info}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default JobseekersInfo;
