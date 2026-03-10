function generateCopy() {

let prompt = document.getElementById("promptInput").value;
let output = document.getElementById("output");

if(prompt.trim() === ""){
    output.innerHTML = "Please enter a prompt.";
    return;
}

let generatedText = "";

if(prompt.toLowerCase().includes("dental")){
    generatedText = "Welcome to SmileCare Dental Clinic. We provide high-quality dental treatments including teeth cleaning, whitening, implants, and orthodontic care. Our experienced dentists ensure a comfortable and healthy smile for every patient.";
}
else if(prompt.toLowerCase().includes("restaurant")){
    generatedText = "Welcome to Taste Haven Restaurant. Enjoy delicious dishes prepared with fresh ingredients and authentic flavors. We offer a warm atmosphere perfect for family dinners, celebrations, and casual dining.";
}
else if(prompt.toLowerCase().includes("gym")){
    generatedText = "Welcome to PowerFit Gym. Transform your fitness journey with modern equipment, expert trainers, and personalized workout plans designed to help you achieve your health goals.";
}
else{
    generatedText = "Welcome to our website. We provide professional services and high-quality solutions to meet your needs. Our goal is to deliver excellent customer experience and reliable service.";
}

output.innerHTML = generatedText;

}