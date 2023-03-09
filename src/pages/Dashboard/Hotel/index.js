import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import { HotelComponent } from '../../../components/Hotel';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import NoHotel from '../../../components/Hotel/noHotel';
import useToken from '../../../hooks/useToken';
import { getTickets } from '../../../services/paymentApi';
import useTicketType from '../../../hooks/api/useTicketType';

export default function Hotel() {
  const { ticket, setTicket, ticketType, setTicketType } = useContext(AuthContext);
  const token = useToken();

  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      console.log(res);
      setTicketType(res);
    });

    promise.catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <NoHotel />
      {/* {ticketType.includesHotel === false ? <NoHotel /> : <HotelComponent />} */}
    </>
  );
}

const Title = styled.h1`
  font-size: 34px;
  font-weight: 400;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 37px;
`;
