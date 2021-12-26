import '../assets/css/App.css';
import facebook from '../assets/images/facebook.svg';
import LoginCard from '../components/LoginCard';
import SignUp from '../components/SignUp';
import React, { useState } from 'react';

function LoginPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="Login-Main">
            <div className="Login-Body">
                <div className="Login-Body-Left">
                    <img src={facebook} className="name-image" alt="logo" />
                    <div className="alias-div">Connect with friends and the world around you on Facebook.</div>
                </div>
                <div className="Login-Body-Right">
                    <LoginCard
                        signUp={() => setModalShow(true)}
                    />
                </div>
            </div>
            <div className="Login-Footer">
                <span>English (US)</span>
                <span>Español</span>
                <span>Français (France)</span>
                <span>中文(简体)</span>
                <span>لعرباية</span>
                <span>Português (Brasil)</span>
                <span>Italiano</span>
                <span>한국어</span>
                <span>Deutsch</span>
                <span>हिन्दी</span>
                <span>日本語</span>
                <hr />
                <span>Sign Up</span>
                <span>Log In</span>
                <span>Messenger</span>
                <span>Facebook Lite</span>
                <span>Watch</span>
                <span>Places</span>
                <span>Games</span>
                <span>Market</span>
                <span>place</span>
                <span>Facebook Pay</span><span>Jobs</span>
                <span>Oculus</span>
                <span>Portal</span>
                <span>Instagram</span>
                <span>Bulletin</span>
                <span>Local</span>
                <span>Fundraisers</span>
                <span>Services</span>
                <span>Voting Information Center</span>
                <span>Groups</span>
                <span>Create Ad</span>
                <span>Create Page</span>
                <span>Developers</span>
                <span>Careers</span>
                <span>Privacy</span>
                <span>Cookies</span>
                <span>Ad choices</span>
                <span>Terms</span>
                <span>Help</span>
                <div>Meta © 2021</div>
            </div>

            <SignUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default LoginPage;