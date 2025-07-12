import { useEffect, useState } from "react";
import { getGifts } from "../services/sheetsService";

const [gifts, setGifts] = useState([]);

useEffect(() => {
  getGifts().then(setGifts);
}, []);