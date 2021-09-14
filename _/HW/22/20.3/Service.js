function Service({ url }) {
    this.url = url;
}

Service.prototype.getData = async function({ callBack }) {
    await fetch(this.url)
        .then((response) => response.json())
        .then((json) => callBack(json));
};

export default Service;
