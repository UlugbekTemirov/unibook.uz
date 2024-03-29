import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="about-unibook-section">
        <div className="container">
          <h1>
            About <Link to="#">Unibook.uz</Link>
          </h1>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://picsum.photos/500/300?random=1"
                alt="randomPicture"
              />
            </div>
            <div className="col-lg-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </div>
          </div>
        </div>
      </div>
      <div className="about-team">
        <div className="container">
          <h1>About our team</h1>
          <div className="row">
            <div className="col col-xs-6">
              <div className="card">
                <div className="card-header">Temiov Ulug'bek</div>
                <div className="card-body">
                  <img
                    src="https://picsum.photos/500/300?random=2"
                    alt="team-member"
                  />
                </div>
              </div>
            </div>
            <div className="col col-xs-6">Murodov Mirshod</div>
            <div className="col col-xs-6">Samandarov Sunnatbek</div>
            <div className="col col-xs-6">Malikov Abdusamad</div>
            <div className="col col-xs-6">Murodov Dilshod</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
