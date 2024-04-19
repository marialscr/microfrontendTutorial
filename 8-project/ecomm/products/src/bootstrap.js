import faker from 'faker';

const mount = (element) => {
    let products = '';

    for (let index = 0; index < 5; index++) {
        const name = faker.commerce.productName();
        products += `<div>- ${name}</div>`
        
    }
    
    element.innerHTML = products
    // ReactDOM.render(<App/>, element)
}




/*
Context/situation #1
We are running this file in dev in isolation
We are using local index.html file which DEFINITELY has id dev-products
We want to immediatly render out app in that element

- ENSURE WE ARE IN DEVELOPMENT FIRST
- ENSURE WE ARE RUNNING IN ISOLATION - add a unique id that is NOT inside of CONTAINER (HOST) but only in our project

Context/situation #2
WE are running this file in development or production through the CONTAINER App and there's no guarantee that element with id dev-products exists
We DO NOT WANT to try to immediately render the app
*/

if(process.env.NODE_ENV === 'development'){
    const element = document.querySelector('#dev-products')

    if(element) {
        mount(element);
    }
}

/* UP TO THE CONTAINER TO DECIDE WHEN TO SHOW UP TO THE SCREEN */ 
export { mount }

