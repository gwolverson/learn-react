const API = 'https://api.exchangeratesapi.io/latest?base=ZAR';

export const fetchRates = (callback) => {
    fetch(API)
        .then(res => res.json())
        .then(callback);  
}

/* ES7 async method (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
export default async function fetchRates(callback) {
    const res = await fetch(API);
    const json = await res.json();
  
    callback(json);
}
*/