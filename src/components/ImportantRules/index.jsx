import React from "react";
import { Rules } from "./Rules";
import "./ImportantRules.scss";

const RULES_DESCRIPTION = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum, facere repellendus nam beatae asperiores rem reprehenderit expedita, eligendi perspiciatis dignissimos quo quidem molestiae ipsa.'

export const ImportantRules = () => {
  return (
    <div className="container">
        <span className="title">Важно знать:</span>

        <div className="rules-block">
            <Rules
                image="/img/number1.png"
                title="Заголовок"
                description={RULES_DESCRIPTION}
            />

            <Rules
                image="/img/number1.png"
                title="Заголовок"
                description={RULES_DESCRIPTION}
            />

            <Rules
                image="/img/number1.png"
                title="Заголовок"
                description={RULES_DESCRIPTION}
            />

            <Rules
                image="/img/number1.png"
                title="Заголовок"
                description={RULES_DESCRIPTION}
            />
        </div>
    </div>
  );
};
