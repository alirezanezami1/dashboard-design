const Orders = [
    {
        productName : 'Javascript Tutorial',
        productNumber : '94652',
        paymentStatus : 'Due',
        status : 'Pending'
    },
    {
        productName : 'CSS Full Course',
        productNumber : '10347',
        paymentStatus : 'Refunded',
        status : 'Declined'
    },
    {
        productName : 'Flex-Box Tutorial',
        productNumber : '62479',
        paymentStatus : 'Paid',
        status : 'Active'
    },
]





Orders.forEach(order => {
    const tr = document.createElement('tr');

    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class='${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary' }'>${order.status}</td>
    <td class='primary'>Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})




const sideMenu = document.querySelector('aside')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const darkMode = document.querySelector('.dark-mode')



menuBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'block'
} )

closeBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'none'
} )


darkMode.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode')
    darkMode.querySelector('i:nth-child(1)').classList.toggle('active')
    darkMode.querySelector('i:nth-child(2)').classList.toggle('active')
})