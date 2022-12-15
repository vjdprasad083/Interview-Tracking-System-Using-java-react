
function Home(){
    console.log(sessionStorage.getItem('role'));

    return(
        <div className="home ">
            <header  className="home-header " >
                <div className="home-header-name">
                    <h3>Interview Tracking System</h3>
                </div>
                <nav className="home-header-menu"> 
                    <ul>
                        <li className="home-header-menu-li"><a className="active" href="#">Home</a></li>
                        <li className="home-header-menu-li"><a className="active" href="#">About us</a></li>
                        <li className="home-header-menu-li"><a className="active" href="#">Services</a></li>
                        <li className="home-header-menu-li"><a className="active" href="#">Contact us</a></li>
                        <li className="home-header-menu-li"><a className="active" href="/Login">Login</a></li>

                    </ul>
                </nav>
               
                
            </header>
        </div>
    )
}
export default Home;