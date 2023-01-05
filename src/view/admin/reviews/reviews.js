import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { getAllReviews } from "../../../actions/reviewActions";
import SideBar from "../../../shared/sidenav/sideNav";
import { updateReviewAction } from "../../../actions/reviewActions";
import "./reviews.css";
const ReviewsPage = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllReviews());
  }, [getAllReviews]);
  const reviews = useSelector((state) => state.Reviews);
  const handleUpdate = ({ id, action }) => {
    dispatch(updateReviewAction(action, id));
  
  };


  return (
    <>
      <div className="review_page_main" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>Reviews</h2>
            {reviews.map((review) => {
              return (
                <div>
                  <div className="reviews_sections">
                    <div className="reviews_related_info">
                      <div className="review_creator">{review.user_name}</div>
                      <div className="review_product">
                        {review.product_title}
                      </div>
                    </div>
                    <div className="reviews_content">
                      <div className="review_content">
                        <div>
                          Rate :
                          <Rating
                            allowHover={false}
                            readonly={true}
                            initialValue={review.rate}
                          />
                        </div>
                        <div>{review.content}</div>
                      </div>
                      <div className="review_action">
                        <div className="review_action_icon">
                          <div className="reveiw_action_tag">Action</div>
                          <div
                            className="reveiw_action_type"
                            style={{ color: review.action ===true ? "green" : "red" }}
                          >
                            {review.action===true ? "Seen" : "UnSeen"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reviews_actions">
                    <button
                      className="review_decline"
                      onClick={() =>
                        handleUpdate({ id: review._id, action: false })
                      }
                    >
                      Decline
                    </button>
                    <button
                      className="review_accept"
                      onClick={() =>
                        handleUpdate({ id: review._id, action: true })
                      }
                    >
                      Accept
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
