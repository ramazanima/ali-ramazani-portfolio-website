type Props = {
    isOpen: boolean,
    onClick: () => void
}
const MenuIcon = ({ isOpen, onClick }: Props) => {
    return (
        <div className={`block md:hidden menu-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
};

export default MenuIcon;
