import './home.css'
// import img1 from './images/eighth.png'
// import img2 from './images/fifth.png'
import img3 from './images/sixth.png'
import img4 from './images/seventh.png'
// import img5 from './images/img1.png'
import img9 from './images/third.png'
import img10 from './images/first.png'
import img11 from './images/second.png'
import img12 from './images/fourth.png'
import drop from './images/drop.svg'
import wallet1 from './images/wallet1.svg'
import wallet2 from './images/wallet2.svg'
import cancel from './images/cancel.svg'
// import logo from './images/t.svg'
import frame from './images/Frame.png'
import mbtoken from './images/mbtoken.svg'
import meta from './images/metamask.svg'
import opensea from './images/opensea.png'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import star from './images/star.svg'
import imgg3 from './images/img3.png'
import imgg4 from './images/img4.png'

import d from './images/3d.png'
import meta2 from './images/toplogo.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
function Home() {
    function show(){
        document.getElementById('wal').style.display='flex'
     }
     function Cancel(){
        document.getElementById('wal').style.display='none'
     }
    return(
        <div className="mycontainer">
        
        <div id='wal'>
            <div className="walletcard">
            <div className="topic">
                <h3>Connect Wallet</h3>
                <img id="cancel" onClick={Cancel} src={cancel} alt='' />
            </div>
            
                <p>Choose your preferd wallet</p>
                <div className="wallet">
                    <img alt='' src={wallet1}></img>
                    <img alt='' className='drop' src={drop}></img>
                </div>
                <div className="wallet">
                    <img alt='' src={wallet2}></img>
                    <img alt='' src={drop} className="drop"></img>
                </div>
            </div>
            </div>

        <div className='navigation'>
            <div className='nav'><img src={frame} alt='#' /><p>Metabnb</p></div>
            <div className='listnav'>
            <a href="/"><p>Home</p></a>
            <a href="/placetostay"><p>Place to stay</p></a>
            <a href="/"><p>NFTs</p></a>
            <a href="/"><p>Community</p></a></div>
            <button className='connectwallet' onClick ={show}> Connectwallet </button>
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
                    <img className='img3' src={imgg3} alt='' />
                    <img className='img4' src={imgg4} alt='' />
                    </div>
                </div>
                </div>
                <div className='foot1'>
                    <img src={mbtoken} alt=''/>
                    <img src={meta} alt=''/>
                    <img src={opensea} alt=''/>
                </div>
            
            <div className='heading'><h1>Inspiration for your next adventure</h1></div>
        

            <div className='mycontent'>
                
                <div className="card">
            <img src={img10} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
        </div>
                
                
        <div className="card">
            <img src={img11} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
        </div>
                
                
                
        <div className="card">
            <img src={img9} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
        </div>
                
                
       <div className='card'>         
        <img src={img2} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
        </div>
                
                
                
        <div className="card">
            <img src={img1} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
        </div>
                
                
        <div className="card">
            <img src={img12} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
        </div>
            
        <div className="card">
            <img src={img3} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
        </div>
                
                
                
        <div className="card">
            <img src={img4} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p>Available for 2weeks stay</p></div>
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
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