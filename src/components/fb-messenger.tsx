/* eslint-disable -- no */
"use client"
import { useEffect } from "react";

export default function MessengerChat() {
  useEffect(() => {
    if (document.getElementById("facebook-jssdk")) return;

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    script.defer = true;
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
        // @ts-ignore
        attribution="biz_inbox"
        messenger_app_id="1337528334395112"
        className="fb-messengermessageus"
        page_id="103524484853667"
        color="blue"
        size="standard"
      />
  );
}
 