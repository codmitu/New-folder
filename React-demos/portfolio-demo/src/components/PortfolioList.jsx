

export default function PortfolioList({ title, active, setSelected, id }) {
    const handleClick = () => {
        setSelected(id);
    }

    return (
        <li className={active ? "active" : ""} onClick={handleClick}>
            {title}
        </li>
    )
}
