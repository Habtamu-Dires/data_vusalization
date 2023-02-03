import {Routes, Route, Navigate} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Graph from './GraphComponent';

function Main() {

    const HomeComp = () =>(
        <div className='main-component'>
            <Header />
            <Home />
        </div>
    )

    const GraphComp = () => (
        <div className='main-component'>
            <Header />
            <Graph />
        </div>
    )

    return(
            <Routes>
                <Route path='/home' element={<HomeComp />}></Route>
                <Route path='/graph' element={<GraphComp />}></Route>
                <Route path="*"  element= {
                    <Navigate to="/home" replace />
                }/>
            </Routes>
 
    )
}

export default Main;