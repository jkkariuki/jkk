<div className="dropdown show">
  <Link className="btn btn-secondary  dropdown-toggle" to="/" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Jk
  </Link>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <Link className={window.location.pathname === "/" ||
          window.location.pathname === "/about"
            ? "active"
            : "dropdown-item"} to="/about">About</Link>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>