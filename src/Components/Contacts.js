import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";


const Contacts = () => {

    var [contactObjects,setContactObjects] = useState({})
    var [currentId,setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('contacts').on('value',snapshot => {
            if(snapshot.val() != null)
            setContactObjects({
                ...snapshot.val()
            })
            else
            setContactObjects({})
        })
    },[])

    const addOrEdit = obj => {
        if(currentId == '')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if(err) 
                        console.log(err)
                    else
                    setCurrentId('') 
                }
            )
        else
        firebaseDb.child(`contacts/${currentId}`).set(
            obj,
            err => {
                if(err) 
                    console.log(err) 
                else
                setCurrentId('')
            }
        )
    }

    const onDelete = key => {
        if(window.confirm('Are you sure to delete this user?')) {
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if(err) 
                        console.log(err) 
                    else
                    setCurrentId('')
                }
            )
        }
    }


    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">React CRUD</h1>
                    <p class="lead text-center">Operation CRUD with firebase (exercise)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm  {...({ addOrEdit, currentId, contactObjects })} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Adderss</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td>{contactObjects[id].address}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => {setCurrentId(id)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger">
                                                <i className="fas fa-trash-alt" onClick={() => { onDelete(id) }}></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Contacts;



