let loggedIn = true 
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 
    'Tomato']

if (loggedIn) {
    for (let item of cart) {
        console.log(item);
    }
}
else {
    console.log("You need to be logged in to see your cart")
}