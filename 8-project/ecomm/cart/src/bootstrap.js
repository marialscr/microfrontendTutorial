import faker from 'faker';

const mount = (element) => {
    const cartText = `You have ${faker.random.number()} itemos in your cart`;

    element.innerHTML = cartText
}

if(process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#dev-cart');

    if(element) {
        mount(element);
    }

}

export { mount }