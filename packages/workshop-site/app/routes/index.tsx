import type { LinksFunction, MetaFunction } from '@remix-run/node';
import AwsLogo from '../assets/aws-logo.svg';
import ReactIcon from '../assets/react-icon.svg';
import RemixIcon from '../assets/remix-icon.svg';
import NodejsIcon from '../assets/nodejs-icon.svg';
import Instructor from '../assets/instructor.jpeg';
import styles from '../styles/routes/index.css';

export const meta: MetaFunction = () => {
  return {
    title: 'Iot App Development with AWS'
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ];
};

export default function Index() {
  return (
    <>
      <div className="hero centered-column">
        <img height={200} width={300} src={AwsLogo} alt="AWS Logo" />

        <div className="hero-text">
          <h1>Building with Remix and Iot-App-Kit</h1>

          <p>Learn to create modern IoT applications backed by AWS.</p>
        </div>

        <div className="hero-instructor">
          <img
            height={75}
            width={75}
            src={Instructor}
            alt="Course instructor"
          />

          <div className="hero-instructor-text">
            <p>
              Taught by <a href="https://github.com/tjuranek">Thomas Juranek</a>
            </p>

            <p>
              Please <a href="mailto:thjurane@amazon.com">email me</a> with
              workshop feedback or questions.
            </p>
          </div>
        </div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--color-background)"
            fill-opacity="1"
            d="M0,0L34.3,32C68.6,64,137,128,206,149.3C274.3,171,343,149,411,128C480,107,549,85,617,74.7C685.7,64,754,64,823,58.7C891.4,53,960,43,1029,53.3C1097.1,64,1166,96,1234,96C1302.9,96,1371,64,1406,48L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="techstack centered-column">
        <hr />

        <h2>Tech Stack</h2>

        <div className="techstack-badges">
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <div className="techstack-badge">
              <img width={100} height={100} src={ReactIcon} alt="React" />
            </div>
          </a>

          <a href="https://remix.run/" target="_blank" rel="noreferrer">
            <div className="techstack-badge">
              <img width={100} height={100} src={RemixIcon} alt="Remix" />
            </div>
          </a>

          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <div className="techstack-badge">
              <img width={100} height={100} src={NodejsIcon} alt="NodeJS" />
            </div>
          </a>
        </div>
      </div>

      <div className="summary centered-column">
        <hr />

        <p>
          We'll explore the core concepts of Remix while building a full-stack
          IIoT application with AWS Iot-App-Kit.
        </p>
      </div>

      <div className="learning-objectives centered-column">
        <h2>🦄 What Will I Learn?</h2>

        <p>
          This workshop has two main learning objectives. The first section will
          focus on the fundamentals of Remix and building modern full-stack web
          apps with it. The second part will demonstrate how easy it is to
          create custom IIoT applications with AWS. Here's a quick summary:
        </p>

        <ul>
          <li>❓ Learn the what and why behind Remix</li>
          <li>🧱 Get an overview of Remix Stacks</li>
          <li>🎓 Experience the fundamentals of Remix that make it great</li>
          <li>
            📹 Get quick demos of the more powerful advanced Remix features
          </li>
          <li>🧪 Setup a performant testing suite with Jest and Playwright</li>
          <li>🏔 Create a basic IIoT app infrastructure with AWS CDK</li>
          <li>📠 Make demo models and assets with controllable mock data</li>
          <li>🌐 Connect our Remix application to the created assets</li>
        </ul>
      </div>

      <div className="test-drive centered-column">
        <h2>🚀 Test Drive</h2>

        <p>Visit the demo application and see what we'll build!</p>

        <button>Printster Live Demo</button>
      </div>

      <div className="prereqs centered-column">
        <h2>🤔 Any Prerequisites?</h2>
        <div className="panel">
          <p>
            This couse is an intermediate level and expects some experience
            JavaScript - especially with React. Prior experience with Node.js
            and deploy web applications is additionally beneficial.
          </p>
        </div>
      </div>
    </>
  );
}
