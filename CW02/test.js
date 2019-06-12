alert ('Begin');

who = prompt ('Who are you?')

if (who) {	

	if ( who === 'admin') {

		alert ('Admin is here!!!');		
		pass = prompt ('Enter password')

		if (pass) {

			if (pass === 'Black Lord') {
			alert ('Welcome again, my Lord !!!')

			}

			else {
				alert ('Wrong pass');
			}
		}

		else {
			alert ('Access denied');
		}
	}

	else {
		alert ('I don`t know you');
	}
}

else {
	alert ('Access denied');
}