"use client"

import { useState } from "react";

export default function CountryIP() {

  const [country, setCountry] = useState("United States")

  return (
    <div>
      {country}
    </div>
  )
}
