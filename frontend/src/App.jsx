import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


import { Dashboard } from "../src/pages/Dashboard";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { SendMoney } from "./pages/SendMoney";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney/>} />
          <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
