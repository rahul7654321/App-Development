import React from "react";
import '../Assert/css/login.css';
import { Link } from "react-router-dom";

const Reg=()=>{
    return (

        <div className="mian">
           <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name"/>
				</div>
                <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="E-mail"/>
				</div>

				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Create Password"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Re-enter Password"/>
				</div>
                <Link to='/'>
                    
				<button class="button login__submit">
					<span class="button__text">Create New Account</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
                </Link>	

                <br/>
                

			</form>
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>


        </div>
    )
}

export default Reg;
