let user = {}; // a user without "address" property

alert(user.address.street); // Error!




// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null





let user = {};

alert(user.address ? user.address.street : undefined);





let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;





let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);




let user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)




let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)






let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined







// ReferenceError: user is not defined
user?.address;




// ReferenceError: user is not defined
user?.address;




// ReferenceError: user is not defined
user?.address;




let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined




let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"