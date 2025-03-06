import { createBrowserRouter, Route, Routes, RouterProvider, useParams } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Education from "./pages/Education.tsx";
import Projects from "./pages/Projects.tsx";
import Experience from "./pages/Experience.tsx";
import Skills from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";

const PageWrapper = styled.div`
    width: 80%;
    height: auto;
    margin: 0 auto;
`

const StyledWrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    position: relative;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

function Root() {
    const currentPath=useParams();
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    useEffect(()=>{
        if(lastValue===""){
            document.title="Home | Resume";
        }else {
            document.title=lastValue+" | Resume";
        }
    },[lastValue])
    return (
        <>
            <PageWrapper>
            <Header/>
            <StyledWrapper>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}></Route>
                    <Route path={`/about`} element={<About/>}></Route>
                    <Route path={`/education`} element={<Education/>}></Route>
                    <Route path={`/projects`} element={<Projects/>}></Route>
                    <Route path={`/experience`} element={<Experience/>}></Route>
                    <Route path={`/skills`} element={<Skills/>}></Route>
                    <Route path={`/contact`} element={<Contact/>}></Route>
                </Routes>
            </StyledWrapper>
            <Footer/>
            </PageWrapper>
        </>
    );
}

const router = createBrowserRouter(
    [
        {path:"*", Component: Root},
    ]
)

export default function App() {
   return <RouterProvider router={router}/>
}