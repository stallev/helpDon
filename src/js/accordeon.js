let accordeonList = convertToArray(document.querySelectorAll('.accordeon'));

if(accordeonList){
  accordeonList.forEach(
    block => {
      let accordeonTabLinks = convertToArray(block.querySelectorAll('.accordeon__item-nav-link'));
      let accordeonItemsContentList = convertToArray(block.querySelectorAll('.accordeon__item-content'));
      if(accordeonTabLinks&&accordeonItemsContentList){
        accordeonTabLinks.forEach(
          link => {
            link.addEventListener('click', function(e){
              e.preventDefault();
              accordeonTabLinks.forEach(
                navLink => {
                  navLink.classList.remove('accordeon__item-nav-link--active');
                }
              );
              accordeonItemsContentList.forEach(
                accordeonItemsContent => {
                  accordeonItemsContent.classList.remove('accordeon__item-content--active');
                }
              );
              let activeAccordeonItemID = e.target.getAttribute('data-tab-id');
              e.target.classList.add('accordeon__item-nav-link--active');
              document.getElementById(activeAccordeonItemID).classList.add('accordeon__item-content--active');
            })
          }
        )
      }
    }
  )
}


//аккордеон для faq

let accordeonFaq = convertToArray(document.querySelectorAll('.accordeon-faq'));
let accordeonFaqItemsArray = convertToArray(document.querySelectorAll('.work-step--faq'));
if(accordeonFaq){
  accordeonFaq.forEach(
    block => {
      let accordeonTabLinks = convertToArray(block.querySelectorAll('.accordeon__item-nav-link:not(.accordeon__item-nav-link--active)'));
      let accordeonItemsContentList = convertToArray(block.querySelectorAll('.accordeon__item-content'));
      for(let i=0; i < accordeonFaqItemsArray.length; i++){
        accordeonFaqItemsArray[i].querySelector('.accordeon__item-nav-link').setAttribute('data-tab-id', `value${i}`);
        accordeonFaqItemsArray[i].querySelector('.accordeon__item-content').id = `value${i}`;
      }
      ///let accordeonItemActiveNavLink = block.querySelector('.accordeon__item-nav-link--active');
      if(accordeonTabLinks&&accordeonItemsContentList){
        accordeonTabLinks.forEach(
          link => {
            link.addEventListener('click', function(e){
              e.preventDefault();
              accordeonTabLinks.forEach(
                navLink => {
                  navLink.classList.remove('accordeon__item-nav-link--active');
                  navLink.innerHTML ='+';
                }
              );
              accordeonItemsContentList.forEach(
                accordeonItemsContent => {
                  accordeonItemsContent.classList.remove('accordeon__item-content--active');
                }
              );
              let activeAccordeonItemID = e.target.getAttribute('data-tab-id');
              e.target.classList.add('accordeon__item-nav-link--active');
              e.target.innerHTML = '-';
              document.getElementById(activeAccordeonItemID).classList.add('accordeon__item-content--active');
            })
          }
        )
        // accordeonItemActiveNavLink.addEventListener('click', function (e) {
        //   let activeClickedAccordeonItemID = e.target.getAttribute('data-tab-id');
        //   e.target.classList.remove('accordeon__item-nav-link--active');
        //   document.getElementById(activeClickedAccordeonItemID).classList.remove('accordeon__item-content--active');
        // })
      }
      //кликаем по уже открытому пункту
      // block.querySelector('.accordeon__item-nav-link--active').addEventListener('click',function (e) {
      //   e.preventDefault();
      //   let activeAccordeonItemID = e.target.getAttribute('data-tab-id');
      //   e.target.classList.remove('accordeon__item-nav-link--active');
      //   e.target.innerHTML = '+';
      //   document.getElementById(activeAccordeonItemID).classList.remove('accordeon__item-content--active');
      // })
    }
  )
}