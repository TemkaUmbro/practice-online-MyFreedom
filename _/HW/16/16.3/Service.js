function Service({ url }) {
    this.url = url;
}

Service.prototype.getData = async function({ callBack }) {

    const request = new XMLHttpRequest();

    request.onload = function() {
        console.log('XMLHttpRequest onload:');
        callBack(JSON.parse(this.responseText));
    };
    request.open('GET', this.url, true);
    request.send();

    await fetch(this.url)
        .then((response) => response.json())
        .then((json) => {
            console.log('fetch onload:');
            callBack(json);
        });
};

export default Service;
