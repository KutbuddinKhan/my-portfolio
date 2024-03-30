import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filterPorjects, setFilterPorjects] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilterPorjects(data);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilterPorjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );

      setFilterPorjects(filtered)
    }
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* filter buttons */}
      <ul className="filter-list">
        {["All", "Web design", "Applications", "Web development"].map(
          (category) => (
            <li key={category} className="filter-item">
              <button
                onClick={() => handleFilter(category)}
                data-filter-btn
                className={category === selectedCategory ? "active" : ""}
              >
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Show protfolio data */}
      <section className="projects">
        <ul className="project-list">
          {filterPorjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt="project image" loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
