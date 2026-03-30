"use client";

import { useEffect } from "react";
import { postAPI } from "../helper/api_call";

export default function useUserInfo() {
    useEffect(() => {
        const initUser = async () => {
            try {
                // ✅ already exists → skip
                const existingUser = localStorage.getItem("user_id");
                if (existingUser) return;

                // 🌐 Get IP
                const res = await fetch("https://api.ipify.org?format=json");
                const data = await res.json();

                const ip = data.ip;

                // 🧭 Browser detect
                const userAgent = navigator.userAgent;
                let browser = "Unknown";

                if (userAgent.includes("Chrome")) browser = "Chrome";
                else if (userAgent.includes("Firefox")) browser = "Firefox";
                else if (userAgent.includes("Safari")) browser = "Safari";
                else if (userAgent.includes("Edge")) browser = "Edge";

                // 🚀 Call API
                const response = await postAPI("/users", {
                    ip_address: ip,
                    brower_type: browser,
                });

                // 💾 Save user_id
                localStorage.setItem("user_id", response.data.id);

                console.log("User created:", response.data);
            } catch (err) {
                console.error("User init error:", err);
            }
        };

        initUser();
    }, []);
}