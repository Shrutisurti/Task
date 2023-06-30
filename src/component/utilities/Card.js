import React from "react";
import styled from "styled-components";

const Card = (props) => {

  return (
    <>
      {props.showProductCard && (
        <CardContainer className="row">
          <div className="col-md-6">
          {props.carddetail.map((value, index) => (
            <div className="card mb-5" key={index}>
              <div className="card-body text-center">
                <div className="card-title">
                  <h3 className="card-heading">{value.title} </h3>
                  <p>
                    {value.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </CardContainer>
      )}

      {/* {props.showFoodCard && (
        <FoodContainer className="col-lg-4">
          {props.fooddetails.map((fooddet, index) => (
            <div className="card-body py-3">
              <div className="card text-left p-5" key={index}>
                <div className="food-card-title">
                  <span className="food-title">
                    {fooddet.foodtitle} <br />
                    <span className=" food-price">{fooddet.foodprice}</span>
                  </span>
                </div>

                <ul className="menu-list">
                  <li>{fooddet.foodlist1}</li>
                  <li>{fooddet.foodlist2}</li>
                  <li>{fooddet.foodlist3}</li>
                </ul>
                <div className="py-3">
                  <span className="food-paragraph">{fooddet.foodpara}</span>
                </div>

                <div className="d-flex ">
                  <div className=" btn-group counter-item" role="group">
                    <button type="button" onClick={decrement}>
                      -
                    </button>
                    <input
                      type="text"
                      placeholder="1"
                      className="text-center"
                    ></input>
                    <button type="button" onClick={increment}>
                      +
                    </button>
                  </div>
                  <Button
                    btnName="Add to cart"
                    variant="#3D2714"
                    textColor="#fff"
                    padding="5px 20px"
                    hoverVariant="#fff"
                    hovertxt="#3D2714"
                    hoverborder="2px solid #3D2714"
                  />
                </div>
              </div>
            </div>
          ))}
        </FoodContainer>
      )} */}
    </>
  );
};
const CardContainer = styled.div`
  .card {
    background-color: #fff7ec;
    margin: 10px;
    // padding:10px;
  }
  .card-body {
     padding: 35px 0px;
    background-color: #fff7ec;
  }
  
  .card-heading{
    color: #fd961e;
    font-size:20px;
    font-weight:600;
  }
  .list-group-item {
    background-color: #fff7ec;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
  }
 .disable-price {
    text-decoration: line-through;
    font-weight: 400;
  }
  .real-price {
    color: red;
    font-weight: 400;
  }
`;
const FoodContainer = styled.section`
  .card {
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .card:hover {
    background-color: #fff7ec;
  }
  .card-heading {
    color: #fd961e;
  }
  .menu-list {
    font-size: 17px;
    font-weight: 500;
    text-align: left;
    list-style: none;
    border: underline;
    padding:0px;
  }
  .menu-list li {
    border-bottom: 1px solid #000;
    padding: 10px 0px;
  }
  .food-title {
    font-weight: 400;
    color: #000;
    font-size: 18px;
  }
  .food-price {
    color: red;
    font-weight: 400;
  }
  .counter-item input {
    width: 18%;
    // max-height: 50%;
    // height:100%;
    height:40px;
  }
  .counter-item button{
    width: 18%;
    // max-height: 50%;
    height:40px;
  }
  .food-paragraph{
    font-weight:400;
   }
`;
export default Card;
