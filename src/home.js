import './home.css'
// import logo from './images/t.svg'
import frame from './images/Frame.png'
import mbtoken from './images/mbtoken.svg'
import meta from './images/metamask.svg'
import opensea from './images/opensea.png'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import first from './images/image1.png'
import second from './images/image2.png'
import third from './images/image3.png'
import fourth from './images/image4.png'
import fifth from './images/image5.png'
import sixth from './images/image6.png'
import seventh from './images/image7.png'
import eighth from './images/image8.png'
import d from './images/3d.png'
import meta2 from './images/toplogo.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
function Home() {
    return(
        <div className="container">
        <div className='navigation'>
            <div className='nav'><img src={frame} alt='#' /><p>Metabnb</p></div>
            <a href="/"><p>Home</p></a>
            <a href="/"><p>Place to stay</p></a>
            <a href="/"><p>NFTs</p></a>
            <a href="/"><p>Community</p></a>
            <button className='connectwallet'> Connectwallet </button>
            

        </div>
            <div className='rent'>
                <div className='content1'>
                    <h2 className='totalp'>
                        Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
                    </h2>
                    <p>
                        We provide you access to luxury and affordable houses in the metaverse,
                        get a chance to turn yourimagination to reality at your comfort zone 
                    </p>
                    <div className='search'>
                        <input type='search' />
                        <button type='submit' value='Search'>Search</button>
                    </div>
                </div>
                <div className='content2'>
                <div className='grid1'>
                    <img className='img1' src={img1} alt='' />
                    <img className='img2' src={img2} alt='' />
                    </div>
                    <div className='grid2'>
                    <img className='img3' src={img3} alt='' />
                    <img className='img4' src={img4} alt='' />
                    </div>
                </div>
                </div>
                <div className='foot1'>
                    <img src={mbtoken} alt=''/>
                    <img src={meta} alt=''/>
                    <img src={opensea} alt=''/>
                </div>
            
            <div className='heading'><h1>Inspiration for your next adventure</h1></div>
            <div className='test'>
            <div className='content'>
                
                <img width='100%' src={first} alt="" />
                
                
                
                <img width='100%' src={seventh} alt="" />
                
                
                
                <img width='100%' src={sixth} alt="" />
                
                
                
                <img width='100%' src={fourth} alt="" />
                
                
                
                <img width='100%' src={fifth} alt="" />
                
                
                <img width='100%' src={eighth} alt="" />
                <img width='100%' src={third} alt="" />
                
                
                
                <img width='100%' src={second} alt="" />
                
                
            </div>
            </div>
            
            
                <div className='bottom'>
                   <div className='textb'>
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal
                    customers gets amazing gift cards which are traded as NFTs.
                    These NFTs gives our customer access to loads of our exclusive
                    services</p>
                    <button className='learn'>Learn more</button>
                </div> 
                <div className='images2d'>
                    <img src={d} alt=''></img>
                    {/* <img src={img2} alt=''></img>
                    <img src={img3} alt=''></img> */}
                </div>
            </div>
            <div className='footer'>
            <div className='two'>
                <div className='first'>
                    <img src={meta2} alt=''></img>
                    <div className='icons'>
                    <a href='/'><img src={facebook} alt=''></img></a>
                    <a href='/'><img src={instagram} alt=''></img></a>
                    <a href='/'><img src={twitter} alt=''></img></a>
                    </div>
                    <p>&copy; 2022 Metabnb</p>
                </div>
                <div className='second'>
                    <h4>Community</h4>
                    <a href='/'><p>NFTs</p></a>
                    <a href='/'><p>Token</p></a>
                    <a href='/'><p>Landlords</p></a>
                    <a href='/'><p>Discord</p></a>
                </div>
                </div>
                <div className='one'>
                    <div className='third'>
                    <h4>Places</h4>
                    <a href='/'><p>Castle</p></a>
                    <a href='/'><p>Farms</p></a>
                    <a href='/'><p>Beach</p></a>
                    <a href='/'><p>Learn more</p></a>
                </div>
                <div className='fourth'>
                <h4>About us</h4>
                <a href='/'><p>Road map</p></a>
                    <a href='/'><p> Creators</p></a>
                    <a href='/'><p>Career</p></a>
                    <a href='/'><p>Contact us</p></a>
                </div>
                </div>

            </div>
            </div>
    )
}

export default Home