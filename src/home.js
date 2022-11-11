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
import first from './images/first.png'
import second from './images/second.png'
import third from './images/third.png'
import fourth from './images/fourth.png'
import fifth from './images/fifth.png'
import sixth from './images/sixth.png'
import seventh from './images/seventh.png'
import eighth from './images/eighth.png'
function Home() {
    return(
        <div className="container">
        <div className='navigation'>
            <div className='nav'><img src={frame} alt='#' /><p>Metabnb</p></div>
            <a href="/"><li>Home</li></a>
            <a href="/"><li>Place to stay</li></a>
            <a href="/"><li>NFTs</li></a>
            <a href="/"><li>Community</li></a>
            

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
                        <button type='submit'>Search</button>
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
            <div className='part2'>
            <div className='heading'><h1>Inspiration for your next adventure</h1></div>
            <div className='content'>
                <img width='100%' src={first} alt="" />
                <img width='100%' src={second} alt="" />
                <img width='100%' src={third} alt="" />
                <img width='100%' src={fourth} alt="" />
                <img width='100%' src={fifth} alt="" />
                <img width='100%' src={sixth} alt="" />
                <img width='100%' src={seventh} alt="" />
                <img width='100%' src={eighth} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Home