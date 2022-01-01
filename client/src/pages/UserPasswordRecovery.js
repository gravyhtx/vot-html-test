import Header from "../components/Header";
import Footer from '../components/Footer';
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Mnemonic from "../components/Mnemonic";

const UserPasswordRecovery = () => {
    const m = new Mnemonic(96)
    console.log(m)
    return (
        <>
        <Header />
        <NavMobile />
        <div className="user-mnemonic-container animate__animated animate__fadeIn" id="user-registration-container">
        <h1 className="account-header">MNEMONIC</h1>
        <div className="user-registration-container">

        </div>
        </div>
        <Footer />
        <NavDesktop />
        </>
    )
}

export default UserPasswordRecovery;