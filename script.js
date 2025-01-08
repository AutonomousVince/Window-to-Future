// Function to send user question to the backend and display the response
async function askVinceAI() {
    // Get the user's input question from the input field
    const userQuestion = document.getElementById("question").value;

    // Check if the input is empty
    if (!userQuestion) {
        alert("Please enter a question!");
        return;
    }

    try {
        // Send the question to the backend
        const response = await fetch("https://backend-ij8z.onrender.com/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ question: userQuestion }),
        });

        // Parse the JSON response from the backend
        const data = await response.json();

        // Display the response in the output div
        document.getElementById("response").innerText = data.answer;
    } catch (error) {
        console.error("Error connecting to the backend:", error);
        document.getElementById("response").innerText =
            "Oops! Something went wrong. Please try again later.";
    }
}

