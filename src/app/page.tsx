"use client";
import TopRightLinks from "./components/TopRightLinks";
import Image from "next/image";

// Marks this file as a Client Component

type Project = {
  name: string;
  description: string;
  date: string;
  slug: string;
  link: string;
};

export default function Home() {
  const projects: Project[] = [
    {
      name: "dayloom",
      description: "A personal assistant system that integrates hardware, cloud, and software to streamline routines.",
      date: "In Progress",
      slug: "dayloom",
      link: "https://github.com/yu-melody/dayloom",
    },
    {
      name: "Rallify",
      description: "An app designed to organize and promote community rallies and events.",
      date: "June 2024",
      slug: "rallify",
      link: "https://github.com/yu-melody/rallify",
    },
    {
      name: "3Stones",
      description: "A mobile application to help everyday people invest in real estate",
      date: "December 2024",
      slug: "3stones",
        link: "https://github.com/GenerateNU/sac",
    },
    {
      name: "Student Activity Calendar",
      description: "A tool to help students organize and track campus activities.",
      date: "May 2024",
      slug: "sac",
      link: "https://github.com/GenerateNU/sac",
    },
    {
      name: "Legacy",
      description: "An app aimed to help millennials complete their end-of-life planning.",
      date: "December 2023",
      slug: "legacy",
      link: "https://www.legacytheapp.com/",
    },
    {
      name: "Barn",
      description: "Constructing an 11x11x15 mini-barn from scratch.",
      date: "October 2020",
      slug: "barn",
      link: "https://insidious-sword-367.notion.site/Mini-Barn-13d1333a0d3980849d0bc99e8a050884",
    },
  ];

  return (
    <div className="container">
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Melody Yu</h1>
        <TopRightLinks />
      </header>
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Vertically aligns the photo and text
            gap: "1.5rem", // Adds space between the photo and text
            marginBottom: "2rem", // Adds space below the section
          }}
        >
          {/* Intro Text */}
          <p style={{ margin: 0, lineHeight: "1.6", fontSize: "1rem", color: "#555" }}>
            Hey, I’m Melody! I study Computer Science and Philosophy at Northeastern University, where I explore the
            intersection of technology and humanity. I love writing clean code, product management, and figuring out what it
            means to be human. When I'm not developing software or pondering the good life, I can be found playing Bananagrams with
            friends, baking pumpkin pie, or gallivanting through the great outdoors.
          </p>
          {/* Photo */}
          <Image
            src="/melody.jpeg"
            alt="Photo of Melody"
            width={180} // Adjust the size as needed
            height={180}
            style={{
              // borderRadius: "50%", // Makes the image circular
              objectFit: "cover", // Ensures the image fits nicely
            }}
          />
        </div>
        <h2 style={{ marginTop: "2rem" }}>What I’m Doing:</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li>Leading a team of engineers and designers in the development of an accessibility-first private family-sharing app with {" "}
            <a href="https://generatenu.com/" target="_blank" rel="noopener noreferrer">
              Generate Product Development
            </a>{""}
            .
          </li>
          <li>
            Researching intellectual humility on Reddit with{" "}
            <a href="https://www.pluralconnections.org/" target="_blank" rel="noopener noreferrer">
              Plural Connections Group
            </a>{""}
            .
          </li>
          <li>
            Designing and building {" "}
            <a href="https://insidious-sword-367.notion.site/dayloom-1321333a0d39808a81eec02f097b190d" target="_blank" rel="noopener noreferrer">
              dayloom</a>{""}
            , an automated embedded system to streamline my morning and evening routines.
          </li>
          <li>Organizing {" "}
            <a href="https://carsondang.com/31823-csds-renew-retreat" target="_blank" rel="noopener noreferrer">
              Northeastern’s annual interfaith retreat</a> for the {" "}
            <a href="https://spirituallife.northeastern.edu/" target="_blank" rel="noopener noreferrer">
              Center for Spirituality, Dialogue, and Service
            </a>{""}
            .
          </li>
          <li>
            Planning fun events (like gelato-eating) for 25 first-year {" "}
            <a
              href="https://honorsprogram.sites.northeastern.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Northeastern Honors
            </a>{" "}
            students.
          </li>
          <li>
            Collaborating with{" "}
            <a
              href="https://www.veritas.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veritas Forum
            </a>{" "}
            to plan a forum themed on human dignity.
          </li>
        </ul>

        <h2 style={{ marginTop: "2rem" }}>What I’ve Done:</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li>
            Engineered software solutions for the multilingual name-matching team at{" "}
            <a href="https://www.babelstreet.com/" target="_blank" rel="noopener noreferrer">
              Babel Street
            </a>.
          </li>
          <li>
            Co-authored an{" "}
            <a
              href="https://aclanthology.org/2024.emnlp-main.327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EMNLP-accepted paper
            </a>{" "}
            on computational models for intellectual humility.
          </li>
          <li>
            Worked as a camp counselor in rural Vermont serving Boston youth with{" "}
            <a href="https://www.evkids.org/our-impact/programs/camp.html" target="_blank" rel="noopener noreferrer">
              EVKids
            </a>.
          </li>
          <li>
            Studied data + software in{" "}
            <a
              href="https://www.khoury.northeastern.edu/pastries-and-projects-khoury-undergrads-study-data-and-software-in-belgium/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leuven, Belgium
            </a>.
          </li>
          <li>
            Hiked in{" "}
            <a
              href="https://www.visitluxembourg.com/tour/traumschleife-schengen-grenzenlos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luxembourg, Germany, and France
            </a>{" "}
            (all in one hike), Switzerland, Italy, Spain, New York, New Hampshire, Maine, and Vermont.
          </li>
          <li>
            Built a{" "}
            <a
              href="https://insidious-sword-367.notion.site/Mini-Barn-13d1333a0d3980849d0bc99e8a050884"
              target="_blank"
              rel="noopener noreferrer"
            >
              barn
            </a>{" "}
            (my proudest accomplishment to date).
          </li>
        </ul>

      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              // key={project.slug}
              // href={`/projects/${project.slug}`} // Point to the dynamic route
              style={{
                display: "block",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                textDecoration: "none",
                color: "black",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget.style.transform = "scale(1.02)"),
                  (e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)");
              }}
              onMouseOut={(e) => {
                (e.currentTarget.style.transform = "scale(1)"),
                  (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)");
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>{project.name}</h3>
              <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#555" }}>{project.description}</p>
              <p style={{ margin: "0", fontSize: "0.8rem", color: "#999" }}>{project.date}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
