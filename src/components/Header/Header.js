import React from 'react';
import './Header.css';
 
import SearchIcon from '@material-ui/icons/Search';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="header">
            <Link to='/'>
                
                  <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" className="header-logo" />
            </Link>
            <div className="header-option" style={{marginRight: "-10px"}} >
                <LocationIcon />
            </div>

            <div className="header-option">
                <span className="header-option1">Hello</span>
                <span className="header-option2">Select your address</span>  
            </div>
            <div className="header-search">
                <select>
                    <option value="all">All</option>
                </select>
                <input type="text" className="header-search-input" />
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-nav">
                <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-option1">Hello Guest</span>    
                        <span className="header-option2">Sign In</span>    
                    </div>
                </Link>
                <Link to="/orders" className="header-link">
                    <div className="header-option">
                        <span className="header-option1">Retuns</span>    
                        <span className="header-option2">& Orders</span>    
                    </div>
                </Link>
                <Link to="/checkout" className="header-link">
                    <div className="header-basket">
                        <CartIcon />   
                        <span className="header-option2 basket-count">0</span>    
                    </div>
                </Link>

            </div>
        </nav>

    )
}

export default Header
