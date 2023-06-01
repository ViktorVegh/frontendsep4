import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode"; // Import jwt-decode library
import Login from "@/components/Login";
import { useRouter } from "next/router"; // Import useRouter hook for redirection

const HomePage = () => {
  const router = useRouter(); // Initialize useRouter hook
  const [authToken, setAuthToken] = useState(null);

  // useEffect will run once the component is mounted
  useEffect(() => {
    // This code will run once the component is mounted, in the browser
    setAuthToken(localStorage.getItem("authToken"));
  }, []);

  useEffect(() => {
    // Redirect based on authToken presence and user role
    if (authToken) {
      // Decode the JWT to extract the user role
      const decodedToken = jwtDecode(authToken);
      const userRole = decodedToken.role; // adjust this line based on how the role is stored in your JWT

      // Redirect to different pages based on user role
      if (userRole === "Admin") {
        router.push("/room-management"); // Redirect to the admin page
      } else if (userRole === "Doctor") {
        router.push("/doctor"); // Redirect to the doctor page
      } else if (userRole === "Receptionist") {
        router.push("/assign-room"); // Redirect to the receptionist page
      } else if (userRole === "User") {
        router.push("/user"); // Redirect to the user page
      } else {
        console.log("Invalid user role: " + userRole);
      }
    }
  }, [authToken, router]);

  // Display login form if no authToken is present
  if (!authToken) {
    return <Login />;
  }

  return null; // Return null as nothing should be rendered after redirection
};

export default HomePage;
