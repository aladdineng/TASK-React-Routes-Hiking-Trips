import React from "react";
import tripsData from "../tripsData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TripDetail() {
  const { tripId } = useParams();
  const selectedTrip = tripsData.find((trip) => {
    if (trip.id == tripId) {
      return trip;
    }
  });

  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {selectedTrip.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={selectedTrip.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {selectedTrip.city}
                  <br />
                  Length : {selectedTrip.length1}Km
                  <br />
                  Rating : {selectedTrip.rating}
                  <br />
                  Difficulty : {selectedTrip.difficulty}
                  <br />
                  Details : {selectedTrip.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
