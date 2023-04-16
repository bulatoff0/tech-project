import React from "react";
import { InfoVentilationBenefits } from "./InfoVentilationBenefits";
import "./VentilationBenefits.scss";

export const VentilationBenefits = () => {
  const descr =
    "Поступающий в помещение воздух фильтруется и очищается от вредных веществ, пыльцы, пыли и насекомых. Мы дышим чистым воздухом без аллергенов и навсегда можем забыть про комаров.";

  return (
    <>
      <span className="benefits-header">Что даёт нам вентиляция</span>

      <div className="benefits">
        <InfoVentilationBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoVentilationBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoVentilationBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoVentilationBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoVentilationBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoVentilationBenefits title={"Дыхание чистым воздухом"} discription={descr} />
      </div>
    </>
  );
};
