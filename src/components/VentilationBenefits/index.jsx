import React from "react";
import { InfoVentilationBenefits } from "./InfoVentilationBenefits";
import "./VentilationBenefits.scss";

export const VentilationBenefits = () => {
  const descr =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in alias hic. Perspiciatis asperiores laboriosam modi esse cum beatae saepe nesciunt, assumenda natus cumque dolor?";

  return (
    <div>
      <span className="title">Что даёт нам вентиляция</span>

      <div className="ventilation-benefits">
            <InfoVentilationBenefits title={"Заголовок"} description={descr} />
            <InfoVentilationBenefits title={"Заголовок"} description={descr} />
            <InfoVentilationBenefits title={"Заголовок"} description={descr} />
            <InfoVentilationBenefits title={"Заголовок"} description={descr} />
            <InfoVentilationBenefits title={"Заголовок"} description={descr} />
            <InfoVentilationBenefits title={"Заголовок"} description={descr} />
      </div>
    </div>
  );
};
