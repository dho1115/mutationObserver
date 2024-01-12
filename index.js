const toBeObserved = document.querySelector(".toBeObserved");

const mutationObserver = new MutationObserver(entries => {
   console.log(entries);
});

mutationObserver.observe(toBeObserved, { characterData: true, childList: true, characterDataOldValue: true });

// mutationObserver.disconnect()


