const app = Vue.createApp({
    data() {
        return {
            HTMLcontent: '<a href=./index.html>Home</a> | <a href=./cv.html>Curriculum Vitae</a> | <a href=./interests.html>Interests</a> | <a href=./gallery.html>Gallery</a> | <a href=./subscribe.html>Subscribe</a> | <a href=./contact.html>Contact</a>',
            footer: 'Ali Sokmen - 2021',
            displayModal: false,
            image1: "images/gallery/trakya.jpg",
            alt1: "A landscape from Turkey",
            capt1: "Thrace, 2021",
            image2: "images/gallery/sunset.jpg",
            alt2: "Sunset in the Mediterranean",
            capt2: "Bodrum, 2021",
            image3: "images/gallery/balloons.JPG",
            alt3: "Balloons in the air",
            capt3: "Cappadocia, 2020",
            image4: "images/gallery/creek.JPG",
            alt4: "Fishing boats in a creek",
            capt4: "Bozburun, 2020",
            image5: "images/gallery/torquay.JPG",
            alt5: "Coastal hills in England",
            capt5: "Devon, 2019",
            image6: "images/gallery/rainbow.JPG",
            alt6: "Rainbow over overcast sky",
            capt6: "London, 2019",
            wa: "images/wa.jpeg",
            image: null
        }
    },mounted (){
        // event listener for resizing window too small
        window.addEventListener('resize', this.checkEnlarge);
    },
    methods: {
        setImage(image){
            this.image = image;
        },
        // terminates Modal if window is too small
        checkEnlarge(){
            if (window.innerWidth < 768) {
                this.displayModal = false;
            }
        }
    }
});