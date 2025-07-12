import { useEffect, useState } from "react";
import { getGifts } from "../services/sheetsService";
import './globals.css'

const [gifts, setGifts] = useState([]);

useEffect(() => {
  getGifts().then(setGifts);
}, []);