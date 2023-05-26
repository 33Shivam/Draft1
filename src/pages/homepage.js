import React from 'react';
import './homepage.css';
import ScrollCount from './scrollCount.js';
import TwitterTimeline from './twitter.js';




class Homepage extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      banners: [
        require('../assests/banner1.jpg'),
        require('../assests/banner2.jpg'),
        require('../assests/banner3.jpg'),
      ],
      currentBannerIndex: 0,
    };
  }

  componentDidMount() {
    this.bannerTimer = setInterval(this.changeBanner, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.bannerTimer);
  }

  changeBanner = () => {
    const { banners, currentBannerIndex } = this.state;
    const nextIndex = (currentBannerIndex + 1) % banners.length;
    this.setState({ currentBannerIndex: nextIndex });
  };




  

  render() {


    const { banners, currentBannerIndex } = this.state;
    const currentBanner = banners[currentBannerIndex];
    


    return (
      <div>
    <div className="hero-c">
      <img
        className="scrollable-banner-icon"
        alt=""
        src={currentBanner}
      />
      <div className="rectangle-icon" />
      <img className="rectangle-icon1" alt="" img src= {require('../assests/rectangle2.png')} />
      <img className="rectangle-icon2" alt="" img src= {require('../assests/rectangle3.jpg')} />
      <img className="rectangle-icon3" alt="" img src= {require('../assests/rectangle4.png')} />
      <img className="rectangle-icon4" alt="" img src= {require('../assests/rectangle5.png')} />
      <div className="the-largest-community-of-photo">
        <div className="the-largest-community">
          Building Hope: Empowering Lives Through Shelter Homes for the Homeless
        </div>
      </div>
      <div className="hero-c-child" />
      <div className="hero-c-item" />
      <div className="hero-c-inner" />
      <div className="ellipse-div" />
    </div> 




    <div className="vision">
      <img className="rectangle-icon13" alt="" img src= {require('../assests/rectangle10.jpg')} />
      <div className="vision-our-objective-container">
        <p className="vision1">
          <span>
            <span className="vision2">Vision</span>
          </span>
        </p>
        <p className="blank-line">
          <span>
            <span className="blank-line1">&nbsp;</span>
          </span>
        </p>
        <p className="our-objective-is-to-connect-al">
          <b className="our-objective-is">
            Our objective is to connect all the shelter homes (private and
            public) to NGOs, big organizations/foundations, people who want to
            find shelter, people who want to donate out of good-will to the
            residents of shelter homes.
          </b>
        </p>
      </div>
    </div>



    

    <div className="current-stats">
      <img className="rectangle-icon6" alt="" src="/rectangle6.svg" />
      <img className="rectangle-icon7" alt="" src="/rectangle7.svg" />
      <b className="cr"><ScrollCount value={1000} speed={10} /></b>
      <div className="current-stats-child" />
      <img className="rectangle-icon8" alt="" src="/rectangle7.svg" />
      <img className="rectangle-icon9" alt="" src="/rectangle7.svg" />
      <div className="current-stats-item" />
      <div className="current-stats-inner" />
      <div className="current-stats-child1" />
      <b className="b"><ScrollCount value={100} speed={1} /></b>
      <b  className="b1"><ScrollCount value={1000} speed={10}/></b>
      <b className="b2"><ScrollCount value={400} speed={10} /></b>
      <b className="shelter-home">Shelter Home</b>
      <b className="cities">Cities</b>
      <b className="donations">Donations</b>
      <b className="beds">Beds</b>
    </div>

    


    <div className="real-time-updates">
      <div className="group1">
        <div className="rectangle1" >
        <div className= "rectangle-icon10">        
        <TwitterTimeline />        
        </div>
        <div className="tweets">Tweets</div>
      </div>
      <div className="rectangle2" />
      <img className="rectangle-icon11" alt="" src="/rectangle9.svg" />
      <b className="headlines">Headlines</b>
      <div className="rectangle3" />
      <img className="rectangle-icon12" alt="" src="/rectangle9.svg" />
      <b className="latest-donations">Latest Donations</b>
    </div> </div>



    <div className="report-section">
      <div className="the-largest-community-of-photo1">
        <div className="report-a-homeless">
          {" "}
          Report a Homeless Individual in Need
        </div>
      </div>
      <div className="group">
       
        <b className="report">Report:</b>
        <div className="button21">
          <div className="button-child21" />
          <div className="register">Submit</div>
        </div>
        <div className="button12">
          <div className="button-child12" />
          <div className="register12">Upload Image</div>
        </div>
         <form className="rectangle21" />
         <b className="report">Report:</b>
        <div className="group-child" />
        <input  type="text"className="group-child" placeholder="Your Name"/>
        <div className="group-item" />
        <input  type="text" className="group-item" placeholder='Last Name'/>
        <div className="group-inner" />
        <input  type="text" className="group-inner"placeholder='Phone Number'/>
        <div className="rectangle-div" />
        <input  type="text" className="rectangle-div"placeholder='Address'/>
      </div>
      <img className="rectangle-icon5" alt="" src="/rectangle5.svg" />
    </div>





    <div className="organization-section">
      <div className="supporting-organisation">SUPPORTING ORGANISATION</div>
      <img className="ellipse-icon" alt="" src="/ellipse.svg" />
      <img className="ellipse-icon1" alt="" src="/ellipse1.svg" />
      <img className="ellipse-icon2" alt="" src="/ellipse2.svg" />
      <img className="ellipse-icon3" alt="" src="/ellipse3.svg" />
      <img className="ellipse-icon4" alt="" src="/ellipse4.svg" />
    </div>


      </div>
    );
  }
}

export default Homepage;









