import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import Root from "./layouts/Root";
import CareersLayout from "./layouts/CareersLayout";
import HelpLayout from "./layouts/Help";

import Home from "./pages/Home";
import About from "./pages/About";

import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";

import NotFound from "./pages/NotFound";

import { careersLoader } from "./functions/careersLoader";
import { careerDetailsLoader } from "./functions/careerDetailsLoader";


  
export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>

        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>

        <Route path="careers" element={<CareersLayout/>}>
          <Route index element={<Careers/>} loader={careersLoader}/>
          <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader}/>
        </Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    )
);