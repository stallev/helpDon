"use strict"
const screenWidth = document.documentElement.clientWidth;
let body = document.querySelector('body');
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

//еслм Safari, то навесим класс
// function determineBrowser() { 
// 	if(navigator.userAgent.indexOf("Safari") != -1) 
//  {
// 		 document.body.classList.add('safari');
//  }
//  }

	determineSafari();
 
 function determineSafari() { 
	if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
 {
		 
 }
 else if(navigator.userAgent.indexOf("Chrome") != -1 )
 {
		 
 }
 else if(navigator.userAgent.indexOf("Safari") != -1)
 {
	document.body.classList.add('safari');
 }
 else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
 {
			
 }
 else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
 {
	 
 }  
 else 
 {
		
 }
 }





/* липкий header*/
// let header = document.querySelector(".header");
// if(header){
// 	(function(){
// 		window.onscroll = function() {stickyHeader()};
// 		let sticky = 0;
// 		function stickyHeader() {
// 			if (window.pageYOffset > sticky) {
// 				header.classList.add("sticky-header");
// 			} else {
// 				header.classList.remove("sticky-header");
// 			}
// 		}
// 	})();
// }




// Меню бургер
let tooggleMenu = document.querySelector('.header__tooggle-menu');
let headerContent = document.querySelector('.header__content');
let menuHamburger = document.querySelector('.header__hamburger-img');
let menuCross = document.querySelector('.header__cross-img');
tooggleMenu.addEventListener('click', function(){
	tooggleMenu.classList.toggle('header__tooggle-menu--cross');
	headerContent.classList.toggle('header__content--visible');
})

//показываем и скрываем списки и подменю
let hiddenItemsControls = document.querySelectorAll('.hidden-items-control');
if(hiddenItemsControls){
	hiddenItemsControls.forEach(
		element => {
			element.addEventListener('click', function(e){
				e.preventDefault();
				e.target.classList.toggle('open-state');
				let parentElement = e.target.closest('.parent-item');
				parentElement.classList.toggle('open-state');
				let sublist = e.target.closest('.parent-item').nextSibling.nextElementSibling;
				sublist.classList.toggle('show');
			})
		}
	)
}


//меню футер
const footerMenu = document.querySelector('.footer__mobile-nav-wrap');
if(footerMenu&&(screenWidth<769)){
	let scrollPos = 0;
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if (st > scrollPos){
			//$('#result').html('Вниз');
			document.querySelector('footer').classList.add('show-footer-menu');
		} else {
			//$('#result').html('Вверх');
			document.querySelector('footer').classList.remove('show-footer-menu');
		}
		scrollPos = st;
 });
}

//появление корзины


const iconCart = document.querySelector('.mini-cart__header');
const closeCartBtn = document.querySelector('.mini-cart__icon-close');
const navCartOverlay = document.querySelector('.mobile-nav-under-cart');
if (iconCart) {
	iconCart.addEventListener("click", function (e) {
		document.body.classList.add('_lock-cart');
	});
}
if (closeCartBtn) {
	closeCartBtn.addEventListener("click", function (e) {
		document.body.classList.remove('_lock-cart');
	});
}
if(navCartOverlay){
	navCartOverlay.addEventListener("click", function (e) {
		document.body.classList.remove('_lock-cart');
	});
}