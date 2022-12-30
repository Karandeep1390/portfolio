import React, { useState, useEffect } from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading2 ? props.subHeading2 : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description2 ? props.description2 : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Achievements", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "Kotlin", ratingPercentage: 80 },
    { skill: "Javascript", ratingPercentage: 75 },
    { skill: "Android", ratingPercentage: 75 },
    { skill: "MySQL", ratingPercentage: 85 },
    { skill: "AWS", ratingPercentage: 75 },
    { skill: "Git Workflow", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "Crime Vigilance App",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Android app which gives the users privilege to report crimes hassle free and bring down the crime rate of India",
      subHeading: "Technologies Used: Android, Java, Kotlin, Firebase, XML",
    },
    {
      title: "City Guide",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Android app which helps users to find the nearby shops or places in the city where the user resides",
      subHeading: "Technologies Used: Android, Java, Kotlin, Firebase, XML",
    },
    {
      title: "Space App",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Android app for citizens to contribute to early detection, verification, tracking, visualization, and notification of wildfires.",
      subHeading:
        "Technologies Used: Android, Java, Kotlin, Firebase, XML, Air Visual API, Arduino IDE",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"KIET Group of Institutions - Ghaziabad"}
        subHeading={"BACHELOR OF TECHNOLOGY - Computer Science"}
        description={"CGPA: 8.9"}
        fromDate={"2018"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"St. Mary's Academy - Saharanpur"}
        subHeading={"Senior Secondary - Class 12th"}
        description={"CGPA: 9.6"}
        fromDate={"2017"}
        toDate={"2018"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Amazon"}
          subHeading={"Software Developer 1"}
          fromDate={"July,2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Working as a full stack developer in problem solve team for distribution center warehouse management system.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed the Problem solve analytics dashboard over realtime data that provides insight on problem solve ticket metrics. 
          </span>
          <br />
          <span className="resume-description-text">
            - Developed the quicksight dashboard for transportation of inventories using SQL.
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"naukri.com"}
          subHeading={"Software Engineer"}
          fromDate={"Jan,2022"}
          toDate={"July,2022"}
        />
         <div className="experience-description">
          <span className="resume-description-text">
            - Worked as a android developer in Naukri India Jobseeker Android team , developed the Recommendation Jobs in Naukri India Jobseeker App.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Amazon DCT India Hackathon - Most Innovative Idea Award"
        description=""
      />
      <ResumeHeading
        heading="Smart India Hackathon 2020 Finalist"
        description=""
      />
      <ResumeHeading
        heading="Finalist at Github Geek Code Hackathon"
        description=""
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
