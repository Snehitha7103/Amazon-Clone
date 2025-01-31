document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.header-slider ul img');
    const prev_btn = document.querySelector('.control-prev');
    const next_btn = document.querySelector('.control-next');

    let n = 0;

    function changeSlide() {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none'; // Hide all images
        }
        imgs[n].style.display = 'block'; // Show the current image
    }

    changeSlide();

    prev_btn.addEventListener('click', () => {
        n = n > 0 ? n - 1 : imgs.length - 1;
        changeSlide();
    });

    next_btn.addEventListener('click', () => {
        n = n < imgs.length - 1 ? n + 1 : 0;
        changeSlide();
    });
});
const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
	item.addEventListener('wheel', (evt)=>{
		evt.preventDefault();
		item.scrollLeft +=evt.deltaY;
	});
	
}