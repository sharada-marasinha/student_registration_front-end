let navBody = document.getElementById("navBar");
function loadNav(){
    navBody.innerHTML = `
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html">University</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Manage</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="registration_form.html">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="view_as_table.html">View As Table</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="profile_list_form.html">View As Profiles</a>
                  </li>
            </ul>
        </div>
    </div>
</div>
    `;
}

loadNav();