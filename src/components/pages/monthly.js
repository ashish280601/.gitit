import styled from "../styles/styles.module.css";

export default function Monthly({ plans, months }) {
  return (
    <div className={styled.container}>
      <div >
        <div>
          {plans.map((plan, index) => (
            <ul className={styled.subOption} key={index}>
              <li>{plan.option}</li>
            </ul>
          ))}
          {months.map((data, index) => (
            <div className={styled.subDetails} key={index}>
              <span className={styled.subTitle}>{data.title}</span>
              <span className={styled.subMobile}>{data.mobile}</span>
              <span className={styled.subBasic}>{data.basic}</span>
              <span className={styled.subStandard}>{data.standard}</span>
              <span className={styled.subPremium}>{data.premium}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
