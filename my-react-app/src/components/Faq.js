import "./App.css"

const faqSection= ()=>{
    return (
        <section class="global-container">
        <div class="row mt-5">
          <div class="col-6">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="col-6">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum pariatur voluptas omnis explicabo aut! Accusamus veniam quisquam facere praesentium neque ullam, eaque necessitatibus inventore voluptatum, libero sint perferendis quasi.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum pariatur voluptas omnis explicabo aut! Accusamus veniam quisquam facere praesentium neque ullam, eaque necessitatibus inventore voluptatum, libero sint perferendis quasi.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum pariatur voluptas omnis explicabo aut! Accusamus veniam quisquam facere praesentium neque ullam, eaque necessitatibus inventore voluptatum, libero sint perferendis quasi.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum pariatur voluptas omnis explicabo aut! Accusamus veniam quisquam facere praesentium neque ullam, eaque necessitatibus inventore voluptatum, libero sint perferendis quasi.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum pariatur voluptas omnis explicabo aut! Accusamus veniam quisquam facere praesentium neque ullam, eaque necessitatibus inventore voluptatum, libero sint perferendis quasi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}

export default faqSection;