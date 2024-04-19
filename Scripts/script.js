let count = 0;
let totalPrice = 0;
const applyButton = document.getElementById('coupon-apply-btn');
applyButton.disabled = true;

document.getElementById('available-ticket-container').addEventListener('click', function (element) {
    // Check if the clicked element has the selected class
    if (element.target.classList.contains('selected')) {
        // Remove the selected class from the clicked element
        element.target.classList.remove('bg-[#1DD100]', 'text-white', 'selected');

        // Remove the seat from the list of selected seats
        const seatListContainer = document.getElementById('seatListContainer');
        const seatNumber = element.target.innerText;
        const selectedSeat = Array.from(seatListContainer.children).find(child => child.innerText.includes(seatNumber));
        if (selectedSeat) {
            seatListContainer.removeChild(selectedSeat);
            count--;
        }

        // Update the selected seats count display
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText = count;

        // Increase the total available seats count
        const totalSeatsValue = document.getElementById('total-seats');
        let totalSeatsNumber = parseInt(totalSeatsValue.innerText);
        totalSeatsNumber++;
        totalSeatsValue.innerText = totalSeatsNumber;

        // Update the total price
        const seatCost = 550;
        totalPrice -= seatCost;
        const totalPriceValue = document.getElementById('total-price');
        totalPriceValue.innerText = totalPrice;
    }
    else {
        // clicked seat selected logic
        if (count < 4) {
            count++;
            element.target.classList.add('bg-[#1DD100]', 'text-white', 'selected');
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
            totalPrice += seatCost;
            const totalPriceValue = document.getElementById('total-price');
            totalPriceValue.innerText = totalPrice;

        }
        else {
            element.setAttribute("disabled", "");
        }
    }
    // check if atleast four seats are selected to enable the apply button
    if (count >= 4) {
        applyButton.disabled = false;
    }
    else {
        applyButton.disabled = true;
    }

    // clear the discounted section if less than four seat selected
    clearDiscountedPriceSection()
});

// function to clear the discounted price section
function clearDiscountedPriceSection() {
    const discountedPriceContainer = document.getElementById('discounted-price-container');
    discountedPriceContainer.innerHTML = '';
}

// function to get total price
function getTotalPrice() {
    return totalPrice;
}


// calculating the discount according to coupon code & sets the discounted price under the total price section
document.getElementById('coupon-apply-btn').addEventListener('click', function () {
    const discountedPriceContainer = document.getElementById('discounted-price-container');
    const totalPrice = getTotalPrice();


    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value;

    let discountedPrice = 0;
    if (count >= 4 && couponInputValue === 'new15') {
        const discount = (totalPrice * 15 / 100);
        discountedPrice = totalPrice - discount;
    }
    else if (count >= 4 && couponInputValue === 'couple20') {
        const discount = (totalPrice * 20 / 100);
        discountedPrice = totalPrice - discount;
    }
    else {
        alert('Please enter a valid coupon code!')
        return;
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add('flex', 'justify-between', 'items-center', 'font-Inter', 'text-base', 'font-medium', 'text-[#030712]');
    newDiv.innerHTML = `
    <p>Discounted Price</p>
    <p>BDT <span>${discountedPrice}</span> </p>
    `;
    discountedPriceContainer.innerHTML = '';
    discountedPriceContainer.appendChild(newDiv);

    //  Clear the coupon input field after applying the coupon code
    couponInput.value = '';
});

// confirmation section
document.getElementById('form-submit-btn').addEventListener('click', function (event) {
    const requiredElements = document.querySelectorAll('input');

    let allFieldsFilled = true;
    requiredElements.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            allFieldsFilled = false;
            return;
        }
    });

    if (!allFieldsFilled) {
        alert('Please fill in all required fields.');

        event.preventDefault();
        return;
    }
    if (count === 0) {
        alert('Please select a seat!');

        event.preventDefault();
        return;
    }

    const frontLayoutContainer = document.getElementById('front-layout-container');
    frontLayoutContainer.classList.add('hidden');
    const successContainer = document.getElementById('success-container');
    successContainer.classList.remove('hidden');

    clearInputFields()

});

function clearInputFields() {
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        input.value = '';
    });
}

document.getElementById('continue-button').addEventListener('click', function () {
    const successContainer = document.getElementById('success-container');
    successContainer.classList.add('hidden');
    const frontLayoutContainer = document.getElementById('front-layout-container');
    frontLayoutContainer.classList.remove('hidden');
});