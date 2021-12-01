import React from 'react';
import './Home.css';
import Product from './Product';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const banners = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/Scarlett_Main_Desktop_1500X6001X._CB416137475_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/ATF/Day4/Unrec-ENg_PC_Bunk_1500x600._CB413732633_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_days/Uber_GW/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600_2._CB413305591_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/December/pc1500x600._CB412535531_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/ApparelGW/EOSS-Dec/2PC._CB412283660_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Kitchen/XCM_Manual_1295948_1513161_IN_1287794_1483639_in_sa_la_wintercarnival_in_en_3596517_1500x600_1X_en_IN._CB415093327_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/HobbyStore_GW/Hobby_1500x600._CB416245605_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/english/Gateway/updated/V242338866_IN_CEPC_Under_1499_store_Graphics_1500x600._CB416140037_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/vivo/December/GW/V19/D19383832_WL_Vivo_BAU_Dec2020_Tall_Hero_1500x600._CB413828217_.jpg",
];

const fadeProperties = {
    duration: 30000,
    arrows: false,
    pauseOnHover: false,
}

function Home() {
    return (
        <div className="home">
            <div className="slide-container">
                <Fade {...fadeProperties}>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[0]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[1]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[2]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[3]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[4]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[5]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[6]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[7]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[8]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[9]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={banners[10]} />
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="home_all_products">
                <div className="home_row">
                    <Product name="Vivo U10 Pro (6GB RAM, 64GB ROM Variant)" price="29,999" image="https://www.gizbot.com/images/2019-02/vivo-u1_155107538060.jpg"/>
                    <Product name="Drawing room table with custom shelves by Inorma (White)" price="1,699" image="https://images-na.ssl-images-amazon.com/images/I/51dZcS4UjOL.jpg"/>
                    <Product name="15.6 inch i7 10th gen laptop with graphics card" price="89,999" image="https://ae01.alicdn.com/kf/He612776cb426447da86f8e820be90260T/15-6-inch-Core-i7-laptop-win10-notebook-double-grephic-card-nvidia-gtx960-Intel-HD-Graphics.png_.webp"/>
                    <Product name="Pro runner extra durable waterproof shoes by Nike (Blue)" price="7,900" image="https://images.unsplash.com/photo-1578116922645-3976907a7671?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
           </div>
        </div>
    )
}

export default Home;
