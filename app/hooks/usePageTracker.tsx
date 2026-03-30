"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { postAPI } from "../helper/api_call";

const pageMap: Record<string, string> = {
    "/": "Home",
    "/home": "Home",
    "/about-us": "About Us",
    "/blogs": "Blogs",
    "/contact-us": "Contact Us",
};

export default function usePageTracker() {
    const pathname = usePathname();
    const prevPath = useRef<string>("");

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        if (!user_id) return;

        const currentPage = pageMap[pathname];
        const prevPage = pageMap[prevPath.current];

        if (currentPage && prevPage) {
            const payload = {
                current_page: prevPage,
                next_page: currentPage,
                user_id: Number(user_id),
            };

            postAPI("/navigation", payload)
                .then(() => {
                    console.log("Navigation tracked:", payload);
                })
                .catch((err) => {
                    console.error("Navigation error:", err);
                });
        }

        prevPath.current = pathname;
    }, [pathname]);
}