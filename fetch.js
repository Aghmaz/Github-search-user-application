
	

	fetch('./fetchapi.txt')
	.then((res)=>res.json())
	.then((data)=>{
		console.log(data,"data");
	for (var i=0; i<data.length; i++){
		document.getElementById("card").innerHTML += `
		<div class="container d-flex justify-content-center  mt-5">
	   
		<div class="card p-3 py-4">
			<div class="text-center"> 
			<img src="./usr.png" width="100" class="rounded-circle" style="background-color:pink">
				<h3 class="mt-2"> ${data[i].name} </h3>
				<span class="mt-1 clearfix"> ${data[i].username} </span>
				
				<div class="row mt-3 mb-3">
				
				  <div class="col-md-6">
					<h5> User ID </h5>
					<span class="num"> ${data[i].id}</span>
				  </div>
				  <div class="col-md-6">
				  <h5>Website</h5>
					<span class="num"> ${data[i].website}</span>
				  </div>
				  
				
				</div>
				
				<hr class="line">
				
				<small class="mt-4"> ${data[i].phone}</small>
				  <div class="social-buttons mt-5"> 
				   <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> 
				   <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> 
				   <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> 
				  </div>
				  
				 <div class="profile mt-5">
				 <a href="${"https://github.com/aghmaz"} ">
				 <button class="profile_button px-5">View profile</button>
	</a>
			</div>
				   
			</div>
		</div>
	</div>
		`
	}
	
	})

	fetch('./fetchpostapi.txt')
	.then((res)=>res.json())
	.then((dataP)=>{
		console.log(dataP,"dataP");
	for (var i=0; i<dataP.length; i++){
		document.getElementById("card1").innerHTML += `
		<div class="container d-flex justify-content-center  mt-5">
	   
		<div class="card p-3 py-4">
			<div class="text-center"> 
			<img src="./portfolio3.jpg" width="100" class="rounded-circle" style="background-color:pink">
				<h3 class="mt-2"> ${dataP[i].body} </h3>
				<span class="mt-1 clearfix"> ${dataP[i].title} </span>
				
				<div class="row mt-3 mb-3">
				
				  <div class="col-md-6">
					<h5> User ID </h5>
					<span class="num"> ${dataP[i].id}</span>
				  </div>
				  <div class="col-md-6">
				  <h5>Website</h5>
					<span class="num"> ${dataP[i].userId}</span>
				  </div>
				  
				
				</div>
				
				<hr class="line">
				
				<small class="mt-4"> </small>
				  <div class="social-buttons mt-5"> 
				   <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> 
				   <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> 
				   <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> 
				  </div>
				  
				 <div class="profile mt-5">
				 <a href="${"https://github.com/aghmaz"} ">
				 <button class="profile_button px-5">View profile</button>
	</a>
			</div>
				   
			</div>
		</div>
	</div>
		`
	}
	
	})

