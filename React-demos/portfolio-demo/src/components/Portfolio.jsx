import { useEffect, useState } from "react";
import styled from "styled-components"
import PortfolioList from "./PortfolioList";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../data';

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: clamp(2.2rem, 5vw, 3rem)
        }
        ul {
            margin: 10px;
            padding: 0;
            list-style: none;
            display: flex;
            li {
                font-size: 0.9rem;
                margin: 0 25px;
                padding: 7px;
                border-radius: 6px;
                cursor: pointer;
                &.active {
                    background-color: #15023a;
                    color: white;
                }
            }
        }
        section {
            width: 70%;
            max-width: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            >div {
                width: 220px;
                height: 150px;
                border-radius: 20px;
                border: 1px solid lightgrey;
                margin: 10px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                transition: all 1s;
                h3 {
                    position: absolute;
                    font-size: 20px;
                    text-align: center;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                }
                &:hover {
                    background-color: #15023a;
                    img {
                        opacity: 0.2;
                        z-index: 0;
                    }
                }
            }
        }
        @media screen and (max-width: 768px) {
            ul {
                flex-wrap: wrap;
                justify-content: center;
            }
            section {
                width: 100%;
                >div {
                    width: 130px;
                    height: 100px;
                    margin: 5px;
                }
            }
        }
    `


export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "branding":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }
    }, [selected])

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ];


    return (
        <Wrapper id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    list.map((item, i) => (
                        <PortfolioList key={i} title={item.title} active={selected === item.id} id={item.id} setSelected={setSelected} />
                    ))
                }
            </ul>
            <section>
                {
                    data.map((d, i) => (
                        <div key={i}>
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                        </div>

                    ))
                }
            </section>
        </Wrapper>
    )
}
