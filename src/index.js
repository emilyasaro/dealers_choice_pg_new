import axios from 'axios';

const customerList = document.querySelector('#customer-list');
const monthList = document.querySelector('#month-list');
const orderList = document.querySelector('#order-list');


// const renderCustomers = (customers) => {
//   const htmlResult = customers.map( customer => `
// <li>
//   <a href='#${customer.id}'>
//     ${customer.name}
//   </a>
// </li>`).join('');
// customerList.innerHTML = htmlResult;
// }

const renderMonths = (months) => {
  const htmlResult = months.map( month => `
<li>
  <a href='#${month.id}'>
    ${month.name}
  </a>
</li>`).join('');
monthList.innerHTML = htmlResult;
}

const renderOrders = (orders) => {
  const htmlResult = orders.map( order => `
<li>
  <a href='#${order.id}'>
    ${order.name}
  </a>
</li>`).join('');
orderList.innerHTML = htmlResult;
}

const init = async() => {
  try {
    const months = (await axios.get('/api/months')).data;
    // const customers = (await axios.get('/api/cutomers')).data;
    // const orders = (await axios.get('/api/orders')).data;

    renderMonths(months);
    // renderCustomers(customers);
    // renderOrders(orders);
  } catch (error) {
    console.log(error)
  }
}

// window.addEventListener('hashchange', () => {
//   console.log(window.location.hash.slice(1));
// })
init()
