export const http = function (url, method, body, thenFunc, returnValue) {
    fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        },
    })
        .then((data) => {
            if (data.status === 200) {
                data.json().then(data => {
                    returnValue = {user: data}
                })
                thenFunc(returnValue)
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
}
