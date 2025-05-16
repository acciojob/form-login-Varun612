function getFormvalue() {
    //Write your code here
	firstName=document.getElementsByName('fname')[0].value;
	lastName=document.getElementsByName('lname')[0].value;
	alert(`${firstName} ${lastName}`)
}
