export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#hero">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#mello">
              01. About
            </a>
            <a class="nav-link" href="#">
              02. Skills
            </a>
            <a class="nav-link" href="#">
              03. Projects
            </a>
            <a class="nav-link" href="#">
              04. Contact
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
