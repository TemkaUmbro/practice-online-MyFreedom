# Домашние задания:

## ⚡ 15

15.1 - Done

## ⚡ 14

14.1 - Done
- сделать рефакторинг src/redux/actionTypes.js и src/redux/actionCreators.js, чтобы можно было обращаться к экшнам через actionTypes.age.INCREMENT, actionTypes.counter.DECREMENT, actionTypes.counter.DECREMENT1, actionTypes.counter.INCREMENT, actionTypes.counter.MULTIPLY, actionTypes.todos.ADD и actionTypes.user.UPDATE

14.2 - Done
- вместо src/redux/reducers.js реализовать:

    src/redux/reducers/counterReducers.js (actionTypes.counter.INCREMENT, actionTypes.counter.DECREMENT, actionTypes.counter.MULTIPLY)
    src/redux/reducers/ageReducer.js (actionTypes.age.INCREMENT)
    src/redux/reducers/todoReducer.js (actionTypes.todos.ADD)
    src/redux/reducers/userReducer.js (actionTypes.user.UPDATE)

чтобы итоговый стэйт заполнялся в следующем формате:

{
  counter: '7',
  age: 15,
  todos: [
    {
      id: '1'
    },

    ...

    {
      id: '7'
    }
  ],
  userInfo: {
    country: 'France'
  }
}

14.3 - Done
- реализовать rootReducer.js используя combineReducers:

const rootReducder = combineReducers({
    counter: counterReducer,
    age: ageReducer,
    todos: todosReducer,
    userInfo: userReducer
});

14.4 - Done
- в src/redux/store.js заменить counterReducer на rootReducder

14.5 - Done
- в src/components/Counter/Counter.jsx наряду с уже существующими кнопками добавить кнопки:

    Add todo, которая диспатчит addTodo({ id: counter }), что добавляет новую запись в массив todos в стэйте
    Update user, которая диспатчит udpateUser({ country: "France" }), что устанавливает в стэйте свойству userInfo значение { country: 'France' }

остальные кнопки в Counter.jsx и CounterButtons.jsx изменяют значение свойства counter в строковом форма, а age - в числовом

14.6 - Done
- сделать рефакторинг структуры counter, чтобы все функциональные и классовые компоненты лежали в соответствующих папках и импортировались в app.js следующим образом:

import Counter from "../Counter/function/Counter/Counter";
import CounterViaContext from "../Counter/function/CounterViaContext/CounterViaContext";
import CounterViaUseState from "../Counter/function/CounterViaUseState/CounterViaUseState";
import CounterViaUseStateAndClasses from "../Counter/class/CounterViaUseStateAndClasses/CounterViaUseStateAndClasses";
import CounterViaContextAndClassesWithStore from "../Counter/class/CounterViaContextAndClassesWithStore/CounterViaContextAndClassesWithStore";

14.7* - Nope
- на основе функциональных компонентов из src\components\Counter\function\Counter создать классовые компоненты в src\components\Counter\class\Counter

## ⚡ 13

13.1 - Done
- на основе функционального компонента CounterViaContext и связанного с ним функционального CounterButtons создать классовые компоненты CounterViaContextAndClassesWithStore, CounterViaContextAndConnect, а также классовый CounterButtons, где:

    - в CounterViaContextAndClassesWithStore оборачиваем CounterViaContextAndConnect в Provider из react-redux
    - в CounterViaContextAndConnect оборачиваем CounterViaContextвconnectизreact-reduxДля контекста используемContext.ConsumerлибоComponent.contextType` на выбор.
    - в CounterViaContext оборачиваем CounterButtons в CounterContext.Provider, через который прокидываем в CounterButtons все props компонента CounterViaContext
    - в CounterButtons получаем данные age, counter и др. из контекста через Component.contextType либо Context.Consumer на выбор и реализуем весь функционал CounterButtons кроме обработчика Multiply и связанного с ним multiplyCurrentCounterAsync (разберем это на следующем занятии)

13.2 - Done
- Реализовать CounterViaUseStateAndClasses.jsx через классы

## ⚡ 12

12.1 - Done
- изучить примеры использования контекста в классовых компонентах

12.2 - moved to hw #13
- на основе функционального компонента CounterViaContext и связанного с ним функционального CounterButtons создать классовый компонент CounterViaContextAndClasses и связанный с ним классовый CounterButtons. Для контекста используем Context.Consumer либо Component.contextType на выбор.

12.3 - Done
- Реализовать возможность просмотра деталей любого todo из списка todo по клику на 'Edit'. Данные о выбранном todo выводим по url в формате todos/uniqueId, например, http://localhost:3000/todos/-MgCPApgFq87q2YfOi0e, где uniqueId, в данном случае -MgCPApgFq87q2YfOi0e, это уникальный идентификатор, полученный из записей todos в realtime database.
Этот идентификатор используем в методе getById для выполнения GET запроса по адресу https://[ваше имя realtime database].firebaseio.com/todos/${uniqueId}.json, сам getById импортируем в CounterViaContextAndClasses и прокидываем в CounterButtons через props.

12.4* - nope
- реализовать логику изменения данных выбранного todo в отдельных input полях по нажатию на кнопку save отправляя PUT либо PATCH запрос в realtime database.

## ⚡ 11

11.1 - Done
- используя NavLink реализовать выделение выбранной ссылки меню

11.2 - Done
- изучить Управляемые компоненты

11.3 - Done
- опираясь на теорию про Функциональные и классовые компоненты, создать новую ссылку меню Counter Via Classes, которая ведет на родительский компонент CounterViaUseStateAndClasses, который в свою очередь подключает дочерний классовый компонент CounterButtons

## ⚡ 10

10.1 - Done

## ⚡ 9

9.1 - Done

## ⚡ 8

8.0 - Done
- Установить пакеты redux и react-redux

8.1 - Done
- Создать store в src/redux/store.js

8.2 - Done
- Описать типы экшнов INCREMENT, INCREMENT_AGE, DECREMENT, DECREMENT1 в src/redux/actionTypes.js

8.3 - Done
- Описать редьюсер в src/redux/reducers.js

8.4 - Done
- Создать компоненты src/components/Counter/Counter.jsx, используя useEffect, useState реализуем требования:

    при первой загрузке компонента в useEffect подписываемся на изменения стора при помощи store.subscribe, при изменении каунтера в сторе редакса обновляем каунтер в стэйте компонента (используя для этого метод, полученный через useState), в этом же useEffect диспатчатся следующие экшны:

        store.dispatch({ type: actionTypes.INCREMENT });
            // 1
            store.dispatch({ type: actionTypes.INCREMENT, payload: 3 });
            // 4
            store.dispatch({ type: actionTypes.DECREMENT });
            // 3
            store.dispatch({ type: actionTypes.DECREMENT1 });
            // 3

    Для того, чтобы store.subscribe вызвался только один раз, применяем следующий подход:

            useEffect(() => {
                if (!isStoreSubsribed) {
                    // ваша логика

                    setStoreSubsribed(true);
                };
            }, [isStoreSubsribed, setStoreSubsribed]);

    Добиваемся того, чтобы при нажатии на Increment значение каунтара увеличивалось на 1
    Добиваемся того, чтобы jsx содержало всегда актуальное значение из стэйта

8.5 - Done
- Реализовать src/components/CounterButtons/CounterButtons.jsx, используя Provider подключаем его к компоненту Counter, используя useSelector, useDispatch забираем и обновляем стэйт редакса таким образом, чтобы:

    по нажатию на Increment значение counter увеличивалось на 1
    по нажатию на Increment + 2 значение counter увеличивалось на 2 (используя payload)
    по нажатию на Increment Age значение age увеличивалось на 1

8.6 - Done
- Установить Redux DevTools, при создании store используем следующий подход:

        const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a;
        const store = createStore(counterReducer, devtools);

    Убеждаемся, что во вкладке Redux появилась возможность отслеживать детали всех экшнов, которые диспатчатся в приложении, включая то, как они меняют стэйт в сторе редакса.

## ⚡ 7

1 - Done
- заменить index.css на index.scss

2 - Done
- перенести логику (включая импорты, useEffect и верстку) по работе с todos из Feedbacks в новый компонент Todos

2 - Done
- создать базу Realtime Database

3 - Done
- заполнить Realtime Database данными в следующем формате:
Здесь:
data - данные для отображения для одного todo
todos - список todos
Для заполнения базы данных следует использовать импорт данных, которые вы экспортировали (через сохранение в json файл) из https://jsonplaceholder.typicode.com/todos/1 и https://jsonplaceholder.typicode.com/todos.

4 - Done
- Используя REST Client, создав в корне requests.http, выполняем GET и POST запросы, используя ссылку из Realtime Database, добавив в конце ссылки .json, то есть если ссылка сгенерирована в таком формате https://todos-7be86-default-rtdb.firebaseio.com/todos, то GET/POST запросы отправляем на https://todos-7be86-default-rtdb.firebaseio.com/todos.json. Убеждаемся, что запросы отработали со статусом 200, оставляем оба запроса в файле requests.http, разделяем их через ### как на картинке ниже:
В POST запросе используем header content-type: application/json как на картинке выше.

5 - Done
- Дорабатываем src/data/todos.js таким образом, чтобы он используя Fetch API реализовывал get и getAll для получения данных из http://.../data.json и https://.../todos.json, причем getAll возвращает массив объектов, это значит используем Object.values() для конвертации в массив того объекта, который нам вернет https://.../todos.json. Как get, так и getAll реализуем через async/await.

6 - Done
- В компоненте Todos используя два useEffect, в которых дергаем get и getAll из src/data/todos.js и используя методы useState отображаем полученные данные в jsx в следующем формате:
image

7 - Done
- В src/data/todos.js реализуем функцию add для добавления нового элемента через POST в https://.../todos.json, для отправки запроса используем Fetch API .

8 - Done
- В компоненте Todos реализуем форму, в которой при нажатии на кнопку Add срабатывает событие onSubmit, в котором вызывается evt.preventDefault, происходит вызов функции add из src/data/todos.js новый элемент попадает в стэйт. Очистку поля title, а также отображение нового элемента в верстке реализуем уже после того, как отработала функция add, для этого используем .then

## ⚡ 6

6.1 - Done
- поставить галочку Highlight updates when components render для визуализации перерисовки компонентов.

6.2 - Done
- Изучить теорию про useState и useContext.

6.3 - Done
- На основе main создаем ветку 6.

6.4 - Done
- В компонент App добавить 2 ссылки - Light и Dark, реализовать переключение темы Light/Dark: при выборе Light бэкграунд у body окрашивается в темный цвет, а цвет текста - в светлый, и наоборот, при выборе Dark бэкграунд у body окрашивается в светлый цвет, а цвет текста - в темный, для смены стилей используем document.body.className = ..., где ... - один из классов body, заданных в index.css, стили остальных элементов меняем через атрибут className. Фон по умолчанию берем из файла utils/config.js.

6.5 - Done
- Реализуем изменение фона/цвета в компонентах Feedbacks и Feedback используя useContext, сам контекст создаем в utils/ThemeContext.js, а ThemeContext.Provider подключаем в компоненте App.

6.6 - Done (https://react-project-artsiomumbryian.web.app/)
- Поднимаем пиар из ветки 6 на main с изменениями из п.4 и п.5. В терминале выполняем npm run build && firebase deploy и указываем полученный url.

6.7* -
- На основе ветки main создаем ветку main-6-7, на основе ветки 6 создаем ветку 6-7, реализуем п.4 и п.5 через props вместо useContext. Поднимаем пиар 6[7] из ветки 6.7 на main-6-7.

6.8 - Done (https://react-project-artsiomumbryian.web.app/)
- На основе ветки 6 создаем ветку 6-8, в файле data/todos.js используя fetch и data.json() реализуем метод get, который получает данные из https://jsonplaceholder.typicode.com/todos/1. В компоненте Feedbacks используя useState и useEffect и метод get реализуем отображение полученных из сервера данных, включая userId и title, поднимаем пиар 6[8] из ветки 6-8 на main. В терминале выполняем npm run build && firebase deploy и указываем полученный url.

6.9* - Done
- На основе ветки 6 создаем ветку 6-9. Реализовать сохранение текущей темы в localStorage. Поднимаем пиар 6[9] из ветки 6-9 на main.

6.10* - Done
- На основе ветки 6.8 создаем ветку 6-10 Реализовать п.8, только вместо https://jsonplaceholder.typicode.com/todos/1 используем https://jsonplaceholder.typicode.com/todos и выводим список всех todos на экран. Поднимаем пиар 6[10] из 6-10 на 6-8.

## ⚡ 5

5.1 - Done
- установить пакет prop-types

5.2 - Done
- описать PropTypes для компонента Feedback, указать, что props.name и props.feedback - обязательные, проверить, что если мы не указываем одно из полей - возникает ошибка

5.3 - Done
- реализовать передачу пропсов во всех компонентах из 1.4 и 1.5, включая Appartment, Room и т.п. Все пропсы описываем через PropTypes. Список PropTypes, обязательных для реализации в рамках этого пункта (часть полей делаем обязательными, часть - не обязательными):

    -   optionalArray: PropTypes.array
    -   optionalBool: PropTypes.bool
    -   optionalFunc: PropTypes.func
    -   optionalNumber: PropTypes.number
    -   optionalObject: PropTypes.object
    -   optionalString: PropTypes.string
    -   optionalNode: PropTypes.node
    -   optionalElement: PropTypes.element
    -   optionalElementType: PropTypes.elementType
    -   optionalEnum: PropTypes.oneOf([указать здесь разные варианты])
    -   optionalUnion: PropTypes.oneOfType([указать разные варианты])
    -   optionalObjectWithShape: PropTypes.shape({указать разные варианты}), реализовать вложенность объектов

5.4 - Done
- Поднимаем пиар 5.1 на ветку main, при запуске кода не должно быть ворнингов

5.5 - Done
- Поднимаем пиар 5.2 на ветку main-5 (которую своздаем на основе main), при запуске кода должен быть хотя бы один ворниг каждого вида из тех, которые указаны в п. 3

5.6* - ...
- Реализовать валидацию полей из 4.9 при добавлении фидбека через useState и классы

5.7* - Done
- В компонент App добавить 2 ссылки - Light и Dark, реализовать переключение темы Light/Dark: при выборе Light бэкграунт у body окрашивается в темный цвет, а цвет текста - в светлый, и наоборот, при выборе Dark бэкграунт у body окрашивается в светлый цвет, а цвет текста - в темный, для смены стилей используем document.body.className = ..., где ... - один из классов body, заданных в index.css, стили остальных элементов меняем через атрибут className. Все className, как у body, так и у остальных элементов устанавливаем в зависимости от того, какое значение, light либо dark лежит у нас в state

5.8* - Done
- прочитать про то, как использовать style, убедиться, что использование style не рекомендуется

## ⚡ 4

1 - Done
- Изучить Рендеринг элементов

2 - Done
- Создать компонент Feedbacks, в нем форма с полями name и feedback, а также кнопкой Add, по нажатию на Add данные о фидбеке попадают в стэйт, который подключается через useState, а также в localStorage используя JSON.stringify, поля очищаются.

3 - Done
- Создать компонент Feedback, который через props принимает name и feedback и отрисовывает фидбек используя стили, подтянутые через scss модули

4 - Done
- В компоненте Feedbacks реализовать отображение массива компонентов Feedback, который получаем путем конвертации при помощи map данных, полученных из localStorage и преобразованного в массив при помощи JSON.parse

5 - Done
- Создать компонент Home

6 - Done
- Добавить в приложение роутинг используя https://reactrouter.com/web/guides/quick-start таким образом, что по нажатию на Home показывается компонент , а по нажатию на Feedbacks, открывается , при этом открывается при загрузке страницы, а при переходе на '/feedbacks'.

7 - Done
- Используя https://console.firebase.google.com/ создать проект в Firebase, инициировать в созданном проекте хостинг, следуя инструкциям интегрировать firebase tools в приложение таким образом, чтобы при вызове firebase deploy данные из папки build деплоились на хостинг

8 - Done - https://react-project-artsiomumbryian.web.app/
- выполнить npm run build и firebase deploy, указать ссылку на сайт в readme.md напротив соответствующего пункта

9* - Done
- Реализовать валидацию полей таим образом, что если пользователь не ввел никакие значения в поля name и/или feedback при этом нажал на Add, пустые поля подсвечивались красным бордером

## ⚡ 3

3.0 - Done
- На основе main создать ветку 3

3.1 - Done
- Перенести все компоненты в соответствующие подпапки внутри папки components, например, Appartment.js в подпапку Appartment, App.js, внутри App и т.д.

3.2 - Done
- Хотя бы один компонент должен подключать стили одним через import css файла

3.3 - Done
- Хотя бы один компонент должен подключать стили одним через import css модуля, убедиться, что в верстке к классу добавляется префикс и постфикс

3.4 - Done
- Установить node-sass через команду npm install node-sass --save

3.5 - Done
- Хотя бы один компонент должен подключать стили одним через import scss файла

3.6 - Done
- Хотя бы один компонент должен подключать стили одним через import scss модуля, создать scss селектор, убедиться, что в верстке к классу добавляется префикс и постфикс

3.7 - Done
- Хотя бы в одном родительском компоненте реализовать передачу данных в дочерний компонент через props

3.8 - Done
- одном родительском компоненте реализовать передачу функции в дочерний компонент через props

3.9 - Done
- одном родительском компоненте реализовать передачу children в дочерний компонент через props

3.10 - Done
- установить экстеншн eslint, установить галочку format on save убедиться, пройтись по всем js файлам и сохраняя файлы убедиться, что весь код корректно отформатирован

3.11 - Done
- Поднять пиар из 3 в main

3.12* - Done
- Изучить React без JSX

3.13* - Done
- Изучить Знакомство с JSX

3.14* - Done
- Изучить Компоненты и пропсы

## ⚡ 2

2.1 - Done
- Создать ветку 2

2.2 - Done
- преобразовать все функциональные компоненты в классовые

2.3 - Done
- Хотя бы в одном компоненте перевести jsx синтаксис на синатксис React.createElement

2.4 - Done
- Перенести все компоненты в соответствующие подпапки внутри папки components, например, Appartment.js в подпапку Appartment, и т.д.

2.5 - Done
- Установить React Developer Tools, проверить, что во вкладке Components отображаются все ваши компоненты

2.6 - Done
- На основе ветки main создать main-2 и поднять на нее пиар из ветки 2

2.7* - Done
- Изучить статью React без JSX (props можете пока игнорировать, будем разбирать отдельно)

2.8* - Done
- Изучить статью Знакомство с JSX (там есть несколько подходов, которые еще будем разбирать отдельно)

2.9 - Done
- Установить экстеншн Gitlens

2.10 - Done
- Подготовить бандл для продакшна через команду npm run build

2.11* - Done
- Тем, кто был со мной на JS модуле - перенести в main все исходники из курса по JS в фолдер _

## ⚡ 1

1.1 - Done
- Установите create-react-app и запустите приложение через npm run start

1.2 - Done
- Разделите консоль на 2 части, в правой части консоли запустите тесты через npm run test что тесты проходят (становятся зелеными в консоли)

1.3 - Done
- Перенесите App в папку components, подправьте все необходимые импорты

1.4 - Done
- Создайте новый компонент Appartment, компонент App преобразовать таким образом, чтобы он в качестве jsx возвращал только <Appartment/>, удалите css и test файл, оставшийся от компонента App

1.5 -Done
- Опишите вашу квартиру либо дом, где живете через компоненты, в частности, можно создавать такие компоненты как Room, Table, Chair и т.п., причем Appartment содержит Room, а Room содержит Table и Chair и т.д., всего в приложении должно получиться от 5 до 10 компонентов

1.6 - Done
- Замените экспорт по умолчанию (default export) в Appartment на именованный (с фигурными скобками), соответственно подправить import в App

1.7 - Done
- В файле public/index.html замените 'root', на 'myRoot', то же самое сделайте в index.js, убедитесь, что приложение работает без проблем, убедитесь, что div с id myRoot присутствует в итоговой верстке

1.8 - Done
- Репозиторий есть

1.9 - Done
-  в readme.md укажите, все, что успели сделать по домашнему заданию (формат оформления разбирали на занятии)

1.10 - Done
- Если в репозитории раньше по умолчанию была ветка master, а не main, сделайте git pull, переключитесь на origin/main, удалите локальную ветку master после чего выполните git fetch --prune, чтобы удалилась origin/master

1.11 - Done
- Поднять PR из ветки 1 на ветку main, название пиара на английском языке по формуле номер задачи [номер ДЗ]: add homework, например MF1207-3 [1]: add homework


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
