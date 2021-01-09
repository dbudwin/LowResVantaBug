import * as THREE from "three";

import React, { useEffect, useRef, useState } from "react";

import WAVES from "vanta/dist/vanta.waves.min";

export default function Background() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    THREE: THREE,
                    el: sectionRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 4.0,
                    scaleMobile: 1.0,
                    color: 0x073642,
                    shininess: 70.0,
                    waveHeight: 30.0,
                    waveSpeed: 0.4
                })
            );
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [vantaEffect]);

    return (
        <div ref={sectionRef} style={{ width: "1200px", height: "800px" }}></div>
    );
}
