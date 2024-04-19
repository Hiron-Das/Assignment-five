let count = 0;
document.getElementById('available-ticket-container').addEventListener('click', function (element) {
    if (count <= 3) {
        count++;
        element.target.classList.add('bg-[#1DD100]', 'text-white');
        const seatListContainer = document.getElementById('seatListContainer');
        const seatNumber = element.target.innerText;
        const seatType = 'Economy';
        const seatCost = 550;

        // adding the seat names & prices in calculating area
        const newDiv = document.createElement('div');
        newDiv.classList.add('flex', 'justify-between', 'items-center', 'font-Inter', 'text-base', 'font-normal', 'text-[#03071299]',)
        newDiv.innerHTML = `
    <p>${seatNumber}</p>
    <p>${seatType}</p>
    <p>${seatCost}</p>
    `
        seatListContainer.appendChild(newDiv);

        // increasing the selected seats number count
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText = count;

        // decreasing the value of total seats left number
        const totalSeatsValue = document.getElementById('total-seats');
        const totalSeats = totalSeatsValue.innerText;
        let totalSeatsNumber = parseInt(totalSeats);
        totalSeatsNumber--;
        totalSeatsValue.innerText = totalSeatsNumber;

        // calculating the whole ticket price
        const totalPriceValue = document.getElementById('total-price');
        const totalPriceText = totalPriceValue.innerText;
        const totalPrice = parseInt(totalPriceText);
        totalPriceValue.innerText = totalPrice + 550;
    }
    else {
        // element.target.setAttribute('disable');
        element.setAttribute("disabled", "");
    }
})

// document.getElementById('available-ticket-driver').addEventListener('click', function (element) {
//     element.target.classList.add('bg-[#1DD100]', 'text-white');
//     const seatListContainer = document.getElementById('seatListContainer');
//     const seatNumber = element.target.innerText;
//     const seatType = 'Economy';
//     const seatCost = 550;

//     // adding the seat names & prices in calculating area
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('flex', 'justify-between', 'items-center', 'font-Inter', 'text-base', 'font-normal', 'text-[#03071299]')
//     newDiv.innerHTML = `
//     <p>${seatNumber}</p>
//     <p>${seatType}</p>
//     <p>${seatCost}</p>
//     `
//     seatListContainer.appendChild(newDiv);

//     // increasing the selected seats number count
//     count++;
//     const seatCount = document.getElementById('seat-count');
//     seatCount.innerText = count;

//     // decreasing the value of total seats left number
//     const totalSeatsValue = document.getElementById('total-seats');
//     const totalSeats = totalSeatsValue.innerText;
//     let totalSeatsNumber = parseInt(totalSeats);
//     totalSeatsNumber--;
//     totalSeatsValue.innerText = totalSeatsNumber;

//     // calculating the whole ticket price
//     const totalPriceValue = document.getElementById('total-price');
//     const totalPriceText = totalPriceValue.innerText;
//     const totalPrice = parseInt(totalPriceText);
//     totalPriceValue.innerText = totalPrice + 550;
// })

// const applyBtn = document.getElementById('coupon-apply-btn');
// console.log(applyBtn);
// applyBtn.classList.add('disabled');