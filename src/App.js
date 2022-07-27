import React from "react";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/contact/Contact";
import { CreateContact } from "./components/CreateContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditContact } from "./components/EditContacts";

function App() {
  return (
    <>
      <div className="app">
          <Navbar />
          <div className="container mt-5">
            <Routes>
              <Route index path="/" element={<Contact />} />
              <Route  path="/CreateContactpage" element={<CreateContact />} />
              <Route path="/EditContactpage/:id" element={<EditContact />} />
            </Routes>
          </div>
      
      </div>
    </>
  );
}

export default App;
