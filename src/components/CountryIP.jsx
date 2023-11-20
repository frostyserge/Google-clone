'use client';

import { useEffect, useState } from 'react';

export default function CountryIP() {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    useEffect(() => {
        fetch(
            `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => setCountry(data.country, data.city, data.region));
        fetch(
            `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => setCity(data.city));
        fetch(
            `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => setRegion(data.region));
    }, []);

    return (
        <div>
            {city}, {region}, {country}
        </div>
    );
}
