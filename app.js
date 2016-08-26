function changeContent () {
	console.log("loaded!")
	function Contact( firstName, lastName, email, phone, address, city) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.city = city;
	}

	var contactArray = []
	var counter = 0


	document.getElementById("addButton").onclick = function (event) {
		event.preventDefault()
		// to obtain the input value entered by user

		var formName = document.getElementById("form_name").value;
		console.log(formName)
		var formLast = document.getElementById("form_lastName").value;
		var formEmail = document.getElementById("form_email").value;
		var formPhone = document.getElementById("form_phone").value;
		var formAddress = document.getElementById("form_streetAddress").value;
		var formCity = document.getElementById("form_city").value;
		
		if(formName != "" && formLast != "" && formEmail !=""){
			// variable to create a new contact object

			var newContact = new Contact(formName, formLast, formEmail, formPhone, formAddress, formCity);
			console.log("yiss", newContact)
			
			// document.getElementById("contactInfo").innerHTML = newContact.firstName + " " + newContact.lastName;

			contactArray.push(newContact)
			console.log(contactArray)

			$("#contactContainer").append("<li>" + "<a id='"+ counter +"'>" + newContact.firstName + " " + newContact.lastName + "</a>" + "</li>")
			counter++

			document.getElementById("form_name").value = "";
			document.getElementById("form_lastName").value="";
			document.getElementById("form_email").value="";
			document.getElementById("form_phone").value="";
			document.getElementById("form_streetAddress").value="";
			document.getElementById("form_city").value="";
		}
		else{
			alert("Please enter a valid name, surname and email")
		}

	}

	$("#contactContainer").on("click", "a",function(event){
		event.preventDefault
		console.log("ID OF ELEMENT CLICKED:" ,event.target.id)
		document.getElementById("nameInfo").innerHTML = contactArray[event.target.id].firstName + " " + contactArray[event.target.id].lastName
		document.getElementById("emailInfo").innerHTML = contactArray[event.target.id].email
		document.getElementById("phoneInfo").innerHTML = contactArray[event.target.id].phone
		document.getElementById("addressInfo").innerHTML = contactArray[event.target.id].address
		document.getElementById("cityInfo").innerHTML = contactArray[event.target.id].city

	});

	
	// $("#addButton").keyup(function (){
	// 	console.log("nooo")
	// 	// document.getElementById("#contactInformation").value = ""
	// 	$("#contact-form").empty();

	// });



}

window.onload = changeContent 





