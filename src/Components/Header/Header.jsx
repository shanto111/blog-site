
import './Header.css';
import profile from "../../images/profile.png";

const Header = () => {
    return (
        <div className='header-component'>
            <h2>Blog site</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;