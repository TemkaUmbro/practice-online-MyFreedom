// 2 - в 16.3 реализовать получение данных через async/ await и fetch

function Service({ url }) {
    this.url = url;
}

Service.prototype.getData = async function({ callBack }) {
    await fetch(this.url)
        .then((response) => response.json())
        .then((json) => {
            console.log('fetch onload:');
            callBack(json);
        });

    console.log('message');
};

export default Service;
