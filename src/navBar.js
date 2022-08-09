import React from 'react'

function navBar() {
  return (
    <>
   
    <nav class="navbar navbar-expand-md navbar navbar-dark bg-dark" style={{height:100}}>
        <div class="container-xxl">
            <a href="intro" class="navbar-brand">
                <span class="fw-bold text-secondary">
                    <i class="bi bi-book" ></i>
                      Anima WIKI
                </span>
            </a>
        
            <botton 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </botton>


        <div class="collopase navbar-collapse justify-content-end align-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#topic" class="nav-link">About Animals</a>
                </li>
                <li class="nav-item">
                    <a href="review" class="nav-link"></a>
                </li>
                {/* <li class="nav-item">
                    <a href="#contact" class="nav-link">Get in Touch</a>
                </li>
                <li class="nav-item d-md-none">
                    <a href="#pricing" class="nav-link">Pricing</a>
                </li> */}
                <li class="nav-item ms-2 d-none d-md-inline">
                    <a href="#pricing" class="btn btn-secondary">ADD PHOTO</a>
                </li>
            </ul>
        </div>     
        </div>
    </nav>
    </>
  )
}

export default navBar