import React from "react";

const Card = () => {
  return (
    <>
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqKOjITeKJWxHV_McugUTrv2b1aMu4uX_RQ&s" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti dolorem iusto velit ullam veritatis sapiente numquam
                  sit dicta in.
                </p>
                <hr class="my-4 line"></hr>
                <a href="#" class="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;