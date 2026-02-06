import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import profileIcon from "@/assets/profile.png";

const existingIcon = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
const favicon = existingIcon ?? document.createElement("link");
favicon.rel = "icon";
favicon.href = profileIcon;
if (!existingIcon) document.head.appendChild(favicon);

const accentVar = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
const accentColor = accentVar ? `hsl(${accentVar})` : "#a855f7";

function setCircularFavicon(src: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;

  const grad = ctx.createLinearGradient(0, 64, 64, 0);
  grad.addColorStop(0, accentColor);
  grad.addColorStop(1, "#a855f7");

  ctx.beginPath();
  ctx.arc(32, 32, 30, 0, Math.PI * 2);
  ctx.lineWidth = 4;
  ctx.strokeStyle = grad;
  ctx.stroke();

  ctx.save();
  ctx.beginPath();
  ctx.arc(32, 32, 28, 0, Math.PI * 2);
  ctx.clip();

  const img = new Image();
  img.src = src;
  img.onload = () => {
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
    ctx.restore();
    favicon.href = canvas.toDataURL("image/png");
  };
  img.onerror = () => {
    favicon.href = src;
  };
}

setCircularFavicon(profileIcon);

createRoot(document.getElementById("root")!).render(<App />);
