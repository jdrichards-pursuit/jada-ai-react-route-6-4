

 
    <!-- Wraps everything except footer to push footer to the bottom of the page if there is little content -->
    <main class="page-wrapper">
      <!-- Navbar -->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
      <header
        class="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
      >
        <div class="container px-3">
          <a href="index.html" class="navbar-brand pe-3">
            <!-- <img src="assets/img/logo.svg" width="47" alt="Silicon" /> -->
            Alloy
          </a>
          <div id="navbarNav" class="offcanvas offcanvas-end bg-dark">
            <div class="offcanvas-header border-bottom border-light">
              <h5 class="offcanvas-title text-white">Menu</h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a href="components/typography.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                  <a href="docs/getting-started.html" class="nav-link"
                    >Card Generator</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <!-- Hero -->
      <section
        class="bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4"
        style="
          background-image: url(assets/img/landing/saas-3/hero/hero-bg.jpg);
        "
        data-bs-theme="dark"
      >
        <div
          class="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5"
        >
          <div class="row pt-3 pb-2 py-md-4">
            <!-- Text -->
            <div
              class="col-xl-7 col-md-6 pt-lg-2 text-center text-md-start mb-4 mb-md-0"
            >
              <h1 class="display-3 pb-2 pb-sm-3">
                Ask Alloy Anything You Would Like To Know
              </h1>
              <p
                class="text-body fs-lg d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5"
              >
                Odio venenatis a, non egestas ut ultrices ultrices quis orci
                ipsum eu tellus tempor sed amet mauris pellentesque ut vitae.
              </p>
<form action="">
              <div class="mb-4">
                <label for="textarea-input" class="form-label">Textarea</label>
                <textarea class="form-control" id="textarea-input" rows="5">
Hello World!</textarea
                >
              </div>
              <div
                class="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0"
              >
                <button
                  class="btn btn-lg btn-secondary shadow-primary me-3 me-sm-4"
                  >Submit Query</button
                >
            </form>
               
              </div>
            </div>

            <!-- Parallax gfx -->
            <div class="col-xl-5 col-md-6 d-md-flex justify-content-end">
              <div
                class="parallax mx-auto ms-md-0 me-md-n5"
                style="max-width: 675px"
              >
                <div class="parallax-layer zindex-2" data-depth="0.1">
                  <img style="border-radius:20px" src="brain.webp" alt="Card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>




