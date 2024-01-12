const toBeObserved = document.querySelector(".toBeObserved");

const mutationObserver = new mutationObserver(entries => {
   console.log(entries);
})

mutationObserver.observe(toBeObserved, {})



