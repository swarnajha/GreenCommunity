import React from "react";
import "./Contact.css";
export const Contact = () => {
  return (
    <body>
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">kestopur</div>
              <div class="text-two">kolkata</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+91 6290629886</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">greencommunity@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>Write your message here...</p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name"></input>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email"></input>
            </div>
            <div class="input-box message-box">
              
            </div>
            <div class="button">
              <input type="button" value="Send Now" ></input>
            </div>
          </form>
        </div>
        </div>
      </div>
    </body>
     
  );
};
