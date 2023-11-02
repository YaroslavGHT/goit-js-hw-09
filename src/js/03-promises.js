import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const obj = {
      position,
      delay,
    };
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
    });
   return promise;
};

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputDaley = +e.target.elements.delay.value;
  const inputStep = +e.target.elements.step.value;
  const inputAmount = +e.target.elements.amount.value;
  
  for (let i = 0; i < inputAmount; i++) {
    const promise = createPromise(i, inputDaley + inputStep * i);
    promise
      .then(result => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${inputDaley + inputStep * i}ms`, { timeout: 6000, });
      })
      .catch(err => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${inputDaley + inputStep * i}ms`, { timeout: 6000, });
      });
  }
});








