// debounce scroll eventListener
function debounceX(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
// check position 
function checkScrollPosition() {
  let windowY = window.scrollY;
  let targetY = 1; // target scroll position
  if (windowY < targetY) {
    watchedEL.classList.remove('is-visible');
  } else {
    watchedEL.classList.add('is-visible');
  }
  scrollPos = windowY;
}
//  add listener
const watchedEL = document.querySelector('#see-buying-options');
window.addEventListener('scroll', debounceX(checkScrollPosition));
