import React from "react";
import ContactForm from "./ContactForm";
// import firebaseDb from "../firebase";


const Contacts = () => {

    // const addOrEdit = obj => {
    //     firebaseDb.child('contacts').push(
    //         obj,
    //         err => {
    //             if(err) 
    //             console.log(err) 
    //         }
    //     )
    // }


    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">Contact Register</h1>
                    <p class="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {/* <ContactForm  addOrEdit={addOrEdit} /> */}
                    <ContactForm  />
                </div>
                <div className="col-md-7">
                    <div>List of contacts</div>
                </div>
            </div>
        </>
    );
}

export default Contacts;



