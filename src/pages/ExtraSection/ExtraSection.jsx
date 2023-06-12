import React from "react";
import './ExtraSection.css'

const ExtraSection = () => {
  return (
    <div className="grid grid-cols-2"> 
      <div class="wrapper">
        <div class="image-wrapper">
          <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1583&q=80" />
        </div>
        <div class="header-wrapper">
          <h1>Poster Art</h1>
          <h1>See Project</h1>
        </div>
      </div>
      <div class="wrapper">
        <div class="image-wrapper">
          <img src="https://i.ibb.co/25B84jS/photography-Photo.jpg" />
        </div>
        <div class="header-wrapper">
          <h1>Shot Night</h1>
          <h1>See Project</h1>
        </div>
      </div>
      <div class="wrapper">
        <div class="image-wrapper">
          <img src="https://i.ibb.co/KDxVvY2/photography-Photo2.jpg" />
        </div>
        <div class="header-wrapper">
          <h1>Shot pic from Ground</h1>
          <h1>See Project</h1>
        </div>
      </div>

      <div class="wrapper">
        <div class="image-wrapper">
          <img
            class="book-design-image"
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1306&q=80"
          />
        </div>
        <div class="header-wrapper">
          <h1>Book Design</h1>
          <h1>See Project</h1>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
