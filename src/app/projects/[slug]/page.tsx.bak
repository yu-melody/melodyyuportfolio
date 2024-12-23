import ImageSlider from "@/app/components/Slider";
import { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface ProjectPageProps {
    params: { slug: string };
}
interface Slide {
    type: "image" | "video";
    src: string;
    caption?: string;
}

const projects = [
    {
        name: "dayloom",
        description: `
Funded by the [Northeastern Honors Propel Grant](https://honorsprogram.sites.northeastern.edu/research-and-creative-endeavors/funding-opportunities/), dayloom is a mindful routine system composed of:
- A **Swift mobile application**
- A **Raspberry Pi and IoT components**

The project integrates voice control, smart device automation, and gratitude journaling, blending technology with wellness practices while enhancing skills in:
1. Embedded systems
2. Cloud storage
3. App development

---

### Resources
- [See More Here!](https://insidious-sword-367.notion.site/dayloom-1321333a0d39808a81eec02f097b190d?pvs=32)
- [GitHub Repository](https://github.com/yu-melody/dayloom)
        `,
        date: "In Progress",
        slug: "dayloom",
        link: "https://github.com/yu-melody/dayloom",
        images: [
            { type: "image", src: "/images/dayloom2.jpeg", caption: "An AI-generated image, but this is the vision for the final product" },
            { type: "image", src: "/images/dayloom3.jpeg", caption: "System Architecture Diagram" },
            { type: "image", src: "/images/dayloom1.png", caption: "Dayloom Logo" },
        ],
    },
    {
        name: "Rallify",
        description: `
Rallify is a full-stack application designed to empower political protest movements by fostering community, facilitating organization, and providing data-driven insights for effective action. The platform offers a suite of tools tailored to the unique needs of activists, journalists, and politicians, addressing critical challenges in coordination, communication, and strategic planning.

---

This project was created for **CS4973**, a project-based class taken abroad in Leuven, Belgium.

### Resources
- [Presentation Slides](https://www.canva.com/design/DAGHr9sBBb8/Dwsu94wwmwl9ciVbCAOmkQ/edit)
- [Blog Post](https://yu-melody.github.io/belgium-doc-tracker/team_posts/phase4post/)
- [GitHub Repository](https://github.com/yu-melody/belgium-doc-tracker)
    `,
        date: "June 2024",
        slug: "rallify",
        link: "https://github.com/yu-melody/rallify",
        images: [
            { type: "video", src: "/images/rallifydemo.mp4", caption: "Demo of Rallify" },
            { type: "image", src: "/images/rallify1.jpeg", caption: "Rallify Database Schema" },
        ],
    },

    {
        name: "3Stones",
        description: `
3 Stones is a mobile app where developers crowdfund real estate projects by posting them for investors. These developers raise the necessary capital to develop properties, while investors can explore the listings, contribute small amounts, and build a real estate portfolio to earn profits when the properties are sold.

---

### Resources
- [GitHub Repository](https://github.com/GenerateNU/3stones)
    `,
        date: "December 2024",
        slug: "3stones",
        link: "https://github.com/GenerateNU/3stones",
        images: [
            { type: "image", src: "/images/3stones1.jpeg", caption: "3Stones" },
            { type: "image", src: "/images/3stones3.png", caption: "3Stones Features - I built out the onboarding and authentication flows" },
            { type: "image", src: "/images/3stones2.jpg", caption: "3Stones Team at Showcase" },
        ],
    },
    {
        name: "Student Activity Calendar",
        description: `
The Student Activity Calendar is an organization and event marketing platform that aims to drive engagement within Northeastern’s club ecosystem by targeting the problem of decentralization. As an SGA-backed project, it will effectively replace the use of NUEngage as the university’s primary solution for online campus engagement advertising

---

### Resources
- [GitHub Repository](https://github.com/GenerateNU/sac)
    `,
        date: "May 2024",
        slug: "sac",
        link: "https://github.com/GenerateNU/sac",
        images: [
            { type: "image", src: "/images/sac1.png", caption: "Student Activity Calendar" },
            { type: "image", src: "/images/sac2.png", caption: "Student Activity Calendar" },
        ],
    },
    {
        name: "Legacy",
        description: `
An app aimed to help millennials complete their end-of-life planning.

---

### Resources
- [See More Here](https://www.legacytheapp.com/)
    `,
        date: "December 2023",
        slug: "legacy",
        link: "https://www.legacytheapp.com/",
        images: [
            { type: "image", src: "/images/legacy1.png", caption: "Legacy" },
            { type: "image", src: "/images/legacy2.jpg", caption: "Legacy" },
        ],
    },
    {
        name: "Barn",
        description: `
My proudest accomplishment to date, I constructed a mini barn in my backyard as a COVID project. It taught me about product management, construction, and kept me busy during the pandemic.

---

### Resources
- [See the full journey here](https://insidious-sword-367.notion.site/Mini-Barn-13d1333a0d3980849d0bc99e8a050884)
    `,        date: "October 2020",
        slug: "barn",
        link: "https://insidious-sword-367.notion.site/Mini-Barn-13d1333a0d3980849d0bc99e8a050884",
        images: [
            { type: "image", src: "/images/barn1.png", caption: "The completed effort" },
            { type: "image", src: "/images/barn2.jpg", caption: "The first iteration: the original plan was to build something fairly smaller" },
            { type: "image", src: "/images/barn3.jpeg", caption: "Oh no, there's some trees in the way!" },
            { type: "image", src: "/images/barn4.jpg", caption: "Trees cut, foundation laid, and floor built." },
            { type: "image", src: "/images/barn5.png", caption: "Learning how to use power tools for the first time" },
            { type: "image", src: "/images/barn6.jpg", caption: "Walls up and adding the gambrel trusses" },
            { type: "image", src: "/images/barn7.jpg", caption: "Roof Sheeted!" },
            { type: "image", src: "/images/barn8.jpg", caption: "Added a loft for cozy hangouts" },
            { type: "image", src: "/images/barn9.jpeg", caption: "Final touches - paint!" },
        ],
    },
];

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((proj) => proj.slug === params.slug);
    return { title: project?.name || "Project" };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((proj) => proj.slug === params.slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            {/* Header with Home Button */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h1>{project.name}</h1>
                <Link href="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                    Home
                </Link>
            </div>
            <p>
                <strong>Date:</strong> {project.date}
            </p>
            <ImageSlider images={project.images as Slide[]} />
            {/* Render description using ReactMarkdown */}
            <div style={{ marginTop: "1.5rem" }}>
                <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
        </div>
    );
}