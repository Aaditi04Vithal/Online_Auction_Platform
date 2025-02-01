
// the main functionality:

document.addEventListener("DOMContentLoaded", () => {
  // Select all item containers
  const items = document.querySelectorAll(".item");

  // Loop over each item to add functionality
  items.forEach((item) => {
    const highestBidEl = item.querySelector(".highestBid"); // Current highest bid element
    const maxRange = parseInt(item.querySelector(".maxrange").textContent.replace(/[^\d.-]/g, '')); // Max range for each item
    const placeBidButton = item.querySelector(".place-bid"); // "Place a Bid" button
    
    let highestBid = parseInt(highestBidEl.textContent.replace(/[^\d.-]/g, '')); // Current highest bid value
    
    // Automatic Bid Increment 
    const autoIncrement = setInterval(() => {
      if (highestBid < maxRange) {
        highestBid += 10; // Increment bid by 10
        highestBidEl.textContent =`₹${highestBid}`; // Update the displayed highest bid
        item.setAttribute("data-highest-bid", highestBid); // Update the data attribute for current highest bid
      } else {
        // Stop the increment when the highest bid exceeds the max range
        clearInterval(autoIncrement);
      }
    }, 3000); // Update the bid every 3 seconds

      // Handle the "Place a Bid" button click

      placeBidButton.addEventListener("click", () => {
        const itemData = {
          image: item.querySelector("img").src,
          highestBid: highestBidEl.textContent
        };
        localStorage.setItem("selectedItem", JSON.stringify(itemData));
        window.location.href = "user-details.html";
      });
    });
  });


  
    // document.addEventListener("DOMContentLoaded", () => {
    //   // Retrieve the current highest bid from localStorage
    //   const currentBid = parseInt(localStorage.getItem("highestBid"));
    //   const currentBidEl = document.getElementById("current-bid"); // Display the highest bid
    //   const userBidInput = document.getElementById("user-bid"); // User's bid input field
    //   const submitBidButton = document.getElementById("submit-bid"); // Submit button
    //   const errorMessage = document.getElementById("error-message"); // Error message element
    
    //   // Display the current highest bid on the user-details page
    //   currentBidEl.textContent = `₹${currentBid}`;
    
    //   // Handle submit bid logic
    //   submitBidButton.addEventListener("click", () => {
    //     const userBid = parseInt(userBidInput.value); // User's bid
    
    //     if (userBid > currentBid) {
    //       // If the user's bid is higher than the current highest bid
    //       localStorage.setItem("highestBid", userBid); // Update the highest bid
    //       alert(`Your bid of ₹${userBid} has been placed successfully!`);
          
    //       // Optionally, you can navigate to the Thank You page
    //       window.location.href = "thankyou.html"; // Redirect to the thank you page
    //     } else {
    //       // Show the error message on the user-details page
    //       errorMessage.style.display = "block";
    //       errorMessage.textContent = `Your bid must be higher than the current highest bid of ₹${currentBid}.`;
    //     }
    //   });
    

    

















   // Navigate to User Details Page
   placeBidButton.addEventListener("click", () => {
    mainPage.classList.add("hidden");
    userDetailsPage.classList.remove("hidden");
    currentBidEl.textContent = highestBid;
  });

  // Submit Bid
  submitBidButton.addEventListener("click", () => {
    const userName = userNameInput.value.trim();
    const userBid = parseInt(userBidInput.value);

    if (userBid > highestBid) {
      highestBid = userBid;
      highestBidEl.textContent = highestBid;
      currentBidEl.textContent = highestBid;
      
      // Navigate to Thank You Page
      userDetailsPage.classList.add("hidden");
      thankYouPage.classList.remove("hidden");
      thankYouMessage.textContent = `Thank you, ${userName}, for bidding!`;
      finalBidEl.textContent = userBid;
    } else {
      alert("Your bid must be higher than the current highest bid.");
    }
  
  });