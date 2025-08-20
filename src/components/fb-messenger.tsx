/* eslint-disable -- no */
"use client"
import { useEffect } from "react";

export default function MessengerChat() {
  useEffect(() => {
    if (document.getElementById("facebook-jssdk")) return;

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    (window as any).fbAsyncInit = () => {
      (window as any).FB.init({
        appId: "1337528334395112",
        xfbml: true,
        version: "v23.0",
      });
    };
  }, []);

  return (
      <div
        id="fb-customer-chat"
        className="fb-customerchat"
        // @ts-ignore
        minimized="true"
        page_id="103524484853667"
      />
  );
}
 