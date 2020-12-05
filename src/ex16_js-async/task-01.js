const url = 'https://jsonplaceholder.typicode.com/users';
const newObjUser = {
  name: 'Sasha',
  age: 25,
};

function request(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.send(JSON.stringify(body));
  });
}

request('GET', url).then((data) => console.log(data));
request('POST', url, newObjUser).then((data) => console.log(data));
