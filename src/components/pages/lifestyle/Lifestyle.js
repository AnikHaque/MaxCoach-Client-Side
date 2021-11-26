import React from 'react';
import './Lifestyle.css'

const doctorSection = {
  marginTop:'200px'
}

const Lifestyle = () => {
    return (
        <div style={doctorSection}>
            <h5 className="text-center">TOGETHER WE CAN CREATE</h5>
            <h1 className="text-center">Inspring you to live a healthier lifestyle.</h1>
            <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4 container">
  <div class="col">
    <div class="card h-100">
      <img src="https://maxcoach.vuedemo.hasthemes.com/images/health/health-coaching-box-image-01.png" class="card-img-top img-fluid w-50" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Workout Routines</h5>
        <p class="card-text">Research confirm physical routines can improve health during all stage of life</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://maxcoach.vuedemo.hasthemes.com/images/health/health-coaching-box-image-02.png" class="card-img-top w-50 img-fluid" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Nutrition Strategies</h5>
        <p class="card-text">Good food is a life's great pleasures. And for most, good meals are at the heart of family life and celebrations</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://maxcoach.vuedemo.hasthemes.com/images/health/health-coaching-box-image-03.png" class="card-img-top w-50 img-fluid" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Support & Motivation</h5>
        <p class="card-text">Living a healthy lifestyle is a key component to wellness means taking care of you from inside out.</p>
      </div>
    </div>
  </div>
  
</div>
<button type="button" class="btn btn-learn">Learn More</button>
<button type="button" class="btn btn-start">Get Started Today</button>
</div>
    
        </div>
    );
};

export default Lifestyle;