import "./styles.css";

export default function Yearly({ plans, years }) {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-container">
          {plans.map((plan, index) => (
            <ul className="sub-option" key={index}>
              <li>{plan.option}</li>
            </ul>
          ))}
          {years.map((data, index) => (
            <div className="sub-details hr-line" key={index}>
              <span className="sub-title">{data.title}</span>
              <span className="sub-mobile">{data.mobile}</span>
              <span className="sub-basic">{data.basic}</span>
              <span className="sub-standard">{data.standard}</span>
              <span className="sub-premium">{data.premium}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
