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
              console.log(document.getElementById(activeAccordeonItemID));
              document.getElementById(activeAccordeonItemID).classList.add('accordeon__item-content--active');
            })
          }
        )
      }
    }
  )
}
