<template>
    <!--NAVBAR start-->  
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="#" style="font-size: 25px;">ALLIANZ</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li></li>
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                 
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Info
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Contact</a>
                  </li>
              </ul>
              <form class="d-flex" role="search">
                  <button class="btn btn-outline-success" type="submit">Sign Up</button>
              </form>
              </div>
          </div>
      </nav><br><br><br>
      <!--NAVBAR end-->
      <!--Signup card start-->
      <center>
      <div class="card shadow-lg p-10 mb-5 bg-body-tertiary rounded" data-bs-theme="dark" style="width: 50%; max-width: 40rem; border-radius: 60px;">
              <img src="" class="card-img-top" alt="">
          <div class="card-body">
              <h1 class="card-title">Sign Up</h1>
              <p class="card-text">Stay updated on your professional world.</p><br>
                  <form action="#">
                      <input class="card" type="text" id="fname" name="fname" placeholder="Username..."><br>
                      <input class="card" type="text" id="email" name="email" placeholder="Email..."><br>
                      <input class="card" type="text" id="password" name="password" placeholder="Password..."><br>
                      <input class="card" type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="Confirm Password..."><br>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Role
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Applicant</a></li>
                                    <li><a class="dropdown-item" href="#">Admin</a></li>
                                    <li><a class="dropdown-item" href="#">Agents</a></li>
                                </ul>
                            </div><br><br>
                      <button class="btn btn-primary" type="submit" value="submit">Sign Up Now!</button>
                  </form><br><br>
          </div>
      </div>
      </center>
      <!--Signup card end-->

</template>