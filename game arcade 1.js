// JavaScript source code
//////// Example 1
    function welcomeMessage(registeredUser) {
        console.log('Welcome home, ${registeredUser}');
    }
    welcomeMessage('Sandra');
//////// Example 2
    function getMemberOrder(member, order, price) {
        console.log(`${member}'s order: ${order} for ${price}`); `
    }
    getMemberOrder('Takesha', 'Medium pizza', '\$5.00' );

//////// Example 3
    function getArea(r) {
        let result = 3.14 * r**2;
        return result
    }
    let area = getArea(12)'
    console.log(area)'

//////// Example 4
    function calcBEP(f,v,u) {
        let bep = f / (u - v);
        return bep;
    }
    let units = calcBEP(2100,32,45);
    console.log(units);

//////// Function Declaration

    function startEngine() {
        console.log('Engine Started!');
    }

    startEngine(); //Function call

    //////// Function Expression

    let startEngine = function() {
        console.log('This Expression Engine has started!');
    };

    startEngine(); //Function call

//////// Arrow Function
    let startEngine = () => {
        console.log('The Arrow Engine is Rocking!');
    };

     startEngine(); //Function call


    


