import React from 'react';
// import { Collapsible, CollapsibleItem } from 'react-materialize'
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavMobile from '../components/NavMobile';
import NavDesktop from '../components/NavDesktop';
import TextContainer from '../components/TextContainer';
import ImageContainer from '../components/ImageContainer';
import Image1 from '../images/szn/001/the_movement.png'

// import RandomQuote from '../components/modules/RandomQuote';

const ProductsPage = ({ drop, szn }) =>  {

    // const season = <>SZN {drop}{" // "}{szn.toUpperCase()}</>

    const main = {
        border: true,
        containerClasses: "shadow thick dark-gradient padding",
        headerClasses: "center gravy-font",
        textClasses: "gravy-font",
        h1: `Welcome to our ${szn} collection.`,
        p1: <>
            <p>We are currently  preparing for our first szn and will be dropping the first wave of product on December 22, 2021. We will be featuring our VOT logo on 100% supima cotton apparel with all of our materials Made in the USA.
            </p><p>We believe in  a crypto future so are preparing for the Web 3 movement by selling our physical products with collectible digital NFTs and completely integrating our website onto the blockchain by Spring 2022. For our upcoming Winter drop we will be offering multiple payment options until we are completely on-chain in 2022.
            </p><p>If you’d like to be notified for our release then create an account with us today and follow us on  Instagram and Twitter so we can keep you updated. Sign up with your crypto wallet to prepare for our full Web3 release in 2022. We will be airdropping some rewards and a round of limited edition NFTs but you will need a verified wallet for us to send your digital swag so make sure to complete your registration if you want to be among the first to support our movement.
            </p>
        </>
    }

    const img1 = {
        containerClasses: "",
        imgClasses: "md",
        description: "",
    }


    return (
        <div className="products-page-container">
            <Header />
            <NavMobile />

            <div className="row products-page-content box-container">
                <TextContainer
                    containerClasses={main.containerClasses}
                    header={main.h1}
                    headerClasses={main.headerClasses}
                    text={main.p1}
                    textClasses={main.textClasses}
                    border={main.border}
                />
                <ImageContainer
                    containerClasses={img1.containerClasses}
                    imgClasses={img1.imgClasses}
                    description={img1.description}
                    src={Image1}
                />
            </div>

            <NavDesktop />
            <Footer />
        </div>
    )
}

export default ProductsPage;