import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
       
        <div className="home__image">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/1500x600_Hero-Tall_01_FT._CB662389308_.jpg"
                alt="slide1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Desktop_Tallhero_1500-X-600-BB-jan-rvised-NO-Cashback._CB411961897_.jpg"
                alt="slide2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Boat/Boat_Gw_1500x600._CB660810557_.jpg"
                alt="slide3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/CAT_ATF/2._CB411390334_.jpg"
                alt="slide4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/catlevel/D20458164_IN_HETV_Category_level_GW_PC_Tollhero_1500x600_en_1._CB660812078_.jpg"
                alt="slide5"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="ASUS TUF Gaming A17 Laptop 17.3 FHD 60Hz, Ryzen 5 4600H, GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10/Gray Metal/2.6 Kg), FA706IH-AU016T"
            price={72499}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg "
          />
          <Product
            id="49538094"
            title="Nike Men's Air Vapormax 2019 Blk/Gry Running Shoes-8 Kids UK  32.8 x 20.6 x 11.2 cm; 400 Grams (AR6631-001)"
            price={3215}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/713JJ7CoDkL._UY695_.jpg"
          />
        </div>
        <img
          className="_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/HSS/new/1500x250.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Global Grabbers Sitting Buddha Idol Statue Showpiece for Home Decoration and Gifting (Orange and Black)"
            price={700}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/715ceYF6trL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Jack & Jones Men White Solid Short Sleeve Classic Collar Regular Casual Shirt"
            price={2399.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61SkI64piYL._UL1440_.jpg"
          />
        </div>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Storage/CEPCBundles/Bundle_store_770x300.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="PERFECT STARTER GUITAR. Quality and tone at an affordable price is the hallmark of our F series guitars. "
            price={512}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71RkY055j7L._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="GOQii Smart Vital Fitness SpO2, body temperature and blood pressure tracker "
            price={5699}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51UUJpcldDL._SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="Asymmetric shaped rib cuffs-Ribbed waist band- Welt pockets- BMW Propeller woven/ raised print badge on left chest- PUMA Cat logo print on right chest- Big horizontal ///M Motorsport print at back- BMW M Motorsport inner woven label"
            price={7999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61AqDYCZXhL._UL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={84999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Flip/SS21/HeadersFinal/NewLaunch/AF-PC.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="The Bengal Conundrum: The Rise of the BJP and the Future of Mamata Banerjee: The Rise of the BJP and the Future of the TMC Hardcover "
            price={512}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41b7XHWxcnL.jpg"
          />
          <Product
            id="23445930"
            title="Leafy Tales Set of 4 Lucky Plants Combo- 2 Layer Lucky Bamboo in Glass Bowl, Jade, Golden Money Plant & White Money Plant in Conical Ceramic Pots"
            price={750}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81GgO0bbWLL._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Kore PVC 16-30 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories"
            price={3500}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81XNzjmXi%2BL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;