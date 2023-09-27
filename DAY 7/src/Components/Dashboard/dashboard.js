import React, { useState,useEffect } from "react";
import "./dashboard.css";
import 'boxicons/css/boxicons.min.css';
import { Link,useNavigate  } from 'react-router-dom';

import { useSelector } from "react-redux";
import { logout, selectUser } from "../../Features/userSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [name, setName] = useState('');
  
  useEffect(()=>{
	  if(user){
		  setName(user.name);
	  }else{
  
		  if(!name){
			  setName("Guest");
		  }
	  }
	  
  },[user,name]);
//   const name =user.name ;

  const handleLogout =(e) => {
	  e.preventDefault();
	  
	  dispatch(logout());
	  navigate("/");
  }

 

  

  const handleWindowResize = () => {
    const searchForm = document.querySelector("#content nav form");
    const searchButtonIcon = document.querySelector(
      "#content nav form .form-input button .bx"
    );

    if (window.innerWidth > 576) {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
      searchForm.classList.remove("show");
    }
  };

  const handleModeSwitch = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleSideMenuItemClick = (item) => {
    const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });

    item.parentElement.classList.add("active");
  };

  return (
    <div className="jj">

    
    <div className={`ok ${isSidebarHidden ? "sidebar-hidden" : ""}`}>
    
      <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
      <section id="sidebar">
		<a href="#" class="brand">		
					<i class='bx bxs-coffee' ></i>
			<span class="text">Welcome {name} !</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			
			
                {/* <li>
                    <Link to={"/take"} >
                        <i class='bx bxs-bowl-hot' ></i>
                       
                        <span class="text">Take Order</span>
                    </Link>
                </li> */}
                <li>
				<Link to={"/"} class="logout">
                        <i class='bx bxs-log-out-circle' ></i>
                        <span class="text" onClick={(e) => handleLogout(e)}>Logout</span>
                    </Link>
                </li>
		</ul>
    
	</section>
      </section>
      <section id="content">
		{/* <!-- NAVBAR --> */}
		<nav>
			
			
			<form action="#">
				
			</form>
			<input type="checkbox" id="switch-mode" hidden/>
			
				
		<ul class="side-menu top">
            <li class="active">

			<Link to={"/login"} class="logout">
                        <i class='bx bxs-log-out-circle' ></i>
                        <span class="text" onClick={(e) => handleLogout(e)}>Logout</span>
                    </Link>
            </li>
        </ul>
		</nav>
		{/* <!-- NAVBAR --> */}

		{/* <!-- MAIN --> */}
		<main>
					<h1>Dashboard </h1>
			<div class="head-title">
				<div class="left">
					<ul class="breadcrumb">
						<li>
							<a href="/dash">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<Link to={"/"} class="active" >Home</Link>
						</li>
					</ul>
				</div>
				{/* <a href="#" class="btn-download"> */}
					{/* <i class='bx bxs-cloud-download' ></i> */}
					{/* <span class="text">Download PDF</span> */}
				{/* </a> */}
			</div>

			<ul class="box-info">
				<li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>31</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>160</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>₹8543</h3>
						<p>Total Sales</p>
					</span>
				</li>
			</ul>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Recent Orders</h3>
						{/* <i class='bx bx-search' ></i> */}
						{/* <i class='bx bx-filter' ></i> */}
					</div>
					<table>
						<thead>
							<tr>
								<th>Dish</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="https://shorturl.at/dhACU"/>
									<p>Corn cheese Burger</p>
								</td>
								<td>01-10-2023</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://shorturl.at/tGHY1"/>
									<p>Dave' Triple</p>
								</td>
								<td>01-10-2023</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://shorturl.at/ijkDQ"/>
									<p>Japanese cheese masala fries</p>
								</td>
								<td>01-10-2023</td>
								<td><span class="status process">Process</span></td>
							</tr>
							
						</tbody>
					</table>
				</div>
				<div class="todo">
					<div class="head">
						<h3>Ready to Serve</h3>
						{/* <i class='bx bx-plus' ></i> */}
						{/* <i class='bx bx-filter' ></i> */}
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Token 5467 - Ready</p>
							
							<i class='bx bx-user-check' ></i>
						</li>
						<li class="not-completed">
							<p>Token 5467 - Ready</p>
							
							<i class='bx bx-user-x' ></i>
						</li>
						
					</ul>
				</div>
			</div>
		</main>
		{/* <!-- MAIN --> */}
	</section>
	{/* <!-- CONTENT --> */}
    <input
  type="checkbox"
  id="switch-mode"
  hidden
  checked={document.body.classList.contains("dark")}
  onChange={handleModeSwitch}
/>
    
      <script src="script.js"></script>
    </div>
    </div>
  );
};

export default Dashboard;
