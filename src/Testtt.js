import React, { useEffect, useState } from 'react'
import { UseSantyClient } from './services/UseSantyClient'

    function Testtt() {
        const [first, setfirst] = useState([])
        const { getAboutUsData } =UseSantyClient()
        useEffect(() => {
            getAboutUsData()
                .then(res => console.log("ksdjbvjsdb", res))
                .catch(console.error);
        }, [])

        return (
            <div>

                <div>{first[0]?.name}</div>
                <div>{first[0]?.mainVideo}</div>
                <div>{first[0]?.text_first}</div>
                <div>{first[0]?.text_tab1}</div>
            </div>
        )
    }

export default Testtt