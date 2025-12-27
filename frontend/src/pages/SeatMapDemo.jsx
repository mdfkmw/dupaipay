import { useMemo, useState } from 'react';
import SeatMap from '../components/SeatMap.jsx';

const stops = [
  { id: 1, name: 'Botoșani' },
  { id: 2, name: 'Suceava' },
  { id: 3, name: 'Iași' },
];

const buildDummySeats = () => ([
  {
    id: 1,
    label: '1',
    row: 1,
    seat_col: 1,
    seat_type: 'normal',
    status: 'full',
    passengers: [
      {
        id: 101,
        name: 'Maria Popescu',
        phone: '0744558877',
        board_at: 'Botoșani',
        exit_at: 'Iași',
        payment_status: 'paid',
        payment_method: 'card',
        booking_channel: 'online',
        paid_amount: 45,
        price_value: 45,
      },
    ],
  },
  {
    id: 2,
    label: '2',
    row: 1,
    seat_col: 2,
    seat_type: 'normal',
    status: 'free',
    passengers: [],
  },
  {
    id: 4,
    label: '4',
    row: 2,
    seat_col: 1,
    seat_type: 'normal',
    status: 'partial',
    passengers: [
      {
        id: 102,
        name: 'Ioan Ionescu',
        phone: '0744558822',
        board_at: 'Suceava',
        exit_at: 'Iași',
        payment_status: null,
        payment_method: 'cash',
        booking_channel: 'offline',
        paid_amount: 0,
        price_value: 60,
      },
      {
        id: 103,
        name: 'Ana Stan',
        phone: '0744558833',
        board_at: 'Botoșani',
        exit_at: 'Suceava',
        payment_status: 'paid',
        payment_method: 'cash',
        booking_channel: 'offline',
        paid_amount: 35,
        price_value: 35,
      },
    ],
  },
  {
    id: 5,
    label: '5',
    row: 2,
    seat_col: 2,
    seat_type: 'normal',
    status: 'full',
    passengers: [
      {
        id: 104,
        name: 'Elena Matei',
        phone: '0744554488',
        board_at: 'Suceava',
        exit_at: 'Iași',
        payment_status: 'paid',
        payment_method: 'card',
        booking_channel: 'online',
        paid_amount: 50,
        price_value: 50,
      },
    ],
  },
  {
    id: 6,
    label: '6',
    row: 3,
    seat_col: 1,
    seat_type: 'normal',
    status: 'partial',
    passengers: [
      {
        id: 105,
        name: 'Mihai Dobre',
        phone: '0744558844',
        board_at: 'Botoșani',
        exit_at: 'Suceava',
        payment_status: null,
        payment_method: null,
        booking_channel: 'offline',
        paid_amount: 0,
        price_value: 40,
      },
    ],
  },
  {
    id: 7,
    label: '7',
    row: 3,
    seat_col: 2,
    seat_type: 'normal',
    status: 'free',
    passengers: [],
  },
]);

export default function SeatMapDemo() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [moveSourceSeat, setMoveSourceSeat] = useState(null);
  const [popupPassenger, setPopupPassenger] = useState(null);
  const [popupSeat, setPopupSeat] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const seats = useMemo(buildDummySeats, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-xl font-semibold text-gray-800">
          Seatmap demo (date dummy)
        </h1>
        <SeatMap
          seats={seats}
          stops={stops}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          moveSourceSeat={moveSourceSeat}
          setMoveSourceSeat={setMoveSourceSeat}
          popupPassenger={popupPassenger}
          setPopupPassenger={setPopupPassenger}
          popupSeat={popupSeat}
          setPopupSeat={setPopupSeat}
          popupPosition={popupPosition}
          setPopupPosition={setPopupPosition}
          handleMovePassenger={() => {}}
          handleSeatClick={() => {}}
          toggleSeat={() => {}}
          isSeatFullyOccupiedViaSegments={() => false}
          checkSegmentOverlap={() => false}
          selectedRoute={{}}
          setToastMessage={() => {}}
          setToastType={() => {}}
          showObservations={false}
        />
      </div>
    </div>
  );
}
