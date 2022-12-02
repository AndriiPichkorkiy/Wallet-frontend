import { NavLink } from 'react-router-dom';

const NavBarTemp = () => {
    return (
        <>
            <NavLink style={{ margin: '10px' }} to='/'>/</NavLink>
            <NavLink style={{ margin: '10px' }} to='/register'>/register</NavLink>
            <NavLink style={{ margin: '10px' }} to='/login'>/login</NavLink>
            <NavLink style={{ margin: '10px' }} to='/statistic'>/</NavLink>
            <NavLink style={{ margin: '10px' }} to='/home'>/home</NavLink>
        </>
    );
}

export default NavBarTemp;