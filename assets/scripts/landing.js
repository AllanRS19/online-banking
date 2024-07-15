const identifySelectedProducts = () => {
    
    let productTemplate = ``;
    
    if (location.hash == "#checking-products") {
        productTemplate = `
            <div class="product-detail">

                <div class="product-heading-and-body">
                    <div class="product-heading">
                        <h2>One Deposit Checking</h2>
                        <p>A simple solution for everyday banking</p>
                    </div>
                    <div class="product-body">
                        <div class="product-feature">
                            <h4>Overdraft</h4>
                            <span>Get extra time to cover overdrafts with Financeasy Peace of Mind</span>
                        </div>
                        <div class="product-feature">
                            <h4>Monthly Maintenance Fee</h4>
                            <span>$9.99</span>
                        </div>
                    </div>
                </div>

                <div class="product-decision">
                    <button>Open Account</button>
                    <a href="#">Account details</a>
                </div>

            </div>

            <div class="product-detail">

                <div class="product-heading-and-body">
                    <div class="product-heading">
                        <h2>Citizens Private Client</h2>
                        <p>Higher security for high businesses</p>
                    </div>
                    <div class="product-body">
                        <div class="product-feature">
                            <h4>Overdraft</h4>
                            <span>Get extra time to cover overdrafts with Financeasy Peace of Mind</span>
                        </div>
                        <div class="product-feature">
                            <h4>Monthly Maintenance Fee</h4>
                            <span>$0.00 or $25.00</span>
                        </div>
                    </div>
                </div>

                <div class="product-decision">
                    <button>Open Account</button>
                    <a href="#">Account details</a>
                </div>

            </div>

            <div class="product-detail">

                <div class="product-heading-and-body">
                    <div class="product-heading">
                        <h2>Student Checking</h2>
                        <p>Under 25, and ready to start your financial journey</p>
                    </div>
                    <div class="product-body">
                        <div class="product-feature">
                            <h4>Overdraft</h4>
                            <span>No overdraft fees</span>
                        </div>
                        <div class="product-feature">
                            <h4>Monthly Maintenance Fee</h4>
                            <span>$0.00</span>
                        </div>
                    </div>
                </div>

                <div class="product-decision">
                    <button>Open Account</button>
                    <a href="#">Account details</a>
                </div>

            </div>
        `;
    }
    
    if (location.hash == "#savings-products") {
        productTemplate = `
            <div class="product-detail">
                <div class="product-heading-and-body">
                    <div class="product-heading">
                        <h2>One Deposit Savings</h2>
                        <p>A simple solution for everyday banking and saving your money</p>
                    </div>
                    <div class="product-body">
                        <div class="product-feature">
                            <h4>Features</h4>
                            <span>Bank securely with 24/7 fraud monitoring</span>
                        </div>
                        <div class="product-feature">
                            <h4>Monthly Maintenance Fee</h4>
                            <span>$4.99</span>
                        </div>
                    </div>
                </div>

                <div class="product-decision">
                    <button>Open Account</button>
                    <a href="#">Account details</a>
                </div>

            </div>

            <div class="product-detail">

                <div class="product-heading-and-body">
                    <div class="product-heading">
                        <h2>Citizens Quest Savings</h2>
                        <p>A relationship account with extra features, without extra fees</p>
                    </div>
                    <div class="product-body">
                        <div class="product-feature">
                            <h4>Features</h4>
                            <span>Better deposit rates - 25% higher</span>
                        </div>
                        <div class="product-feature">
                            <h4>Monthly Maintenance Fee</h4>
                            <span>No Monthly Maintenance</span>
                        </div>
                    </div>
                </div>

                <div class="product-decision">
                    <button>Open Account</button>
                    <a href="#">Account details</a>
                </div>

            </div>

            <div class="product-detail">

                <div class="product-heading-and-body">
                    <div class="product-heading">
                        <h2>Citizens Private Client</h2>
                        <p>Higher savings rates, fewer fees, and a personalized plan to help you work toward your financial goals.</p>
                    </div>
                    <div class="product-body">
                        <div class="product-feature">
                            <h4>Overdraft</h4>
                            <span>No overdraft fees</span>
                        </div>
                        <div class="product-feature">
                            <h4>Monthly Maintenance Fee</h4>
                            <span>$0.00</span>
                        </div>
                    </div>
                </div>

                <div class="product-decision">
                    <button>Open Account</button>
                    <a href="#">Account details</a>
                </div>

            </div>
        `;
    }

    if (location.hash == "#credit-card-products") {
        productTemplate = `
            <div class="product-detail">
                <h1>This is credit cards</h1>
            </div>
        `;
    }

    productDetailsWrapper.innerHTML = productTemplate;
}

window.addEventListener('load', identifySelectedProducts);

window.addEventListener('hashchange', identifySelectedProducts);

// Products Toggler
const productDetailsWrapper = document.querySelector('.products-details-wrapper');
const productsToggler = document.querySelectorAll('.product-toggler');

productsToggler.forEach(prodTog => prodTog.addEventListener('click', function() {
    location.hash = this.getAttribute('urlParam');
    productsToggler.forEach(prodTog => prodTog.classList.remove('active'));
    this.classList.add('active');
}));

// Navbar Toggler
const navbarToggleBtn = document.querySelector('.navbar-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');

const navbarToggleFunc = () => {
    navbarToggleBtn.classList.toggle('active');
    navbarNav.classList.toggle('active');
}

navbarToggleBtn.addEventListener('click', navbarToggleFunc);