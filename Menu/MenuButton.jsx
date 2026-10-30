import Button from "../Button/Button";

export default function MenuButton({ children, toggle }) {
    return (
        <Button className="menu-button" onClick={toggle}>{children}</Button>
    )
}