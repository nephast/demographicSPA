const APIURLCOLUMNS = '/api/v1/demographic';

export async function getColumns() {
  return fetch(APIURLCOLUMNS)
  .then(resp => {
    if(!resp.ok) {
      if(resp.status >=400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is not responding'};
        throw err;
      }
    }
    return resp.json();
 }) 
};

export async function getItems(item) {
  return fetch(`${APIURLCOLUMNS}/${item}`)
  .then(resp => {
    if(!resp.ok) {
      if(resp.status >=400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is not responding'};
        throw err;
      }
    }
    return resp.json();
 }) 
};
