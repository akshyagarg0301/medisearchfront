import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
function Card(){
    return (
        <div class="first">
        <div class="container">
        <div class="row">
        <div class="col">
        <div class="card second text-center text-white bg-dark mb-3">
            <div class="card-body">
                <h5 class="card-title">Personal</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className="btn btn-danger " to="/UserRegister">Register</Link>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card second text-center text-white bg-dark mb-3">
            <div class="card-body">
                <h5 class="card-title">Business</h5>
                <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className="btn btn-danger " to="/BusRegister">Register</Link>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
} 
export default Card;