import "./styles.css";

export default function Yearly({ plans, subscribes }) {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-container">
          {plans.map((plan, index) => (
            <ul className="sub-option" key={index}>
              <li>{plan.option}</li>
            </ul>
          ))}
          {subscribes.map((data, index) => (
            <div className="sub-details hr-line" key={index}>
              <span className="sub-title">{data.title}</span>
              <span className="sub-mobile">{data.mobile}+{0}</span>
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
