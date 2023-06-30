import React from "react";
import Layout from "../Layout/Layout";
import group from "../../assets/Images/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png";
import group1 from "../../assets/Images/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png"
import backimg from "../../assets/Images/Group 75.png";
import group2 from '../../assets/Images/pngwing 1.png';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import "./Home.css";
import Button from "../utilities/Button";
import CardList from "../CardList";
import { useState } from "react";
const Home = () => {
  // const [state, setState] = useState(0);

  return (
    <Layout>
      <section className="section1">
       <div className="container">
          <div className="row">
          <div className="col-md-6">
            <div className="first-section"> 
          <h1 className="banner-heading">Learn how to lounch a successful podcast</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <Button
                    btnName="Sign Up Now"
                    padding="15px 30px"
                    fontSize="16px"
                    background='linear-gradient(90deg, #4776E6, #8E54E9);' />
          </div>
          </div>
          <div className="col-md-6">
            <div className="second-section">
            <div className="back-img">
             <img src={backimg} alt="group-img"/>
             </div>
              <div className="comp-1">
             <img src={group} alt="group-img"/>
             </div>
             <div className="comp-2">
             <img src={group1} alt="group-img"/>
             </div>
             {/* <div className="comp-3">
             <img src={group2} alt="group-img"/>

             </div> */}
          </div>
          </div>
          </div>
        </div>
      
      </section>

      <section className="section2">
       <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='d-flex flex-wrap'>
              {Array(4).fill(0).map((eachCard) => (
                <CardList />
              ))}
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
      <div className="text-section">
          <h1 className="second-heading">About the cource</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <Button
                    btnName="Explore Now"
                    padding="15px 30px"
                    fontSize="16px"
                    background='linear-gradient(90deg, #4776E6, #8E54E9);' />
          </div>
          </div>
        </div>
      </div>
      </section>
      <section className="section3">
       <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center"> 
          <div className="plan-details">
            <h3>Choose your plan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <BootstrapSwitchButton
    checked={true}
     
    onlabel='monthly'
    offlabel='yearly'
    onChange={(checked: boolean) => {
        this.setState({ isUserAdmin: checked })
    }}
/>
          </div>
          </div>
        </div>
        <div className="row">
       
        </div>
       </div>
      </section>
      </Layout>
  );
};

export default Home;
