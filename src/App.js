import React from "react";
import "./App.css";
import Board from "@lourenci/react-kanban";
import { board } from "./data";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-color: #fff3;
  border-width: 2px;
  border-radius: 2px;
  width: 250px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;

  padding-bottom: 10px;
`;
const CardHeading = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: normal;
`;
const Label = styled.div`
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  background-color: #85c965;
  color: #365e23;
  font-size: 12px;
  font-weight: bold;
`;
const Action = styled.div`
  font-size: 24px;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: -15px;
  cursor: pointer;
`;
const ProfileDetail = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Name = styled.p`
  font-size: 18px;
  margin-bottom: -5px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Status = styled.p`
  color: #f16;
  font-size: 14px;
`;
const Date = styled.p`
  color: #9ea2a9;
`;
const LineBreak = styled.div`
  background-color: #939596;
  height: 1px;
  width: 100%;
`;
function App() {
  return (
    <div className="App">
      <Board
        renderCard={({ content }, { removeCard, dragging }) => (
          <Card dragging={dragging}>
            <ProfileDetail>
              <Name>Janic Patterson</Name>
              <Row>
                <Status>{`• Offline `} </Status>
                <Date> {` - 1:23 PM`} </Date>
              </Row>
              <LineBreak />
            </ProfileDetail>
            <Action>...</Action>
            <CardHeading>1. Depot</CardHeading>
            <Description>
              27 Copperbrigade Road #123,
              <br /> Palo Alto, CA 95484
            </Description>
            <Description>09:00 AM - 09:15 AM *Pickup </Description>
            <Label>Complete </Label>
          </Card>
        )}
      >
        {board}
      </Board>{" "}
    </div>
  );
}

export default App;
