import React from "react";
// import UnccImg from "../../assets/IBM.png";
// import NcrImg from "../../assets/zestmoney.png";
import KyndrylImg from "../../assets/Kyndryllogo.png"
// import TMobile from "../../assets/T-Mobile.png"
import UpworkImg from "../../assets/Upworklogo.png"
const Companies = () => {
  return (
    <>


      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Oct 2024 - Present</p>
            <h3 className="experience__title">Software Engineer – Backend & Application Modernization</h3>
          </div>
          <div className="experience__image">
            <img src={UpworkImg} alt="Upwork logo" />
            <p className="experience__freelancer">Freelancer</p>
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Full-Stack AI Engineer with strong expertise in building AI-powered web applications, automation, and scalable cloud solutions. With extensive experience in both frontend (React, Next.js, TypeScript) and backend (Python, Node.js, Java), I bring end-to-end development skills and deep knowledge of deploying secure, high performance systems in AWS.  <br />
            ● I specialize in designing and developing: AI agents and conversational tools (including voice agents), retrieval-augmented generation, custom GPT/LLM integrations, multi-agent systems, automation workflows, and complex API & cloud integrations. I love solving real business problems for SMEs across industries by leveraging the latest AI, devops and automation technologies.  <br />
          </p>
        </div>
      </div>


      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Feb 2021 - Jan 2024</p>
            <h3 className="experience__title">Software Engineer – Backend & Application Modernization</h3>
          </div>
          <div className="experience__image">
            <img src={KyndrylImg} alt="Kyndryl logo" />
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Designed and deployed over four microservices for Co-operative Bank using Spring Boot and GraphQL, reducing API payload size by 40% and improving response times by 35% across key customer-facing platforms. <br />
            ● Implemented GraphQL APIs to enable efficient data querying and minimize response payloads, improving both client responsiveness and developer agility. <br />
            ● Collaborated on the migration of legacy banking systems to containerized, cloud-native architectures using Docker and Kubernetes, cutting deployment times and enabling seamless CI/CD pipelines. <br />
            ● Implemented Apache Kafka for asynchronous, event-driven processing, ensuring in-order message delivery and improving throughput for high-volume financial transactions. <br />
            ● Optimized data management using Spring Data JPA with SQL and NoSQL databases, designing scalable models, managing transactions, and improving query performance across multiple services. <br />
            ● Built CI/CD pipelines using Jenkins and GitLab CI to automate testing, security scans, and container deployments, improving release frequency and reducing manual deployment effort by 50%. <br />
            ● Designed centralized logging and distributed tracing using ELK Stack and OpenTelemetry, cutting issue diagnosis time from hours to minutes and improving system observability. <br />
            ● Drove team-wide code reviews and knowledge sessions that improved code quality, reduced tech debt, and brought consistency to how microservices were developed. <br />
          </p>
        </div>
      </div>
      {/* 
      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Feb 2021 - Jan 2023</p>
            <h3 className="experience__title">Software Engineer – Backend Development</h3>
          </div>
          <div className="experience__image">
            <img src={UnccImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
          ● Contributed to the development and enhancement of IBM Spectrum LSF, a high-performance workload
management platform used to schedule and manage distributed computing jobs in hybrid cloud environments.  <br/>
          ● Designed and maintained microservices-based backend systems using Spring Boot, enabling modular, scalable
support for complex job orchestration and cluster scheduling.  <br/>
          ● Built RESTful APIs for job submission, tracking, and resource allocation, ensuring secure and efficient
communication between LSF components and external applications. Improved provisioning speed by 40%, reduced debugging time by 50%.  <br/>
          ● Developed backend logic to interface with IBM Cloud resources, automating instance provisioning, configuration,
and workload distribution across clusters.  <br/>
          ● Worked on cloud-native integrations including containerization support (Docker) and service deployment on IBM
Cloud’s infrastructure, focusing on availability and system resilience.  <br/>
          ● Implemented internal tooling for job lifecycle monitoring, log aggregation, and fault tolerance, helping improve
operational efficiency and debugging turnaround times. <br/>
          ● Collaborated closely with QA and DevOps teams to support CI/CD pipelines, unit testing, and performance
benchmarking for backend systems under heavy compute loads. <br/>
          </p>
        </div>
      </div> */}

      {/* <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Nov 2020 - Feb 2021</p>
            <h3 className="experience__title">Software Engineer</h3>
          </div>
          <div className="experience__image">
            <img src={NcrImg} alt="Experience Image" />
          </div>
        </div>
        <div className="experience__box">
          <p>
          ● Engineered scalable and secure RESTful APIs using Spring Boot, powering critical backend services for the
ZestMoney EMI platform across payments, user onboarding, and transaction workflows.  <br/>
          ● Designed and optimized relational database schemas (MySQL/PostgreSQL), ensuring data integrity, query
performance, and effective indexing for large-scale user and transaction datasets.  <br/>
          ● Built and consumed GraphQL APIs to enable flexible client-side queries and reduce over-fetching of data,
improving API efficiency and front-end performance.  <br/>
          ● Integrated multiple third-party services, including payment gateways, KYC/identity providers, and notification
platforms, ensuring seamless data exchange and secure communication across systems.  <br/>
          ● Deployed backend services on AWS cloud, leveraging EC2, S3, RDS, and API Gateway, with a focus on high
availability, cost optimization, and auto-scaling.  <br/>
          ● Contributed to internal microservices frameworks adhering to ZEST compliance standards, standardizing logging,
error handling, and authentication across services.  <br/> 
          </p>
        </div>
      </div> */}

      {/* <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> May 2019 - July 2019</p>
            <h3 className="experience__title">Software Engineer Intern</h3>
          </div>
          <div className="experience__image">
            <img src={VirtusaImg} alt="Experience Image" />
          </div>
        </div> */}

      {/* <div className="experience__box">
          <p>
            ● Created a coding platform using ReactJS, NodeJS, and MySQL, with
            custom IDEs and integrated compilers, engaging over 500 users and
            fostering skill development and collaboration.
            <br />
            ● Curated a dashboard to categorize 100+ coding problems, monitored
            KPIs, and enhanced user access to focused practice exercises.
            <br />
            ● Designed custom IDEs to streamline development and accommodate
            diverse language needs.
            <br />
            ● Developed comprehensive coding performance analytics
            utilizing MDB Bootstrap Charts to facilitate data-driven
            decision-making.
          </p>
        </div>
      </div> */}

      {/* <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> February 2019 - May 2019</p>
            <h3 className="experience__title">Software Engineer Intern</h3>
          </div>
          <div className="experience__image">
            <img src={AmazonImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Designed a PHP school management web application with MySQL
            integration. Customized user-specific modules ensuring tailored
            interfaces and efficient operations.
            <br />
            ● Built a login authentication system utilizing session management,
            enhancing application security.
            <br />
            ● Deployed a notifications message box to promptly communicate
            important updates, enhancing user engagement and satisfaction.
            <br />● Designed a QR code-based attendance system, reducing
            lecturer workload by 70% and streamlining administrative processes.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Companies;
