var e,p1,p2,un,o;
function sendotptoemail()
{
	
}

function signupuser()
{
	e = document.getElementById("email").value;
	p1 = document.getElementById("password").value;
	p2 = document.getElementById("confirmpassword").value;
	un = document.getElementById("username").value;
	if(e == "" || p1=="" || p2 == "" || un == "")alert("Fill all fields.");
	else if(e.endsWith("@iiitb.org")==true)
	{
		if(p1 == p2)
		{
				//window.location.href = "html/login.html";
		}
		else
		{
			 alert("Password did not match!");
			 document.getElementById("password").value = "";
			 document.getElementById("confirmpassword").value = "";
		}
		
	}
	else
	{
		document.getElementById("email").value = "";
		alert("Enter valid email!");
	}
}
