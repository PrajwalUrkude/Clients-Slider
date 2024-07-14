(function () {

    const customerimage = document.querySelector("#customerimg");
    const customername = document.querySelector("#customername");
    const customertext = document.querySelector("#customertext");
    const buttons = document.querySelectorAll(".btn");

    let index = 0;
    let Customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let image = `./Img/${img}.jpg`;
        let customer = new Customer(image, name, text);
        Customers.push(customer);
    }

    createCustomer(3, 'M.S.Dhoni', 'M.S. Dhoni has been a constant source of inspiration with his outstanding leadership and performance.');
    createCustomer(1, 'Rachin Ravindra', 'Rachin Ravindra stands out with his versatile all-round abilities and calm demeanor.');
    createCustomer(2, 'Shubhman Gill', 'Shubhman Gill impresses everyone with his elegant batting style and consistency on the field.');
    createCustomer(4, 'Virat Kohli', 'Virat Kohli captivates fans with his aggressive batting and unwavering determination.');
    createCustomer(5, 'Ruturaj Gaikwad', 'Ruturaj Gaikwad impresses with his composed batting and strategic approach to the game.');
    createCustomer(6, 'Ravindra Jadeja', 'Ravindra Jadeja dazzles with his exceptional fielding, sharp bowling, and reliable batting.');
    createCustomer(7, 'Sachin Tendulkar', 'Sachin Tendulkar remains a cricket legend, celebrated for his unparalleled skill and sportsmanship.');

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (e.currentTarget.classList.contains("prevBtn")) {
                index--;
                if (index < 0) {
                    index = Customers.length - 1;
                }
            } else if (e.currentTarget.classList.contains("nextBtn")) {
                index++;
                if (index === Customers.length) {
                    index = 0;
                }
            }

            customerimage.src = Customers[index].img;
            customertext.textContent = Customers[index].text;
            customername.textContent = Customers[index].name;
        });
    });

})();
