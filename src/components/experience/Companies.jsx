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
            <p className="experience__year"> Apr 2024 - Present</p>
            <h3 className="experience__title">Full-Stack & AI Engineer</h3>
          </div>
          <div className="experience__image">
            <img src={UpworkImg} alt="Upwork logo" />
            <p className="experience__freelancer">Freelancer</p>
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Developed Python FastAPI automation tools that routed email leads, extracted key details using AI technologies, and updated CRM systems to reduce manual work and improve client response times. <br />
            ● Developed AI-powered voice receptionist systems that answered calls, guided callers through preset steps, and captured important information for clients. The solutions used Twilio Voice, Next.js, and GPT models, helping clients automate routine call-handling responsibilities. <br />
            ● Developed a Python and OpenCV solution to count people in retail videos, automating foot-traffic reports and saving 15+ hours of manual work each week. <br />
            ● Delivered backend systems using FastAPI, PostgreSQL, and databricks-powered data-processing workflows and LLM-based tools such as LangChain and LangGraph to support automation and data-processing needs. Built clean APIs, structured database operations, and integrated model-driven logic, which accelerated client data workflows and reduced processing time. <br />
            ● Applied JPA/Hibernate and SQL/NoSQL databases for efficient data modeling, transaction management, and optimized query performance, resulting in faster query response and more reliable data handling for client applications. <br />
            ● Supported cloud enablement and performance tuning on AWS and Google Cloud using Docker, Terraform, and UNIX shell scripting, implementing auto-scaling and monitoring that maintained high availability, secure deployments, and efficient resource use across environments. <br />
            ● Collaborated with architects and cross-functional teams to define technical roadmaps, implement design patterns with FastAPI and PostgreSQL, and build CI/CD pipelines using Git and Docker, which accelerated delivery cycles and reduced release errors. <br />
          </p>
        </div>
      </div>


      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Feb 2022 - Dec 2023</p>
            <h3 className="experience__title">Software Engineer - Application Services & Cloud Deployment</h3>
          </div>
          <div className="experience__image">
            <img src={KyndrylImg} alt="Kyndryl logo" />
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Utilized Spring Boot, REST APIs, HTML and XML-based configurations, IBM Cloud, and Jenkins to develop and deploy application services, streamlining the CI/CD pipeline. <br />
            ● Contributed to the development and enhancement of IBM Spectrum LSF, a workload management platform for hybrid cloud, using Python, Perl, and Docker, which improved job scheduling speed and increased overall resource utilization. <br />
            ● Designed and maintained microservices-based backend systems using Spring Boot, enabling modular, scalable support for complex job orchestration and cluster scheduling. <br />
            ● Built RESTful APIs for job submission, tracking, and resource allocation, ensuring secure and efficient communication between LSF components and external applications. <br />
            ● Developed backend logic using Python, Git, and databricks APIs to interface with IBM Cloud resources, automating instance provisioning, configuration, and workload distribution across clusters, which cut provisioning time and reduced manual effort. <br />
            ● Developed cloud-native integrations using Docker and IBM Cloud, deploying microservices on Linux servers to boost availability and system resilience, which lowered downtime incidents. <br />
            ● Implemented internal tooling for job lifecycle monitoring, log aggregation, and fault tolerance, helping improve operational efficiency and debugging turnaround times. <br />
            ● Collaborated with QA and DevOps to maintain CI/CD pipelines in Jenkins, run unit tests with JUnit. <br />
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
