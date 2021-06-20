import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-size: clamp(1.8rem, 6vw, 3rem);
    }
    section {
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        >div {
            width: 300px;
            height: 70%;
            border-radius: 10px;
            box-shadow: 0 0 15px -8px black;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;
            transition: all 1s;
            cursor: default;
            &.featured {
                width: 350px;
                height: 75%;
                margin: 0 30px;
            }
            &:hover {
                transform: scale(1.1);
            }
            .top {
                display: flex;
                justify-content: center;
                align-items: center;
                img:first-child, 
                img:last-child {
                    height: 25px;
                }
                img:nth-child(2) {
                    width: 60px;
                    border-radius: 50%;
                    height: 60px;
                    object-fit: cover;
                    margin: 0 30px;
                }
            }
            .center {
                padding: 10px;
                background-color: #ffe8ec;
                border-radius: 10px;
                font-size: clamp(0.8rem, 2vw, 1rem);
            }
            .bottom {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                h3 {
                    margin-bottom: 5px;
                    font-size: clamp(1rem, 2vw, 1.5rem);
                }
                h4 {
                    color: lightgray;
                    font-size: clamp(1rem, 2vw, 1.2rem);
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        section {
            flex-direction: column;
            height: 90%;
            width: 80%;
            >div {
                width: 100%;
                padding: 5px;
                margin: 20px 0;
                line-height: 1.2;
                &.featured {
                    width: 100%;
                    margin: 1px;
                }
                .top {
                    img:nth-child(2) {
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
    }
    `


export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];
    return (
        <Wrapper id="testimonials">
            <h1>Testimonials</h1>
            <section>
                {
                    data.map((d, i) => (
                        <div className={d.featured ? "featured" : ""} key={i}>
                            <div className="top">
                                <img src="./assets/right-arrow.png" alt="" />
                                <img src={d.img} alt="" />
                                <img src={d.icon} alt="" />
                            </div>
                            <div className="center">{d.desc}</div>
                            <div className="bottom">
                                <h3>{d.name}</h3>
                                <h4>{d.title}</h4>
                            </div>
                        </div>
                    ))
                }
            </section>
        </Wrapper>
    )
}
