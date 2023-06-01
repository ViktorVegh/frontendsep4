// src/layouts/ReceptionistLayout.js
import React from "react";
import Head from "next/head";
import BuildingPlanClient from "@/components/BuildingPlanClient";
import NavBar from "@/components/NavBar";
import ReceptionistNavBar from "@/components/ReceptionistNavBar";
import MovePatient from "@/components/MovePatient";
import ViewRequests from "@/components/ViewRequests"; // import the new component
import { Container } from "react-bootstrap";

const ReceptionistLayout = ({ children }) => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>My Building Plan</title>
        <meta name="description" content="Interactive building plan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <ReceptionistNavBar />
      <main className="flex flex-col justify-center items-center py-5">
        <h1>Building Plan</h1>
        <BuildingPlanClient />
        <Container className="my-5">
          <h2>Assign Patient to Room</h2>
          {children}
          <MovePatient />
        </Container>
        <Container className="my-5">
          <ViewRequests />
        </Container>
      </main>
    </div>
  );
};

export default ReceptionistLayout;
