import { useState } from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    background-color: crimson;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    >img {
        height: 70px;
        position: absolute;
        cursor: pointer;
        
        &:nth-child(2) {
            left: 5%;
            transform: rotate(180deg);
        }
        &:last-child {
            right: 5%;
        }
    }
    section {
        height: 350px;
        display: flex;
        position: absolute;
        left: 0;
        transition: all 1s;
        >div {
            width: 100vw;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .item {
                height: 100%;
                width: 700px;
                background-color: white;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                .left {
                    flex: 4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .leftContainer {
                        width: 90%;
                        height: 70%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .imgContainer {
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            background-color: lightcoral;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img {
                                width: 25px;
                            }
                        }
                        h2 {
                            font-size: clamp(1rem, 3vw, 1.5rem);
                        }
                        p {
                            font-size: clamp(0.8rem, 3vw, 1.1rem);
                        }
                        span {
                            font-size: clamp(0.6rem, 2vw, 0.9rem);
                            font-weight: 600;
                            text-decoration: underline;
                            cursor: pointer;
                        }
                    }
                }
                .right{
                    flex: 6;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        height: 130%;
                        transform: rotate(-10deg);
                    }
                } 
            }
        }
    }
    @media screen and (max-width: 768px) {
        >img {
            display: none;
        }
        section {
            flex-direction: column;
            justify-content: space-evenly;
            height: 100vh;
            >div {
                height: 25vh;
                .item {
                    width: 90%;
                    .right {
                        position: relative;
                        img {
                            position: absolute;
                            left: 30px;
                        }
                    }
                }
            }
        }
    }
    `


export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (dir) => {
        dir === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];

    return (
        <Wrapper id="works">
            <section style={{ transform: `translateX(-${currentSlide}00vw)` }}>
                {data.map((d, i) => (
                    <div key={i}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <img src="./assets/arrow.png" alt="" onClick={() => handleClick('left')} />
            <img src="./assets/arrow.png" alt="" onClick={() => handleClick('right')} />
        </Wrapper>
    )
}
