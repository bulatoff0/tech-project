import React from "react";
import { InfoServices } from "./InfoServices";
import "./Info.scss";

const infoParagraph = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi expedita nobis enim sunt alias? Omnis nobis sit modi fuga veritatis adipisci, aperiam vel velit debitis ducimus fugit iusto id doloribus numquam? Dolorem, in. Necessitatibus accusamus error dicta tempore. Deleniti, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem fuga, voluptate velit molestiae, non veritatis inventore blanditiis maiores eaque eligendi doloribus odit. Maiores alias explicabo id laudantium aliquid. Quam quibusdam repellendus explicabo ipsum. Aut vitae molestiae doloribus error hic! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum magni, velit praesentium placeat voluptatum libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid dolore neque unde, delectus vitae?`


const infoDescr = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus deserunt iusto, corporis nobis ratione officia qui nesciunt eaque quam. Officia.`

export const Info = () => {
  return (
    <div className="container">
        <div className="description">
                <span className="title">
                    Заголовок #1
                </span>
                
                <p>
                    {infoParagraph}
                </p>
        </div>

        <div className="info-services">
                <InfoServices
                    image="./img/drill.png"
                    title="Заголовок"
                    description={infoDescr}
                />

                <InfoServices
                    image="./img/drill.png"
                    title="Заголовок"
                    description={infoDescr}
                />

                <InfoServices
                    image="./img/drill.png"
                    title="Заголовок"
                    description={infoDescr}
                />
        </div>

        <button className="button">Связаться с нами</button>
    </div>
  );
};
