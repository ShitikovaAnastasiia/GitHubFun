import React from 'react';
import HomePage from "./pages/HomePage";
import SavedPage from "./pages/SavedPage";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (<>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/saved-page' element={<SavedPage/>}/>
            </Routes>
        </>
    );
}

export default App;
