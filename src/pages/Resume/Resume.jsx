import React from "react";
import { FaBookOpenReader, FaBriefcase, FaTrophy } from "react-icons/fa6";
import TimelineItem from "./timeline-item";
import SkillItem from "./skill-item";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookOpenReader />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ul className="timeline-list">
          <TimelineItem
            title="B.E. in Computer Science (AI & ML)"
            date="2021 - 2024"
            description="Saraswati college of Engineering Kharghar, Navi Mumbai"
          />
          <TimelineItem
            title="Diploma in Computer Engineering "
            date="2018 - 2021"
            description="M. H. Saboo Siddik Polytechnic, Byculla,  Mumbai"
          />
        </ul>
      </div>

      {/* Work experience */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBriefcase />
          </div>

          <h3 className="h3">Work experience</h3>
        </div>

        <ul className="timeline-list">
          <TimelineItem
            title="Python Intern"
            company="Discover Technologies"
            date="06/2020 - 07/2020"
            description="Completed internship focused on Python programming,
              gaining hands-on experience developing and implementing
              various projects. Collaborated with a team to solve real
             world problems using Python and developed skills in
              problem-solving, code optimization, and data manipulation."
          />
          <TimelineItem
            title="Data Science with Machine Learning and
              Python"
            company="Technical Coding Research Innovation "
            date="12/2022 - 03/2023"
            description="Successfully completed internship program with a focus on data science, machine learning, and Python. Acquired practical knowledge and experience in data pre-processing, exploratory data analysis, machine learning algorithms, and model evaluation. Worked on projects involving data analysis, predictive modelling, and feature engineering. "
          />
        </ul>
      </div>

      {/* Achivements */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaTrophy />
          </div>

          <h3 className="h3">Achievements</h3>
        </div>

        <ul className="timeline-list">
          <TimelineItem
            title="M.H. Saboo Siddik College of Engineering"
            subtitle="Hands-on Training and Workshop on Python"
            date="August 2023"
            description=" Conducted a successful hands-on training and workshop on Python for students, sharing valuable insights and expertise."
          />
          <TimelineItem
            title="Participated in National Level Hackathon"
            subtitle="Amity School of Engineering and Technology"
            date="12/2023 - 12/2023"
            description=" Participated in National Level Hackathon 'NIRMAN' held at Amity
            School of Engineering and Technology, on 14th to 16th February 2023."
          />
          <TimelineItem
            title="Online Hackathon"
            subtitle="Fastest Coder Hackathon"
            date="06/2023 - 06/2034"
            description='Participated in online Hackathon "Fastest Coder Hackathon".'
          />
        </ul>
      </div>

      {/* skill section*/}
      <div className="skill">
        <h3 className="h3 skills-title">Skills section</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Python" value={80} />
          <SkillItem title="HTML" value={75} />
          <SkillItem title="SQL" value={70} />
          <SkillItem title="MongoDB" value={70} />
          <SkillItem title="Tailwind CSS" value={70} />
          <SkillItem title="JavaScript" value={75} />
          <SkillItem title="NextJS" value={75} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
