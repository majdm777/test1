
    
    


document.getElementById("Order").addEventListener("click", function(event) {
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const phoneNumber = document.getElementById("phonenumber");
    
    const outputFirst = document.getElementById("text-output-first");
    const outputSecond = document.getElementById("text-output-second");

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.value.trim() && emailPattern.test(email.value.trim()) && address.value.trim() && phoneNumber.value.trim()) {
        outputFirst.textContent = `Thank you, ${fullName.value.trim()}, for your order!`;
        outputSecond.textContent = "by Majd and Ali"; 
    } else {
        outputFirst.textContent = "Please fill out the form correctly.";
        outputSecond.textContent = "Ensure all fields are filled and email is valid.";

        
        if (!fullName.value.trim()) fullName.reportValidity();
        else if (!email.value.trim() || !emailPattern.test(email.value.trim())) email.reportValidity();
        else if (!address.value.trim()) address.reportValidity();
        else if (!phoneNumber.value.trim()) phoneNumber.reportValidity();
    }

    event.preventDefault();
});



 const params = new URLSearchParams(window.location.search);


const imageSrc = params.get('image');


if (imageSrc) {
    const buyImage = document.querySelector('.buy-pic-box img');
    buyImage.src = imageSrc; 
}



       
function scrollToContainer(event) {
        
      if (event.key === "Enter") {
          event.preventDefault(); 
    
           
          const query = document.getElementById("search-input").value.toLowerCase();
    
            
        if (query === "gold" || query === "diamond" || query === "sales") {
               
            const container = document.getElementById(query);

            
            if (container) {
                container.scrollIntoView({ behavior:"smooth", block:"start" });
            }
        }
    }
}
    
    
document.getElementById("search-input").addEventListener("keydown", scrollToContainer);
    


