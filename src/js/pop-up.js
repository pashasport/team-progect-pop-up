'use strict';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

const input = document.querySelector('.form-input');
const modal = document.querySelector('.modal');
const btnSend = document.querySelector('.submit-btn');
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}
function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-active');
    ratingValue = rating.querySelector('.rating-value');
  }
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        // if (rating.dataset.ajax) {
        //   setRatingValue(ratingItem.value, rating);
        // } else {
        ratingValue.innerHTML = index + 1;
        setRatingActiveWidth();
        // }
      });
    }
  }
  // async function setRatingValue(value, rating) {
  //   if (!rating.classList.add('rating-sending')) {
  //     rating.classList.add('rating-sending');
  //     let response = await fetch(
  //       'https://tasty-treats-backend.p.goit.global/api/recipes/',
  //       {
  //         method: 'GET',
  //         // body: JSON.stringify({
  //         //   userRating: value,
  //         // }),
  //         // headers: {
  //         //   'content-type': 'application/json',
  //         // },
  //       }
  //     );
  //     if (response.ok) {
  //       const result = await response.json();
  //       const newRating = result.newRating;
  //       ratingValue.innerHTML = newRating;
  //       setRatingActiveWidth();
  //       rating.classList.remove('rating-sending');
  //     } else {
  //       alert('False');
  //       PerformanceResourceTiming.classList.remove('rating-sending');
  //     }
  //   }
  // }
}
const div = document.querySelector('.backdrop');
function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    div.classList.add('is-hidden');
  }
}
document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    // код клавиши Escape, но можно использовать e.key
    div.classList.add('is-hidden');
  }
});
