//Mua Vé
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const modalCloseFooter = document.querySelector('.js-modal-close-footer')
//Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets()   
{
    modal.classList.add('open')
    
}

//Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
    
function hideBuyTickets()   
{
    modal.classList.remove('open')
    modalCloseFooter.classList.remove('open')
}
//Lặp qua từng thẻ button và nghe hành vi click 
for (const buyBtn of buyBtns)
{
    buyBtn.addEventListener('click', showBuyTickets) 
}

//Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets)  
modal.addEventListener('click',hideBuyTickets)      
modalContainer.addEventListener('click', function(event){event.stopPropagation()})   
modalCloseFooter.addEventListener('click',hideBuyTickets)  

/*---------------------------------------------------------------------------------------------------- */
var header=document.getElementById('header');
var mobileMenu=document.getElementById('mobile-menu');
var headerHeigth=header.clientHeight;

//Đóng/mở mobile menu
mobileMenu.onclick=function(){
    var isClose=header.clientHeight===headerHeigth;
    // so sánh header.clientHeight có bằng 46 hay không
    // nếu mà bằng 46 thì gán isClose = true
    if(isClose){
        header.style.height='auto'
    }
    else{
        header.style.height=null;
    }
}

//Tự động đóng khi chọn menu
var menuItems=document.querySelectorAll('#nav li a[href*="#"]')
for(var i=0;i<menuItems.length;i++){
    var menuItem=menuItems[i] 
    menuItem.onclick=function(event){
    //Nếu mà có anh chị em liền kề và anh chị em liền kề đó chứa class = subnav
    // thì chúng ta biết được đích thị là menu cha
    var isParentMenu=this.nextElementSibling&&this.nextElementSibling.classList.contains('subnav')
        
        /*
        //Cách viết thứ 1
        if(!isParentMenu){
            header.style.height=null;
        }
        else{
            //mặc định bấm vào thẻ a thì sẽ điều hướng lên đầu trang
            //bây giờ ta bỏ qua sự kiện mặc định đó đi
            event.preventDefault();
        }
        */
       
        //Cách viết thứ 2
        if(isParentMenu){
            //Nếu là parent menu thì bỏ qua hành vi mặc định (# + đóng menu)
            event.preventDefault();
        }
        else{
            // //Nếu là parent menu thì thực hiện hành vi mặc định (# + đóng menu)
            header.style.height=null;
        }
    }
}
;

let dynamicStyles = null;

      function addAnimation(body) {
        if (!dynamicStyles) {
          dynamicStyles = document.createElement("style");
          dynamicStyles.type = "text/css";
          document.head.appendChild(dynamicStyles);
        }

        dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
      }

      addAnimation(`
      @keyframes Animation{
 
        from {
            opacity: 1;
        }
        
        to {
            opacity: 0;
        }

      }`);

      var index = 0;
      let slider = document.getElementById("slider");
      function changeBackgroundImg() {
        var img = [
          "url(https://bpmthanh.github.io/theBand/img/slider/slider1.jpg)",
          "url(https://bpmthanh.github.io/theBand/img/slider/slider2.jfif)",
          "url(https://bpmthanh.github.io/theBand/img/slider/slider3.jpg)",
        ];

        Object.assign(slider.style, {
          marginTop: "46.5px",
          paddingTop: "50%",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "relative",
          fontFamily: '"Segoe UI",Arial,sans-serif',
          backgroundSize: "100% 100%",
          backgroundImage: img[index],  
          WebkitAnimation: 'Animation 2s ease-in-out 2s infinite alternate',
          willChange:'opacity' 
        });
        index++;
        if (index == 3) {
          index = 0;
        }
      }
      setInterval(changeBackgroundImg, 4000);