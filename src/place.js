// import './home.css'
import './place.css'
// import ConnectWallet from './wallet'
import frame from './images/Frame.png'
import drop from './images/drop.svg'
import wallet1 from './images/wallet1.svg'
import wallet2 from './images/wallet2.svg'
// import img12 from './images/img12.png'
import star from './images/star.svg'
import meta2 from './images/toplogo.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
import img1 from './images/eighth.png'
import img2 from './images/fifth.png'
import img3 from './images/sixth.png'
import cancel from './images/cancel.svg'
import img4 from './images/seventh.png'
import img5 from './images/finall.png'
import img6 from './images/img2.png'
import img7 from './images/img3.png'
import img8 from './images/img4.png'
import img9 from './images/third.png'
import img10 from './images/first.png'
import img11 from './images/second.png'
import img12 from './images/fourth.png'
import img13 from './images/img12.png'
import img14 from './images/img13.png'
import img15 from './images/img15.png'
import img16 from './images/img16.png'
import location from './images/location.png'

function Place(){
    function show(){
       document.getElementById('wal').style.display='flex'
    }
    function Cancel(){
       document.getElementById('wal').style.display='none'
    }
    return(
        <div className="mycontainer">

<div>
<div id='wal'>
            <div className="walletcard">
            <div className="topic">
                <h3>Connect Wallet</h3>
                <img id="cancel" onClick={Cancel} src={cancel} alt='' />
            </div>
            
                <p>Choose your preferd wallet</p>
                <div className="wallet">
                    <img alt='' className='final' src={wallet1}></img>
                    <img alt='' className='drop' src={drop}></img>
                </div>
                <div className="wallet">
                    <img alt='' className='final' src={wallet2}></img>
                    <img alt='' src={drop} className="drop"></img>
                </div>
            </div>
            </div>
            
        </div>
        <div className='navigation'>
            <div className='nav'><img src={frame} alt='#' /><p>Metabnb</p></div>
            <div className='listnav'>
            <a href="/"><p>Home</p></a>
            <a href="/placetostay"><p>Place to stay</p></a>
            <a href="/" className='adjust'><p>NFTs</p></a>
            <a href="/"><p>Community</p></a>
            </div>
            <button className='connectwallet' onClick ={show}> Connectwallet </button>
            </div>
            
                <div className='alist'>
                    <li>Resturant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>Fastest city</li>
                    <li>beach</li>
                    <li>Cabins</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                    <div className='solve'><button className='locate'><p>Location</p><div className='img'><img src={location} alt='' /></div></button></div>
                </div>
            <div className='mycontent'>    
                <div className="card">
            <img src={img2} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img10} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img6} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img8} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img13} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img14} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img15} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img16} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img5} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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
            <img src={img7} alt=""/>
            <div className="words"><p>Desert king</p> <p>1Mbt per night</p></div>
            <div className="ndword"><p>2345km away</p><p className='available'> Available for 2weeks stay</p></div>
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

export default Place