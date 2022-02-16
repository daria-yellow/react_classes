import { Link, Outlet } from 'react-router-dom';
import '../style/style.css';
import React from 'react'

class Layout extends React.Component{
    render() {
        return (
            <>
            <div className="menu-main">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forecast">Weather</Link></li>
            </ul>
            </div>

            <main className="container">
                <Outlet />
            </main>

            <div className="footer">
                <div>
                    <div className="social">
                        <div id="left_text_footer">
                            <p className="p1">Подписывайтесь на нас в социцальных сетях и следите за обновлениями</p>
                        </div>
                        <div>
                            <img className="icons_footer" src={require('../style/icons/Twitter.svg').default}></img>
                            <img className="icons_footer" src={require('../style/icons/YouTube.svg').default}></img>
                            <img className="icons_footer" src={require('../style/icons/VK.svg').default}></img>
                            <img className="icons_footer" src={require('../style/icons/Facebook.svg').default}></img>
                        </div>
                    </div>
                    <div className="imgfooter" >
                        <img src={require('../style/icons/footer.svg').default}></img>
                    </div>
                    <div className="phone">
                        <p className="p1">+38 (050) 234 24 21</p>
                    </div>
                </div>

                <div className="end">
                    <p className="p2" id="conf">Политика конфиденциальности</p>
                    <p className="p2" id="agreemtn">Соглашение на обработку данных</p>
                </div>
            </div>
            </>
        )
    }
}

export default Layout