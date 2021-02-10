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
              Software Engineer with a proven ability to adapt to a changing, collaborative environment and deliver
              detail-oriented results.
              <p>
                Before transitioning to coding, I came from a fast-paced entrepreneurial and sales-focused career where
                I always found ways to integrate efficient, high-performing technology into my day-to-day work
                environment. This included CRM's like Insightly, social media marketing, ad campaigns and e-mail
                campaigns.{' '}
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
              <li>CI/CD: GIT, GitHub Pages</li>
              <li>Tools: GitHub, VS Code</li>
            </ul>{' '}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper>
          <Box m={2} p={2}>
            <h1>Additional</h1>
            <ul>
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
            "I have loved baking since I can remember, and I still have the 'Betty Crocker's Boys and Girls Cook Book' that was given to me when I was 10. My most recent baking interest has been with sourdough bread! I also enjoy making cookies and other breads. In 2020 I had the opportunity to participate in the Bakers Against Racism nationwise bake sale to raise money for a local organization helping in the fight against racism. Baking is a mix of science and art and I love being able to gift what I make to others. #bodybybread",
        }}
      />
      <HobbyItem
        {...{
          imgSource: Hiking,
          imgAltText: 'Hiking',
          hobbyText:
            "Hiking has allowed me to see some of the most incredible sights. The physical and mental work you put in to reach the reward of the view at the end is a feeling I can't get over. From craters to forest trails I've been fortunate enough to see some incredible things. One of my most favorite hikes is Glymur Waterfall in Iceland (pictured here). It was a spontaneous hike that was hard to find, but was an experience I don't know if I can ever replicate.",
        }}
      />
      <HobbyItem
        {...{
          imgSource: GamerGirl,
          imgAltText: 'Gamer Girl Logo',
          hobbyText:
            "GamerGirl is a brand and business concept I developed in a High School Capstone course. It is 'Gamer Girl is an innovative, inclusive, creative and edgy gaming accessory company for the female gaming community of today, or Gamer Girls!' I sketched designs for prototypes, learned how to write a formal business plan and even made some of the prototypes! Who knows?! Maybe it'll make a comeback in the future!",
        }}
      />
      <HobbyItem
        {...{
          imgSource: Concert,
          imgAltText: 'Concert',
          hobbyText:
            'From singing The Beatles with my dad in the living room to going to as many concerts as I can with my sister; music is as much a part of me as the hair on my head. I will listen to just about anything, but truly love rock and metal, classical and dance music. Going to live shows with friends and family is one of my favorite things in the world!',
        }}
      />
    </Grid>
  </div>
);
export default AboutMe;
