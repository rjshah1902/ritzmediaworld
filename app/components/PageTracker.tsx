"use client";

import usePageTracker from "../hooks/usePageTracker";
import useUserInfo from "../hooks/useUserInfo";

export default function PageTracker() {
    useUserInfo();
    usePageTracker();
    return null;
}