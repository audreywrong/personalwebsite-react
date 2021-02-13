import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './AboutMe.css';
import Bread from './bread.jpg';
import Concert from './concert.JPG';
import GamerGirl from './skulllogo.png';
import Hiking from './hiking.JPG';
import HobbyItem from './HobbyItem';

const AboutMe = () => (
  <div className="grid-wrapper">
    <Grid container spacing={1} justify="center">
      <Grid item xs={10} sm={6}>
        <Paper>
          <Box m={2} p={2}>
            <h1>Professional Summary</h1>
            <p>
              <p>
                Software Engineer with a proven ability to adapt to a changing, collaborative environment and deliver
                detail-oriented results.
              </p>
              <p>
                Discovering that I possess a passion for technology (that extended beyond my love of video games and
                computers since before I could fully speak) has pushed me to pursue software.
              </p>
              <p>
                Before transitioning to coding, I came from a fast-paced entrepreneurial and sales-focused career where
                I always found ways to integrate efficient, high-performing technology into my day-to-day work
                environment. I developed, controlled budget for, and executed an online multi-channel marketing strategy
                that included social media, email, and other online ad campaigns. Technologies used include Insightly
                and other CRM platforms.
              </p>
              <p>
                I believe that you are never an "expert" and that there is ALWAYS something more to learn! Collaborate,
                ask questions, and never fear trying. I'm excited and passionate about building fully responsive web
                applications that help solve complex problems!
              </p>
            </p>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper>
          <Box m={2} p={2}>
            <h1>Technical Skills</h1>
            <ul>
              <li>Languages: HTML5, CSS3, JavaScript (ES6), EcmaScript</li>
              <li>Frameworks: Node.js, Create React APP, Gatsby</li>
              <li>Libraries: React, Redux, Material-UI</li>
              <li>Tools: Git, GitHub Pages, GitHub, VS Code, Chrome Dev Tools</li>
            </ul>{' '}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper>
          <Box m={2} p={2}>
            <h1>Additional</h1>
            <ul>
              <li>Test-Driven Development</li>
              <li>Google Analytics</li>
              <li>Web and Social Media Analytics</li>
              <li>Ad Spend</li>
              <li>Strategic Digital Messaging</li>
              <li>Insightly</li>
              <li>Monday.com</li>
            </ul>
          </Box>
        </Paper>
      </Grid>
      <HobbyItem
        {...{
          imgSource: Bread,
          imgAltText: 'Bread',
          hobbyText:
            "Ever since I can remember, I have loved baking. I still have the 'Betty Crocker's Boys and Girls Cook Book' that was given to me when I was 10. My most recent baking interest has been with sourdough bread! I also enjoy making cookies and other breads. In 2020, I had the opportunity to participate in the Bakers Against Racism nationwide bake sale to raise money for a local organization helping in the fight against racism. Baking is a mix of science and art that creates something I love being able to gift to others. #bodybybread",
        }}
      />
      <HobbyItem
        {...{
          imgSource: Hiking,
          imgAltText: 'Hiking',
          hobbyText:
            "Hiking has allowed me to see some of the most incredible sights. The physical and mental work you put in to reach the reward of the view at the end is a feeling I can't get over. From craters to forest trails, I've been fortunate enough to see some incredible things. One of my most favorite hikes is Glymur Waterfall in Iceland (pictured here). It was a spontaneous hike that was hard to find, and it was also an experience that may never be replicated.",
        }}
      />
      <HobbyItem
        {...{
          imgSource: GamerGirl,
          imgAltText: 'Gamer Girl Logo',
          hobbyText:
            'GamerGirl is a brand I developed in high school and it continues to live as a side hustle/passion project. Gamer Girl is an innovative, inclusive, creative and edgy social movement for the female gaming community of today: The Gamer Girls! I sketched designs for prototypes, learned how to write a formal business plan and even made some of the prototypes! I continue to pursue this as a side passion and hope to one day leverage this concept to make a real social impact.',
        }}
      />
      <HobbyItem
        {...{
          imgSource: Concert,
          imgAltText: 'Concert',
          hobbyText:
            'From singing The Beatles with my dad in the living room to going to as many concerts as I can with my sister, music is as much a part of me as my legs and lungs are. I will listen to just about anything, but I truly love rock and metal, classical and dance music. Going to live shows with friends and family is one of my favorite things in the world!',
        }}
      />
    </Grid>
  </div>
);
export default AboutMe;
