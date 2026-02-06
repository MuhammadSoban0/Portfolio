import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import profileIcon from "@/assets/profile.png";

const existingIcon = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
const favicon = existingIcon ?? document.createElement("link");
favicon.rel = "icon";
favicon.href = profileIcon;
if (!existingIcon) document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(<App />);
