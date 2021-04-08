import React from 'react';
import ImageGallery from 'react-image-gallery';

export default function Slideshow({ product }) {
    let images = [];
    for (let i = 0; i < product.image.length; i++) {
        if (product.image[1] === "") {
            images.push({
                original: '/no-image.png',
                thumbnail: '/no-image.png',
            })
            break;
        }
        if (product.image[i] === "") {
            continue;
        }
        images.push({
            original: product.image[i],
            thumbnail: product.image[i],
        })
    }

    const options = {
        autoPlay: true,
        showIndex: true,
        showBullets: true,
        infinite: true,
        showThumbnails: true,
        showFullscreenButton: true,
        showGalleryFullscreenButton: true,
        showPlayButton: true,
        showGalleryPlayButton: true,
        showNav: true,
        isRTL: false,
        slideDuration: 500,
        slideInterval: 4000,
        slideOnThumbnailOver: false,
        thumbnailPosition: 'bottom',
        showVideo: {},
        useWindowKeyDown: true,
        lazyLoad: true,
        // startIndex: 0,
        // useTranslate3D: true,
        // useBrowserFullscreen: true,
        // disableThumbnailScroll: true,
        // disableKeyDown: false,
        // disableSwipe: false,
        // onErrorImageURL: 'https://roofequipmentllc.com/wp-content/uploads/2019/01/noimage.png',
        // indexSeparator: '/',
        // swipingTransitionDuration: 0,
        // slideOnThumbnailOver: true,
        // flickThreshold: 0.4,
        // swipeThreshold: 30,
        // stopPropagation: false,
        // preventDefaultTouchmoveEvent: false,
        // onImageError: callback(event),
        // onThumbnailError: callback(event),
        // onThumbnailClick: callback(event, index),
        // onSlide: callback(currentIndex),
        // onBeforeSlide: callback(nextIndex),
        // onScreenChange: callback(boolean),
        // onPause: callback(currentIndex),
        // onImageLoad: callback(event),
        // onPlay: callback(currentIndex),
        // onClick: callback(event),
        // onTouchMove: callback(event),
        // onTouchEnd: callback(event),
        // onTouchStart: callback(event),
        // onMouseOver: callback(event),
        // onMouseLeave: callback(event),
        // additionalClass: callback(event),
    };



    return (
        <>
            <ImageGallery {...options} items={images} />
        </>
    )
}
