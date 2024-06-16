// 用于导航栏的交互
document.addEventListener('DOMContentLoaded', () => {
    var images = document.querySelectorAll('.scrolling-images img');
    var dots = document.querySelectorAll('.dots .dot');
    var currentIndex = 0;
    const imagesLength = images.length;

    console.log(images);
    console.log(dots);

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    function switchImage(index) {
        images[currentIndex].classList.remove('active');
    
        // 闪一下
        // 我也想做成淡入淡出，但真搞不定。。。
        setTimeout(function() {
            dots[currentIndex].classList.remove('active');
            currentIndex = index;
    
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }, 10);
    }

    // 每5秒自动切换到下一张图片
    setInterval(function() {
        const nextIndex = (currentIndex + 1) % imagesLength;
        switchImage(nextIndex);
    }, 5000);

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            switchImage(index);
        });
    });

    // // 鼠标滚轮切换图片
    // images.forEach(function(image) {
    //     image.addEventListener('mouseover', function() {
    //         this.addEventListener('wheel', function(event) {
    //             event.preventDefault();
    //             switchImages(event);
    //         });
    //     });

    //     image.addEventListener('mouseleave', function() {
    //         this.removeEventListener('wheel', switchImages);
    //     });
    // });

    function switchImages(event) {
        var index = (currentIndex + (event.deltaY > 0 ? 1 : -1) + images.length) % images.length;
        switchImage(index);
    }
});
