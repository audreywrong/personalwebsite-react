import React from 'react';
import './AboutMe.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Bread from './bread.jpg';
import Concert from './concert.JPG';
import Hiking from './hiking.JPG';
import GamerGirl from './skulllogo.png';
import HobbyItem from './HobbyItem';

const AboutMe = () => (
  <div className="grid-wrapper">
    <Grid container spacing={1} justify="center">
      <Grid item xs={10} sm={6}>
        <Paper>
          <h1>Professional Summary</h1>
          <p>
            Software Engineer with a proven ability to adapt to a changing, collaborative environment and deliver
            detail-oriented results.
            <p>
              Before transitioning to coding, I came from a fast-paced entrepreneurial and sales-focused career where I
              always found ways to integrate efficient, high-performing technology into my day-to-day work environment.
              This included CRM's like Insightly, social media marketing, ad campaigns and e-mail campaigns.{' '}
            </p>
            <p>
              Discovering that I possess a passion for the technology itself (that extended beyond my love of video
              games and computers since before I could fully speak) has pushed me to pursue software engineering and
              develop my skills as a Front End Developer with further aspirations that I continue to work towards.
            </p>
            <p>
              I believe that you are never an "expert" and that there is ALWAYS something more to learn! Collaborate,
              ask questions and never fear trying. I'm excited and passionate about building fully responsive web
              applications that help solve complex problems!
            </p>
          </p>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper>
          <h1>Technical Skills</h1>
          <ul>
            <li>Languages: HTML5, CSS3, JavaScript (ES6), EcmaScript</li>
            <li>Frameworks: Node.js, Create React APP, Gatsby</li>
            <li>Libraries: React, Redux, Material-UI</li>
            <li>CI/CD: GIT, GitHub Pages</li>
            <li>Tools: GitHub, VS Code</li>
          </ul>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper>
          <h1>Additional</h1>
          <ul>
            <li>Google Analytics</li>
            <li>Web and Social Media Analytics</li>
            <li>Ad Spend</li>
            <li>Strategic Digital Messaging</li>
            <li>Insightly</li>
            <li>Monday.com</li>
          </ul>
        </Paper>
      </Grid>
      <HobbyItem {...{imgSource: Bread, imgAltText: 'Bread', hobbyText: 'This is some info about my hobby.'}} />
      <HobbyItem {...{imgSource: Hiking, imgAltText: 'Hiking', hobbyText: 'This is some info about my hobby.'}} />
      <HobbyItem
        {...{imgSource: GamerGirl, imgAltText: 'Gamer Girl Logo', hobbyText: 'This is some info about my hobby.'}}
      />
      <HobbyItem {...{imgSource: Concert, imgAltText: 'Concert', hobbyText: 'This is some info about my hobby.'}} />
    </Grid>
  </div>
);
export default AboutMe;
