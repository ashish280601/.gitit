import styled from "../styles/payment.module.css";

export default function Payment() {
  return (
    <>
      <div className={styled.paymentContainer}>
        <form id={styled.leftSide}>
          <h2 style={{margin:"1rem 9.6rem 0 0", backgroundColor:"whitesmoke"}}>Complete Payment</h2>
          <p style={{ color: "rgba(49, 48, 48, 0.459)" , marginRight:"45px", backgroundColor:"whitesmoke", fontWeight:"500",paddingBottom:"1.2rem" }}>
            Enter your credit or debit card details below
          </p>
          <input
            type="number"
            placeholder="Card number"
            required 
            id={styled.cardNum}
          />
          <input
            type="number"
            placeholder="MM/YY" 
            required 
            id={styled.cardMonth}
          />
          <input 
            type="number" 
            placeholder="CVC" 
            required 
            id={styled.cvc}
          />
          <button id={styled.btn}>Confirm Payment</button>
        </form>
        <div id={styled.rightSide}>
          <h2 style={{marginTop:"1rem",marginRight:"7rem",backgroundColor:"rgb(204,202,202)"}}>Order Summary</h2>
          <span>
            Plan Name<p>Basic</p>
          </span>
          <hr />
          <span>
            Billing Cycle<p>Monthly</p>
          </span>
          <hr />
          <span>
            Plan Price<p>Rs200/mo</p>
          </span>
        </div>
      </div>
    </>
  );
}
