var flag = 0;

function handleSignUp()
{
	var email = document.getElementById('email').value;
	var password = document.getElementById('pass').value;

	if (email.length < 2)
	{
		alert('Please enter an e-mail address.');
		return;
	}
	if (password.length < 2)
	{
		alert('Please enter a password.');
		return;
	}

	//Need to include creating the account in firebase ans such
}