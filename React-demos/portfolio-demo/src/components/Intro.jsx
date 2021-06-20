import styled from "styled-components"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

const Wrapper = styled.div`
    display: flex;
    .left {
        flex: 1;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        >div {
            width: calc(100vh - 70px);
            height: calc(100vh - 70px);
            background-color: crimson;
            border-radius: 50%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            img {
                height: 90%;
            }
        }
    }
    .right {
        flex: 1;
        position: relative;
        >div {
            height: 100%;
            padding-left: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-size: clamp(2.5rem, 5vw, 4rem);
                margin: 10px 0;
            }
            h2 {
                font-size: 2rem;
            }
            h3 {
                font-size: clamp(1.2rem, 3vw, 2.2rem);
                span {
                    color: crimson;
                }
                .ityped-cursor {
                    animation: blink 0.5s infinite;
                }
            }
        }
        a {
            position: absolute;
            bottom: 10px;
            left: 50%;
            img {
                width: 30px;
                animation : blink 2s infinite;
            }
        }
        @keyframes blink {
            to {
                opacity: 0;
            }
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        .left {
            align-items: flex-end;
            >div {
                width: 50vh;
                height: 50vh;
            }
        }
        .right {
            >div {
                padding-left: 0;
                align-items: center;
            }
        }
    }
    `

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Developer", "Designer", "Content Creator"]
        });
    }, []);


    return (
        <Wrapper id="intro">
            <div className="left">
                <div>
                    <img src="./assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div>
                    <h2>Hi there, I'm</h2>
                    <h1>Jhonn Smith</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="./assets/down.png" alt="" />
                </a>
            </div>
        </Wrapper>
    )
}
