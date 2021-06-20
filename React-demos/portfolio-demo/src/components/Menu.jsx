import styled from 'styled-components'

const Wrapper = styled.div`
        width: 300px;
        height: 100vh;
        background-color: #15023a;
        position: fixed;
        top: 0;
        right: -300px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: right 1s ease;

        &.active {
            right: 0;
        }

        ul {
            list-style: none;
            font-size: 2rem;
            font-weight: 200;
            width: 60%;
            li {
                margin-bottom: 20px;
                a {
                    text-decoration: none;
                    color: white;
                }
                &:hover {
                    font-weight: 500;
                }
            }
        }
    `



export default function Menu({ menuOpen, setMenuOpen }) {
    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }


    return (
        <Wrapper className={menuOpen && "active"}>
            <ul>
                <li onClick={handleClick}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </Wrapper>
    )
}
