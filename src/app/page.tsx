import React from "react";
import { TranscriptProvider } from "@/app/contexts/TranscriptContext";
import { EventProvider } from "@/app/contexts/EventContext";
import App from "./App";

export default function Page() {
  return (
    <TranscriptProvider>
      <EventProvider>
        <App />
        <div>
          {/* Add this somewhere visible in your app to test */}
          {console.log('Direct env test:', process.env.NEXT_PUBLIC_NAME)}
        </div>
      </EventProvider>
    </TranscriptProvider>
  );
}
