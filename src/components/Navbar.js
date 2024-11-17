
import React, { useState, useRef } from 'react';
import "../components/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
 import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
 import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';








function Navbar({ highlightNavbar }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [profileDetailsvisible, setProfileDetailsVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const navItemRef = useRef(null);

    const handleDropdown = (event) => {
        const itemRect = event.currentTarget.getBoundingClientRect();
        setDropdownPosition({ top: itemRect.bottom, left: itemRect.left });
        setDropdownVisible(!dropdownVisible);
    };

    const handleProfileDetails = () => {
        setProfileDetailsVisible(!profileDetailsvisible)
        console.log("clivked")
    }
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);  // Toggle the menu when the hamburger is clicked
    };

    return (
        <>
            <div className={`navbar-wrapper ${highlightNavbar ? 'highlighted' : ''}`}>
                <div className='nav-icon'>
                    <img src='/icon img.jpeg' alt="icon" />
                    <span className='title'>Untitled UI</span>
                </div>
                <div className={`nav-items ${menuVisible ? 'show' : ''}`}>
                    <ul>
                        <li>Home</li>
                        <li ref={navItemRef} onClick={handleDropdown}>
                            Products <span className='li-icon'><KeyboardArrowDownIcon /></span>
                        </li>
                        <li ref={navItemRef} onClick={handleDropdown}>
                            Resources <span className='li-icon'><KeyboardArrowDownIcon /></span>
                        </li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='nav-profile'>
                    <img src='/profile.png' alt="profile" onClick={handleProfileDetails} />
                </div>
                <div className='hamburger-menu' onClick={toggleMenu}>
                    <MenuIcon />
                </div>
            </div>

            {dropdownVisible && (
                <div
                    className={`dropdown-wrapper ${dropdownVisible ? 'show' : ''}`}
                    style={{
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`
                    }}
                >
                    <div className='col1'>
                        <div className='icon'>
                            <WebAssetOutlinedIcon />
                            <p>BLOG</p>
                        </div>
                        <p className='dropdown-text'>The Latest Industry News, Updates, and Info...</p>
                        <div className='icon'>
                            <AutoAwesomeOutlinedIcon />
                            <p>Case Studies</p>
                        </div>
                        <p className='dropdown-text'>Learn how our customers are making big changes</p>
                        <div className='icon'>
                            <PlayCircleOutlineOutlinedIcon />
                            <p>Tutorials</p>
                        </div>
                        <p className='dropdown-text'>Get up and running on new features and techniques</p>
                    </div>
                    <div className='col2'>
                        <div className='dropdown-img'>
                            <img src='/dropdoemimg.jpg' alt="dropdown image" />
                            <h2>We've just released an update!</h2>
                            <p>Check out all the new dashboard views. Pages now load faster.</p>
                        </div>
                    </div>
                </div>

            )}

            {profileDetailsvisible && (
                <div className={` profile-details ${profileDetailsvisible ? 'show' : ''}`}>
                    <div className='profile-header'>
                        <div className='profile-icon'>
                            <img src='/profile.png' alt="image" />
                            <p id='profile-dot'>.</p>
                        </div>
                        <div className='profile-name profile-detail1'>
                            <h3>Olivia Rhye</h3>
                            <p>Olivia@untiltedui.com</p>
                        </div>

                    </div>

                    <div className='profile-detail1'>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><PersonOutlineOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>View profile</p>
                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span ><span className='profile-letters'>K</span><span><EastOutlinedIcon /></span><span className='profile-letters'>P</span>

                            </div>
                        </div>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><SettingsOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>View Settings</p>

                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span className='profile-letters'>S</span>

                            </div>
                        </div>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><BoltOutlinedIcon /></p>

                            </div>
                            <div className='person-view-profile'>
                                <p>KeyBoard Shortcuts</p>

                            </div>
                            <div className='person-symbols'>
                                <span><QuestionMarkOutlinedIcon /></span>

                            </div>
                        </div>
                    </div>

                    <div className='profile-detail1 profile-detail2'>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><StoreOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>Company profile</p>
                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span className='profile-letters'>K</span><span><EastOutlinedIcon /></span><span className='profile-letters'>C</span>

                            </div>
                        </div>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><GroupOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>Team</p>

                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span className='profile-letters'>K</span><span><EastOutlinedIcon /></span><span className='profile-letters'>T</span>

                            </div>
                        </div>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><PersonAddAltOutlinedIcon /></p>

                            </div>
                            <div className='person-view-profile'>
                                <p>Invite Colleagues</p>

                            </div>
                            <div className='person-symbols'>
                                <span><QuestionMarkOutlinedIcon /></span><span className='profile-letters'>I</span>

                            </div>
                        </div>

                    </div>

                    <div className=' profile-detail1 profile-detail3'>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><LayersOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>Chanagelog</p>
                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span>K</span><span><EastOutlinedIcon /></span><span>C</span>

                            </div>
                        </div>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><SentimentSatisfiedOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>Slack Community</p>

                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span className='profile-letters'>K</span><span><EastOutlinedIcon /></span><span className='profile-letters'>S</span>

                            </div>
                        </div>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><ContactSupportOutlinedIcon /></p>

                            </div>
                            <div className='person-view-profile'>
                                <p> Support</p>

                            </div>

                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span className='profile-letters'>/</span>

                            </div>
                        </div>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><ViewInArOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>Api</p>

                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span className='profile-letters'>A</span>

                            </div>
                        </div>

                    </div>

                    <div className='profile-detail1 profile-footer'>
                        <div className='p-1'>
                            <div className='person-icon'>
                                <p><LogoutOutlinedIcon /></p>
                            </div>
                            <div className='person-view-profile'>
                                <p>Log out</p>
                            </div>
                            <div className='person-symbols'>
                                <span><KeyboardCommandKeyOutlinedIcon /></span><span>K</span><span><EastOutlinedIcon /></span><span className='profile-letters'>C</span>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
