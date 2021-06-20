import styled from 'styled-components';
import { Person, Mail } from '@material-ui/icons';


const Wrapper = styled.div`
        background-color: white;
        color: #15023a;
        height: 70px;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 3;
        transition: all 1s ease;
        &.active {
            background-color: #15023a;
            color: white;
            .hamburger {
                span {
                    &:first-child {
                        background-color: white;
                        transform: rotate(45deg);
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                    &:last-child {
                        background-color: white;
                        transform: rotate(-45deg);
                    }
                }
            }
        }
        >div {
            padding: 10px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
                display: flex;
                align-items: center;
                a {
                    font-size: 2rem;
                    font-weight: 700;
                    text-decoration: none;
                    color: inherit;
                    margin-right: 40px;
                }
                section {
                    display: flex;
                    align-items: center;
                    margin-left: 30px;
                    >svg {
                        font-size: 18px;
                        margin-right: 5px;
                    }
                    >span {
                        font-size: 15px;
                        font-weight: 500;
                    }
                }
            }
            .right {
                .hamburger {
                    width: 32px;
                    height: 35px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    cursor: pointer;
                    span {
                        width: 100%;
                        height: 3px;
                        background-color: #15023a;
                        transform-origin: left;
                        transition: all 1s ease;
                    }
                }
            }
        }
        @media screen and (max-width: 768px) {
            >div {
                .left {
                    section {
                        display: none;
                    }
                }
            }
        }
    `

export default function Topbar({ menuOpen, setMenuOpen }) {
    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }


    return (
        <Wrapper className={menuOpen && "active"}>
            <div>
                <div className="left">
                    <a href="#intro">codmitu</a>
                    <section>
                        <Person />
                        <span>+40 0744 234 567</span>
                    </section>
                    <section>
                        <Mail />
                        <span>codmitu@codmitu.com</span>
                    </section>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={handleClick}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

