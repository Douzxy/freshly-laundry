"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            easing: "ease",
            duration: 400,
            delay: 0,
            once: true,
        });
    }, []);

    return null;
}
