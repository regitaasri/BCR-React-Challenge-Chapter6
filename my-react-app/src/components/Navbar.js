import "./App.css"

const Navbar = ()=>{

    return (
        <>
            <nav className="global-container bg-grey">
                <span className="logo"></span>
                <button id="sidebar-menu" class="btn-burger-menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvasRight">
                    <img src="/img/icon-menu.svg" width="24" height="24" alt="" />
                </button>
            </nav>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">BCR</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="flex-column gap-16 no-mp">
                    <li><a class="link-no-decoration" href="#">Our Services</a></li>
                    <li><a class="link-no-decoration" href="#">Why Us</a></li>
                    <li><a class="link-no-decoration" href="#">Testimonial</a></li>
                    <li><a class="link-no-decoration" href="#">FAQ</a></li>
                    <li><button class="btn btn-success">Register</button></li>
                </ul>
            </div>
          </div>
        </>
    )
}

export default Navbar;