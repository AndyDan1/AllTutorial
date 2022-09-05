import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeTitle from "./pages/HomeTitle";
import MininAllHooks from "./pages/MininAllHooks";
import MininFastStart from "./pages/MininFastStart";
import HooksUseState from "./pages/HooksUseState";
import HooksUseEffect from "./pages/HooksUseEffect";
import FundamentalCourse from "./pages/FundamentalCourse";
import Error from "./pages/Error";
import Layout from "./component/Layout";
import TestId from "./pages/TestId";
import {book} from "./constans/Books";
import UseState from "./pages/MininAllHooks/components/UseState";
import UseEffect from "./pages/MininAllHooks/components/UseEffect";
import UseRef from "./pages/MininAllHooks/components/UseRef";
import UseMemo from "./pages/MininAllHooks/components/UseMemo";
import Counter from "./pages/FundamentalCourse/components/Counter";
import Course from "./pages/FundamentalCourse/components/Course";
import TestPage from "./pages/TestPage";
import Footer from "./component/Footer";


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomeTitle/>}/>
          <Route path='/:id' element={<TestId/>}/>
          <Route path={book.allHooks} element={<MininAllHooks/>}>
            <Route index path={book.allUseState} element={<UseState/>}/>
            <Route path={book.allUseEffect} element={<UseEffect/>}/>
            <Route path={book.allUseRef} element={<UseRef/>}/>
            <Route path={book.allUseMemo} element={<UseMemo/>}/>
          </Route>

          <Route path={book.fastStart} element={<MininFastStart/>}/>
          <Route path={book.hooksUseState} element={<HooksUseState/>}/>
          <Route path={book.hooksUseEffect} element={<HooksUseEffect/>}/>
          {/*TEST*/}
          {/*<Route path={book.fundamentalCourse} element={<FundamentalCourse/>}/>*/}
          <Route path={book.fundamentalCourse} element={<FundamentalCourse/>}>
            <Route path={book.fundamentalTest1} element={<Counter/>}/>
            <Route path={book.fundamentalTest2} element={<Course/>}/>
            <Route path={book.fundamentalTest3} element={<p>333HELLO 3Test3 HELLO333</p>}/>
          </Route>

          <Route path={book.testPage} element={<TestPage/>}/>

          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
