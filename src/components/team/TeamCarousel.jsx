
import Slider from 'infinite-react-carousel';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Avatar, Typography, Link, Box, Container, Card, IconButton } from '@material-ui/core';
import TechCarouselUtil from '../content/TeamCarouselUtil';
import HeadCarouselUtil from '../content/HeadCarouselUtil';
import OutreachTeam from '../content/OutreachTeam';
import DesignTeam from '../content/DesignTeam';
// import linIcon from "../resources/icons/lin.png";
// import mailIcon from "../resources/icons/mail.png";
import "./font.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
const ueStyles = makeStyles((theme) => ({
  maincon: {
    paddingTop: '70px',
    maxWidth: '100%',
  },
  root:{
    width: '100%',
    paddingTop: '60px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'0.5%',
    marginTop: '10px',
  },
  root2:{
    marginLeft: '2%',
    marginRight:'2%',
    paddingTop:'4%',
    borderRadius:'0.5%',
    marginTop: '3%',
    marginBottom:'5%',
    height:'32%',
    backgroundColor:'#FAFAFA',
  },
  con:{
    paddingTop: '98px',
  },
  but:{
    color: '#48BACA',
    fontSize:'150%',
  },
  avatar: {
    height: 'inherit',
    width: '50%',
  },
  main: {
    marginTop: "60px",
  },
  img: {
    margin: '40px',
  },
  name:{
    marginTop:'5%',
    
  },
  tech:{
    color:'#1e1e1e',
    marginTop:'6%',
  },

  pos:{
    marginTop:'1%',
  },
  avatar2:{
    width:'5%',
    height:'5%',
  },
  icons:{
  backgroundColor:'#1e1e1e',
  },
  head:{
    color:'#1e1e1e',
  },

  container: {
    paddingLeft: '30px',
    paddingRight: '30px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '15px',
      paddingRight: '15px',
    },

  }
}));
function TeamCarousel() {

    const classes=ueStyles();
    return (
      <>
      {/* <Container className={classes.con}><center> <Box letterSpacing={5.5}> <Typography  className={classes.but}><h1>TEAM</h1></Typography></Box></center></Container> */}
      <Container className={classes.maincon}>
          <center>
              <Paper className={classes.root}>
              <Box letterSpacing={4}><Typography className={classes.tech}><h2>OVERALL HEADS</h2></Typography></Box>
                  <Paper className={classes.root2}>
                  {/* <Slider className={classes.slider} swipe={false} duration={10} autoplay={false} autoplaySpeed={8000}>*/}
                  <div style={{
                    justifyContent:"space-between"
                  }}>
                  { 
                      HeadCarouselUtil.map((page) => (
                          <div>
                              <Grid container spacing={1} className={classes.container}>
                                  {page.map((member) => (
                                      <Grid item xs={12}  md={6}>
                                      <center>
                                        <Typography>
                                          <Avatar src={member.img} className={classes.avatar} variant='circular'  />
                                          </Typography></center>
                                          <center>
                                          <Box letterSpacing={1.5}>
                                          <Typography className={classes.name}>
                                              {member.name}</Typography></Box></center>
                                              <center>
                                              <Box letterSpacing={0.5}><Typography className={classes.pos}>{member.pos}</Typography>
                                              </Box></center>

                                              <IconButton color='inherit' aria-label="linkedin" onClick={() => window.open(member.lin)}>
                                                <LinkedInIcon />
                                              </IconButton>


                                              <IconButton color='inherit' aria-label="mail" href={member.mail}>
                                                <MailIcon />
                                              </IconButton>
                                          </Grid>

                                  ))}
                              </Grid>
                          </div>
                      ))

                                  }
                  </div>
                  
                  {/* </Slider> */}
                  </Paper>
                  <Box letterSpacing={4}><Typography className={classes.tech}><h2>TECHNICAL TEAM</h2></Typography></Box>
                  <Paper className={classes.root2}>
                  <Slider className={classes.slider} swipe={false} duration={10} autoplay={false} autoplaySpeed={8000}>
                  {
                      TechCarouselUtil.map((page) => (
                          <div>
                              <Grid container spacing={1} className={classes.container}>
                                  {page.map((member) => (
                                      <Grid item xs={12}  md={4}>
                                      <center>
                                        <Typography>
                                          <Avatar src={member.img} className={classes.avatar} variant='circular'  />
                                          </Typography></center>
                                          <center>
                                          <Box letterSpacing={1.5}>
                                          <Typography className={classes.name}>
                                              {member.name}</Typography></Box></center>
                                              <center>
                                              <Box letterSpacing={0.5}><Typography className={classes.pos}>{member.pos}</Typography>
                                              </Box></center>

                                              <IconButton color='inherit' aria-label="linkedin" onClick={() => window.open(member.lin)}>
                                                <LinkedInIcon />
                                              </IconButton>


                                              <IconButton color='inherit' aria-label="mail" href={member.mail}>
                                                <MailIcon />
                                              </IconButton>
                                          </Grid>

                                  ))}
                              </Grid>
                          </div>
                      ))

                  }
                  </Slider>
                  </Paper>
                  <Box letterSpacing={4}><Typography className={classes.tech}><h2>OPERATIONS AND SPONSORSHIP TEAM</h2></Typography></Box>
                  <Paper className={classes.root2}>
                  <Slider className={classes.slider} swipe={false} duration={10} autoplay={false} autoplaySpeed={8000}>
                  {
                      OutreachTeam.map((page) => (
                          <div>
                              <Grid container spacing={2} className={classes.container}>
                                  {page.map((member) => (

                                      <Grid item xs={12}  md={4}>
                                      <center>
                                        <Typography>
                                          <Avatar src={member.img} className={classes.avatar} variant='circular'  />
                                          </Typography></center>
                                          <center>
                                          <Box letterSpacing={1.5}>
                                          <Typography className={classes.name}>
                                              {member.name}</Typography></Box></center>
                                              <center>
                                              <Box letterSpacing={0.5}><Typography className={classes.pos}>{member.pos}</Typography>
                                              </Box></center>

                                              <IconButton color='inherit' aria-label="linkedin" onClick={() => window.open(member.lin)}>
                                                <LinkedInIcon />
                                              </IconButton>
                                              <IconButton color='inherit' aria-label="mail" href={member.mail}>
                                                <MailIcon />
                                              </IconButton>
                                          </Grid>

                                  ))}
                              </Grid>
                          </div>
                      ))

                  }
                  </Slider>
                  </Paper>
                  {/* <Box letterSpacing={4}><Typography className={classes.tech}><h2>DESIGN AND CONTENT TEAM</h2></Typography></Box>
                  <Paper className={classes.root2}>
                  <Slider className={classes.slider} swipe={false} duration={10} autoplay={false} autoplaySpeed={8000}>
                  {
                      DesignTeam.map((page) => (
                          <div>
                              <Grid container spacing={2} className={classes.container}>
                                  {page.map((member) => (

                                      <Grid item xs={12}  md={4}>
                                      <center>
                                        <Typography>
                                          <Avatar src={member.img} className={classes.avatar} variant='circular'/>
                                          </Typography></center>
                                          <center>
                                          <Box letterSpacing={1.5}>
                                          <Typography className={classes.name}>
                                              {member.name}</Typography></Box></center>
                                              <center>
                                              <Box letterSpacing={0.5}><Typography className={classes.pos}>{member.pos}</Typography>
                                              </Box></center>

                                              <IconButton color='inherit' aria-label="linkedin" onClick={() => window.open(member.lin)}>
                                                <LinkedInIcon />
                                              </IconButton>


                                              <IconButton color='inherit' aria-label="mail" href={member.mail}>
                                                <MailIcon />
                                              </IconButton>
                                          </Grid>

                                  ))}
                              </Grid>
                          </div>
                      ))

                  }
                  </Slider>
                  </Paper> */}
              </Paper>
          </center>

      </Container>
      </>

    )
}

export default TeamCarousel;
