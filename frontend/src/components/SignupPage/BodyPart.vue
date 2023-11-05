<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class="wrap d-md-flex">
                        <div class="img" :style="imgStyle"></div>

                        <div class="login-wrap p-4 p-md-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign Up</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a href="#"
                                            class="social-icon d-flex align-items-center justify-content-center"><span
                                                class="fa fa-facebook"></span></a>
                                        <a href="#"
                                            class="social-icon d-flex align-items-center justify-content-center"><span
                                                class="fa fa-twitter"></span></a>
                                    </p>
                                </div>
                            </div>
                            <form @submit.prevent="save">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Email</label>
                                    <input type="text" class="form-control" placeholder="Username" v-model="email" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="confirm">Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirm" required>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign
                                        Up</button>
                                </div>
                                <div class="form-group">
                                    <a href="/" class="form-control btn btn-primary rounded submit px-3">Home</a>
                                </div>
                                <div class="form-group d-md-flex">
                                    <div class="w-50 text-left">
                                        <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center">Already a member? <a data-toggle="tab" href="/V_Signin">Sign In</a></p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>

import axios from 'axios';
import { SHA256 } from 'crypto-js'; // Import the SHA256 function

export default {
    data() {
        return {
            imgStyle: {
                backgroundImage: "url(" + require('@/assets/log/images/logo.png') + ")",
                backgroundSize: "contain",
                backgroundColor: "rgba(1,58,122,255)"
            },
            email: "",
            password: "",
            confirm: "",
            rememberMe: false
        };
    },
    methods: {
        async save() {
            try {
                const hashedpassword = SHA256(this.password).toString(); // Hash the password
                const ins = await axios.post('save', {
                    email: this.email,
                    password: hashedpassword,
                    type: 1,
                });
                this.email =""
                this.password ="";
                this.confirm ="";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>