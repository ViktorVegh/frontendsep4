import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import RoomInfo from "./RoomInfo";
import { getRooms } from "../api";
import BaseLayer from "./BuildingPlan/hospital.png";

const BuildingPlanClient = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCount, setRoomCount] = useState(0);

  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId);
  };

  const handleClose = () => {
    setSelectedRoom(null);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = await getRooms();
        setRoomCount(rooms.length / 2);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="text-dark">
      <Row className="mb-3">
        {Array.from({ length: roomCount }, (_, i) => i + 1).map((roomId) => (
          <Col xs="auto" key={roomId}>
            <Button
              className="px-4 py-2 m-2 text-xl font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => handleRoomClick(roomId)}
            >
              Room {roomId}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <div className="relative">
            <img
              src={BaseLayer}
              alt="Base layer"
              className="w-full h-auto max-h-[75vh] max-w-[75vw] mx-auto"
            />
          </div>
        </Col>
      </Row>
      {selectedRoom && <RoomInfo roomId={selectedRoom} onClose={handleClose} />}
    </div>
  );
};

export default BuildingPlanClient;
