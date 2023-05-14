// $('.testimonials__content').slick({
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     variableWidth: true
//   });



let tabsHeader;
let tabsContent;
window.onload = function () {
    tabsContent = document.getElementsByClassName('test1');
    tabsHeader = document.getElementsByClassName('dots__item');
    for (let i = 0; i < tabsHeader.length; i++) {
        tabsHeader[i].onclick = TabHeaderClick;
    }
};
function TabContentOnOff(index, show) {
    tabsContent[index].style.display = show === true ? "flex" : "none";
}
function TabHeaderOnOff(index, enable) {
    if (enable) {
        tabsHeader[index].classList.add('active');
    }
    else {
        tabsHeader[index].classList.remove('active');
    }
}
function TabHeaderClick(event) {
    let target = event.target;
    let IsEnable;
    for (var i = 0; i < tabsHeader.length; i++) {
        IsEnable = (tabsHeader[i] == target);
        TabHeaderOnOff(i, IsEnable);
        TabContentOnOff(i, IsEnable);
    }
}