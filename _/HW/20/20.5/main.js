// 5 - изучить - делегирование событий, разница между evt.currentTarget (он же this) и evt.target, в 18.2 нажатие на кнопку OK реализовать через делегирование событий

document.querySelector('form').addEventListener('click', function(evt) {
    alert(`target = ${evt.target.tagName}, this(evt.currentTarget) = ${this.tagName}`);
});

document.querySelector('form').addEventListener('click', () => {
    document.querySelector('p').style.visibility = 'visible';
});

document.querySelector('input').addEventListener('click', (evt) => {
    evt.stopPropagation();
    document.querySelector('p').style.visibility = 'hidden';
});