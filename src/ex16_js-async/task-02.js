const inputSearch = document.querySelector('.search');

const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

function onChange(e) {
  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: e.target.value,
  })
    .then((response) => response.text())
    .then((response) => {
      console.log(JSON.parse(response).data);
    });
}

onChange = debounce(onChange, 500);

inputSearch.addEventListener('keyup', onChange);
