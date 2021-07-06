import React from "react";
import "./landingpage.scss";
import Grid from "@material-ui/core/Grid";
import ILLimg from "../Assets/iLL.svg";
import phones from "../Assets/illustration-phones.svg"
import desktop from "../Assets/illustration-laptop-desktop.svg"
const Ladingpage = () => {
  return (
    <div className="landingpage">
      <div className="navdiv">
        <div className="navbar">
          <div className="submodules">
            <h3>Blogr</h3>
            <h6>Product</h6>
            <h6>Company</h6>
            <h6>Connect</h6>
          </div>
          <div className="signup">
            <button className="btn1">Login</button>
            <button className="btn2">Signup</button>
          </div>
        </div>
        <div className="titlediv">
          <h1>A Mordern Publishing Platform</h1>
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className="regdiv">
          <button className="regbtn">Start for free</button>
          <button className="learnbtn"> Learn more</button>
        </div>
      </div>
      <div className="sec2">
        <h1>Designed for the future</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} style={{ padding: 100 }}>
          <h3>Introducing an extensible editor</h3>
          <p>
            Material Design is a design language developed by Google in 2014.
            Expanding on the "cards" that debuted in Google Now, Material Design
            uses more grid-based layouts, responsive animations and transitions,
            padding, and depth effects such as lighting and shadows. Wikipedia
            Programming languages: Angular, CSS, JavaScript, HTML, Java, Sass,
            AngularJS, Swift, Dart, Objective-C
          </p>
          <h3>Robust content managemrnt</h3>
          <p>
            Material Design is a design language developed by Google in 2014.
            Expanding on the "cards" that debuted in Google Now, Material Design
            uses more grid-based layouts, responsive animations and transitions,
            padding, and depth effects such as lighting and shadows. Wikipedia
            Programming languages: Angular, CSS, JavaScript, HTML, Java, Sass,
            AngularJS, Swift, Dart, Objective-C
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img style={{height:500, width:'100%'}} src={ILLimg} alt='pix'/>
        </Grid>
            {/* <div className='phonediv'> */}
      
            {/* </div> */}
      </Grid>
      <section className='phonediv'>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} style={{height:300}}>
            <img src={phones} style={{height:400, position: 'relative',bottom:45}} alt='phone'/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <h1>State of the Art Infrastructure</h1>
            <p>
            Material Design is a design language developed by Google in 2014.
            Expanding on the "cards" that debuted in Google Now, Material Design
            uses more grid-based layouts, responsive animations and transitions,
            padding, and depth effects such as lighting and shadows. Wikipedia
            Programming languages: Angular, CSS, JavaScript, HTML, Java, Sass,
            AngularJS, Swift, Dart, Objective-C
          </p>
        </Grid>
          </Grid>
      </section>
      <Grid container spacing={2} style={{marginTop:100}}>
      <Grid item xs={12} sm={6} md={6}>
            <img  style={{height:500, width:'100%'}} src={desktop} alt='laptop'/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} style={{padding:50}}>
            <h1>Free, open, simple</h1>
            <p>
            Material Design is a design language developed by Google in 2014.
            Expanding on the "cards" that debuted in Google Now, Material Design
            uses more grid-based layouts, responsive animations and transitions,
            padding, and depth effects such as lighting and shadows. Wikipedia
            Programming languages: Angular, CSS, JavaScript, HTML, Java, Sass,
            AngularJS, Swift, Dart, Objective-C
          </p>
          <h1>Powerful tooling</h1>
          <p>
            Material Design is a design language developed by Google in 2014.
            Expanding on the "cards" that debuted in Google Now, Material Design
            uses more grid-based layouts, responsive animations and transitions,
            padding, and depth effects such as lighting and shadows. Wikipedia
            Programming languages: Angular, CSS, JavaScript, HTML, Java, Sass,
            AngularJS, Swift, Dart, Objective-C
          </p>
        </Grid>
      </Grid>
      <section className="footer">
          <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={4} style={{textAlign:'center'}}>
            <h1>Blogr</h1>
            </Grid>
        <Grid item xs={3} sm={3} md={2}>
            <h5>Product</h5>
            <p>Overview</p>
            <p>Pricing</p>
            <p>MarketPlace</p>
            <p>Features</p>
            <p>Integrations</p>
        </Grid>
        <Grid item xs={3} sm={3} md={2}>
            <h5>Company</h5>
            <p>About</p>
            <p>Team</p>
            <p>Blog</p>
            <p>Careers</p>
        </Grid>
        <Grid item xs={2} sm={3} md={2}>
            <h5>Connect</h5>
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
        </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Ladingpage;
