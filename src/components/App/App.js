import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import Feedbacks from '../feedbacks/Feedbacks';
import Home from '../Home/Home';
import './App.scss';
import { themes, ThemeContext } from '../../utils/ThemeContext';
import ToggleThemes from '../themes/Themes';
import Todos from '../data/Todos';
import Todo from '../data/Todo';
import CounterViaFunctions from '../Counter/functions/CounterViaFunctions/Counter';
import СounterViaContext from '../Counter/functions/CounterViaContext/СounterViaContext';
import СounterViaUseState from '../Counter/functions/CounterViaUseState/СounterViaUseState';
import { getById, remove, update } from '../data/GetTodos';
import СounterViaClass from '../Counter/Class/CounterViaClass/Counter';
import CounterViaUseStateandClasses from '../Counter/Class/CounterViaUseStateAndClasses/СounterViaClasses';
import CounterViaContextAndClassesWithStore from '../Counter/Class/CounterViaContextAndClassesWithStore/CounterViaContextAndClassesWithStore';

function App() {
    return (
        <ThemeContext.Provider value={themes}>
            <Router>
                <div className='body'>
                    <nav>
                        <ul className='nav'>
                            <li className='link'>
                                <ToggleThemes />
                            </li>
                            <li className='link'>
                                <NavLink exact to="/" >Home</NavLink>
                            </li>
                            <li className='link'>
                                <NavLink to="/feedbacks">Feedbacks</NavLink>
                            </li>
                            <li className='link'>
                                <NavLink to="/todos">Todos</NavLink>
                            </li>
                            <ul className='link'>
                                Functions
                                <li className='link'>
                                    <NavLink to="/CounterViaFunctions">Counter Via Function</NavLink>
                                </li>
                                <li className='link'>
                                    <NavLink to="/counterViaContext">Сounter Via Context</NavLink>
                                </li>
                                <li className='link'>
                                    <NavLink to="/counterViaUseState">Сounter Via UseState</NavLink>
                                </li>
                            </ul>
                            <ul className='link'>
                                Classes
                                <li className='link'>
                                    <NavLink to="/CounterViaClass">Counter Via Class</NavLink>
                                </li>
                                <li className='link'>
                                    <NavLink to="/CounterViaUseStateandClasses">Counter Via UseState And Classes</NavLink>
                                </li>
                                <li className='link'>
                                    <NavLink to="/CounterViaContextAndClassesWithStore">Counter Via Context And Classes With Store</NavLink>
                                </li>
                            </ul>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/CounterViaContextAndClassesWithStore">
                            <CounterViaContextAndClassesWithStore />
                        </Route>
                        <Route path="/CounterViaUseStateandClasses">
                            <CounterViaUseStateandClasses />
                        </Route>
                        <Route path="/CounterViaClass">
                            <СounterViaClass />
                        </Route>
                        <Route path="/counterViaUseState">
                            <СounterViaUseState />
                        </Route>
                        <Route path="/counterViaContext">
                            <СounterViaContext />
                        </Route>
                        <Route path="/CounterViaFunctions">
                            <CounterViaFunctions />
                        </Route>
                        <Route exact path="/todos/filter/:filter?">
                            <Todos />
                        </Route>
                        <Route exact path="/todos">
                            <Todos />
                        </Route>
                        <Route path="/todos/:todo/:filter?">
                            <Todo getById={getById} update={update} remove={remove} />
                        </Route>
                        <Route path="/feedbacks">
                            <Feedbacks />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;
