import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
 {src:"/1.jpg",alt:"Graduation Image"},
    {src:"/2.jpg",alt:"Graduation Image"},
    {src:"/3.jpg",alt:"Graduation Image"},
    {src:"/4.jpg",alt:"Graduation Image"},
    {src:"/5.jpg",alt:"Graduation Image"},
    {src:"/6.jpg",alt:"Graduation Image"},
    {src:"/7.jpg",alt:"Graduation Image"},
    {src:"/8.jpg",alt:"Graduation Image"},
    {src:"/9.jpg",alt:"Graduation Image"},
    {src:"/10.jpg",alt:"Graduation Image"},
    {src:"/11.jpg",alt:"Graduation Image"},
    {src:"/12.jpg",alt:"Graduation Image"},
     {src:"/13.jpg",alt:"Graduation Image"},
    {src:"/14.jpg",alt:"Graduation Image"},
    {src:"/15.jpg",alt:"Graduation Image"},
    {src:"/16.jpg",alt:"Graduation Image"},
    {src:"/17.jpg",alt:"Graduation Image"},
    {src:"/18.jpg",alt:"Graduation Image"},
    {src:"/19.jpg",alt:"Graduation Image"},
    {src:"/20.jpg",alt:"Graduation Image"},
    {src:"/21.jpg",alt:"Graduation Image"},
    {src:"/22.jpg",alt:"Graduation Image"},
    {src:"/23.jpg",alt:"Graduation Image"},
    {src:"/24.jpg",alt:"Graduation Image"},
    {src:"/25.jpg",alt:"Graduation Image"},
    {src:"/26.jpg",alt:"Graduation Image"},
    {src:"/27.jpg",alt:"Graduation Image"},
    {src:"/28.jpg",alt:"Graduation Image"},
    {src:"/29.jpg",alt:"Graduation Image"},
    {src:"/30.jpg",alt:"Graduation Image"},
    {src:"/31.jpg",alt:"Graduation Image"},
    {src:"/32.jpg",alt:"Graduation Image"},
    {src:"/33.jpg",alt:"Graduation Image"},
    {src:"/34.jpg",alt:"Graduation Image"},
    {src:"/35.jpg",alt:"Graduation Image"},
    {src:"/36.jpg",alt:"Graduation Image"},
     {src:"/37.jpg",alt:"Graduation Image"},
    {src:"/38.jpg",alt:"Graduation Image"},
    {src:"/39.jpg",alt:"Graduation Image"},
    {src:"/40.jpg",alt:"Graduation Image"},
    {src:"/41.jpg",alt:"Graduation Image"},
    {src:"/42.jpg",alt:"Graduation Image"},
    {src:"/43.jpg",alt:"Graduation Image"},
    {src:"/44.jpg",alt:"Graduation Image"},
    {src:"/45.jpg",alt:"Graduation Image"},
    {src:"/46.jpg",alt:"Graduation Image"},
    {src:"/47.jpg",alt:"Graduation Image"},
    {src:"/48.jpg",alt:"Graduation Image"},
     {src:"/49.jpg",alt:"Graduation Image"},
    {src:"/50.jpg",alt:"Graduation Image"},
    {src:"/51.jpg",alt:"Graduation Image"},
    {src:"/52.jpg",alt:"Graduation Image"},
    {src:"/53.jpg",alt:"Graduation Image"},
    {src:"/54.jpg",alt:"Graduation Image"},
    {src:"/55.jpg",alt:"Graduation Image"},
    {src:"/56.jpg",alt:"Graduation Image"},
    {src:"/57.jpg",alt:"Graduation Image"},
    {src:"/58.jpg",alt:"Graduation Image"},
    {src:"/59.jpg",alt:"Graduation Image"},
    {src:"/60.jpg",alt:"Graduation Image"},
     {src:"/61.jpg",alt:"Graduation Image"},
    {src:"/62.jpg",alt:"Graduation Image"},
    {src:"/63.jpg",alt:"Graduation Image"},
    {src:"/64.jpg",alt:"Graduation Image"},
    {src:"/65.jpg",alt:"Graduation Image"},
    {src:"/66.jpg",alt:"Graduation Image"},
    {src:"/67.jpg",alt:"Graduation Image"},
    {src:"/68.jpg",alt:"Graduation Image"},
    {src:"/69.jpg",alt:"Graduation Image"},
    {src:"/70.jpg",alt:"Graduation Image"},
    {src:"/71.jpg",alt:"Graduation Image"},
    {src:"/72.jpg",alt:"Graduation Image"},
    {src:"/73.jpg",alt:"Graduation Image"},
    {src:"/74.jpg",alt:"Graduation Image"},
    {src:"/75.jpg",alt:"Graduation Image"},
    {src:"/76.jpg",alt:"Graduation Image"},
    {src:"/77.jpg",alt:"Graduation Image"},
    {src:"/78.jpg",alt:"Graduation Image"},
    {src:"/79.jpg",alt:"Graduation Image"},
    {src:"/80.jpg",alt:"Graduation Image"},
    {src:"/81.jpg",alt:"Graduation Image"},
    {src:"/82.jpg",alt:"Graduation Image"},
    {src:"/83.jpg",alt:"Graduation Image"},
    {src:"/84.jpg",alt:"Graduation Image"},
     {src:"/85.jpg",alt:"Graduation Image"},
    {src:"/86.jpg",alt:"Graduation Image"},
    {src:"/87.jpg",alt:"Graduation Image"},
    {src:"/88.jpg",alt:"Graduation Image"},
    {src:"/89.jpg",alt:"Graduation Image"},
    {src:"/90.jpg",alt:"Graduation Image"},
    {src:"/91.jpg",alt:"Graduation Image"},
    {src:"/92.jpg",alt:"Graduation Image"},
    {src:"/93.jpg",alt:"Graduation Image"},
    {src:"/94.jpg",alt:"Graduation Image"},
    {src:"/95.jpg",alt:"Graduation Image"},
    {src:"/96.jpg",alt:"Graduation Image"},
    {src:"/97.jpg",alt:"Graduation Image"},
    {src:"/98.jpg",alt:"Graduation Image"},
    {src:"/99.jpg",alt:"Graduation Image"},
    {src:"/100.jpg",alt:"Graduation Image"}
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}
