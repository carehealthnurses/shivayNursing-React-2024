import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    // <div className="item border" data-value="1"><img src="https://nishatlinen.com/cdn/shop/files/winter-nisha-_-pret-webBanners.jpg?v=1727152719" alt="" /></div>,
    // <div className="item border" data-value="2"><img src="https://nishatlinen.com/cdn/shop/files/winter-accessories-webBanners.jpg?v=1727931836&width=2000" alt="" /></div>,
    // <div className="item border" data-value="3"><img src="https://nishatlinen.com/cdn/shop/files/winter-pret-webBanners.jpg?v=1727152817&width=2000" alt="" /></div>,
    // <div className="item border" data-value="4"><img src="https://nishatlinen.com/cdn/shop/files/winter-luxury-webBanners.jpg?v=1725510299&width=2000" alt="" /></div>,
    // <div className="item border" data-value="5"><img src="https://nishatlinen.com/cdn/shop/files/season-end-sale-further-reductions-web-artwork.jpg?v=1727376964&width=2000" alt="" /></div>,
];

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
);
export default MainCarousel;

// 52.10