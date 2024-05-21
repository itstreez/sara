import React from 'react'
import './Portfolio.css'
import mentalift from '../../assets/mentalift-logo.png'
import bromwkhdom from '../../assets/BromWKhdom-logo.png'
import facebook from '../../assets/facebook.png'
const Portfolio = () => {
    return (
       <section id="portfolio">
           <h5> My Recent Work</h5>
           <h2> Portfolio </h2>

<div className="container portfolio__container">
    <article className="portfolio__item">
    <div className="portfolio__item-image">
    <img src={mentalift} alt="mentalift" />
    </div>
    <h3> Psychology Platform </h3>
    <div className="portfolio__item-cta">
            
    <a href="https://mentalift.tech/" className="btn" target="_blank" rel="noreferrer"> MentaLift</a>
    <a href="mailto:elio.mouhasseb3@gmail.com" className="btn btn-primary"> Live Demo</a>
        </div>
    </article>

    <article className="portfolio__item">
    <div className="portfolio__item-image">
    <img src={bromwkhdom} alt="bromwkhdom" />
    </div>
    <h3> Social Help Platform </h3>
    <div className="portfolio__item-cta">
    <a href="https://www.bromwkhdom.online/" className="btn" target="_blank" rel="noreferrer"> BromWKhdom</a>
    <a href="mailto:elio.mouhasseb3@gmail.com" className="btn btn-primary"> Live Demo</a>
        </div>
   
    </article>


    <article className="portfolio__item">
    <div className="portfolio__item-image">
    <img src={facebook} alt="facebook" />
    </div>
    <h3> Facebook - ASP.NET</h3>
    <div className="portfolio__item-cta">
    {/* <a disabled className="btn" target="_blank" rel="noreferrer" href="https://www.bromwkhdom.online/"> Not Hosted..</a> */}
    <a href="mailto:elio.mouhasseb3@gmail.com" className="btn btn-primary"> Live Demo</a>
    </div>
    </article>
</div>
       </section>
    )
}

export default Portfolio
