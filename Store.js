function displayHeader() {
    const template = document.createElement('template');
    template.innerHTML = `
        <header>    
            <h1>
                <div><a class="no-link-text" href="sHome.html">
                        Ho Chi Minh campaign Museum
                        </a>
                </div>
            </h1>
            <ul class="navigation">
                <li class="button"><a href="sHome.html">Home</a>
                </li>
                <li class="button"><a href="about_us.html">About Us</a>
                </li>
                <li class="button"><a href="sProd-Cat.html">Artifacts</a>
                </li>
                <li class="button"><a href="">Contact</a>
                </li>
                <li class="button"><a href="">Review</a>
                </li>
            </ul>
        </header>
    `

    document.body.appendChild(template.content);
}

function displayHeader2() {
    const template = document.createElement('template');
    template.innerHTML = `
            <ul class="navigation">
                <li class="button"><a href="sHome-v2.php">Store Home</a>
                </li>
                <li class="button"><a href="/the33mall/About_us/about_us.html">About Us</a>
                </li>
                <li class="button"><a href="sProd-Cat.html">Products</a>
                </li>
                <li class="button"><a href="/the33mall/Contact/Contact.html">Contact</a>
                </li>
            </ul>

    `

    document.body.appendChild(template.content);
}

function displayFooter() {
    const template = document.createElement('template');
    template.innerHTML = 
    `<footer> 
        <ul class="navigation">
            <li class="button button-footer"><a href="/the33mall/login/ToS.html">Copyright</a>
            </li>
            <li class="button button-footer"><a href="/the33mall/login/ToS.html">ToS</a>
            </li>
            <li class="button button-footer"><a href="/the33mall/login/privacypolicy.html">Privacy Policy</a>
            </li>
        </ul>
        <div class="account_btn"><button><a href="../login/login.html">My account</a></button></div>
        <div class="nav_container">
            <div class="mall_logo">
                <a href="/the33mall/index.html"><h3>The33Mall</h3></a>
            </div>
            <div class="copyright_text">
                <p>&copyCopyright 2021 The 33 Holding Company</p>
            </div>
        </div>        
    </footer>`

    document.body.appendChild(template.content);
}


