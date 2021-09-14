// 2 - в 16.3 реализовать получение данных через async/ await и fetch

function Service({ url }) {
    this.url = url;
}

Service.prototype.getData = async function({ callBack }) {
    const request = new XMLHttpRequest();

    await fetch(this.url)
        .then((response) => response.json())
        .then((json) => {
            console.log('fetch onload:');
            callBack(json);
        });

    request.onload = function() {
        console.log('XMLHttpRequest onload:');
        callBack(JSON.parse(this.responseText));
    };
    request.open('GET', this.url, true);
    request.send();

    console.log(123);
};

export default Service;
