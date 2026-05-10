import React from "react";
import { music } from "~/configs";

interface SliderProps {
  icon: string;
  value: number;
  setValue: (value: number) => void;
}

const SliderComponent = ({
  icon,
  value,
  setValue,
  dark
}: SliderProps & { dark: boolean }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="slider flex items-center">
      <div
        className={`size-7 flex items-center justify-center rounded-l-full border-t border-l border-b ${
          dark ? "bg-white/10 border-white/10" : "bg-gray-200 border-gray-300"
        }`}
      >
        <span className={`${icon} text-xs ${dark ? "text-white/70" : "text-gray-600"}`} />
      </div>
      <div
        className={`flex-1 h-7 rounded-r-full relative overflow-hidden border-t border-r border-b ${
          dark ? "bg-white/10 border-white/10" : "bg-gray-200 border-gray-300"
        }`}
      >
        <div
          className={`absolute left-0 top-0 h-full transition-all ${
            dark ? "bg-white/30" : "bg-blue-400"
          }`}
          style={{ width: `${value}%` }}
        />
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={handleChange}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        />
      </div>
    </div>
  );
};

interface CCMProps {
  toggleControlCenter: () => void;
  toggleAudio: (target: boolean) => void;
  setBrightness: (value: number) => void;
  setVolume: (value: number) => void;
  playing: boolean;
  btnRef: React.RefObject<HTMLDivElement>;
}

export default function ControlCenterMenu({
  toggleControlCenter,
  toggleAudio,
  setBrightness,
  setVolume,
  playing,
  btnRef
}: CCMProps) {
  const controlCenterRef = useRef<HTMLDivElement>(null);
  const { dark, wifi, brightness, bluetooth, airdrop, fullscreen, volume } = useStore(
    (state) => ({
      dark: state.dark,
      wifi: state.wifi,
      brightness: state.brightness,
      bluetooth: state.bluetooth,
      airdrop: state.airdrop,
      fullscreen: state.fullscreen,
      volume: state.volume
    })
  );
  const { toggleWIFI, toggleBluetooth, toggleAirdrop, toggleDark, toggleFullScreen } =
    useStore((state) => ({
      toggleWIFI: state.toggleWIFI,
      toggleBluetooth: state.toggleBluetooth,
      toggleAirdrop: state.toggleAirdrop,
      toggleDark: state.toggleDark,
      toggleFullScreen: state.toggleFullScreen
    }));

  useClickOutside(controlCenterRef, toggleControlCenter, [btnRef]);

  return (
    <div
      className={`w-80 h-96 max-w-full p-2.5 backdrop-blur-3xl fixed top-9.5 right-0 sm:right-1.5 rounded-2xl shadow-2xl ${
        dark ? "text-white bg-gray-900/80" : "text-gray-900 bg-white/80"
      }`}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gap: "0.5rem",
        border: dark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)"
      }}
      ref={controlCenterRef}
    >
      <div
        className="cc-grid p-2 flex flex-col justify-around"
        style={{ gridRow: "span 2", gridColumn: "span 2" }}
      >
        <div className="flex items-center space-x-2">
          <div className={`${wifi ? "cc-btn-active" : "cc-btn"}`} onClick={toggleWIFI}>
            <span className="i-material-symbols-wifi text-base" />
          </div>
          <div className="pt-0.5">
            <div className="font-medium leading-4">Wi-Fi</div>
            <div className="cc-text">{wifi ? "Home" : "Off"}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className={`${bluetooth ? "cc-btn-active" : "cc-btn"}`}
            onClick={toggleBluetooth}
          >
            <span className="i-charm-bluetooth text-base" />
          </div>
          <div className="pt-0.5">
            <div className="font-medium leading-4">Bluetooth</div>
            <div className="cc-text">{bluetooth ? "On" : "Off"}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className={`${airdrop ? "cc-btn-active" : "cc-btn"}`}
            onClick={toggleAirdrop}
          >
            <span className="i-material-symbols-rss-feed-rounded text-base" />
          </div>
          <div className="pt-0.5">
            <div className="font-medium leading-4">AirDrop</div>
            <div className="cc-text">{airdrop ? "Contacts Only" : "Off"}</div>
          </div>
        </div>
      </div>
      <div
        className="cc-grid col-span-2 p-2 flex items-center space-x-3"
        style={{ gridColumn: "span 2" }}
      >
        <div className={`${dark ? "cc-btn-active" : "cc-btn"}`} onClick={toggleDark}>
          {dark ? (
            <span className="i-ion-moon text-base" />
          ) : (
            <span className="i-ion-sunny text-base" />
          )}
        </div>
        <div className="font-medium">{dark ? "Dark Mode" : "Light Mode"}</div>
      </div>
      <div className="cc-grid flex items-center justify-center flex-col">
        <span className="i-bi-brightness-alt-high text-xl" />
        <span className="text-xs text-center leading-3.5">Keyboard Brightness</span>
      </div>
      <div
        className="cc-grid flex items-center justify-center flex-col cursor-default"
        onClick={() => toggleFullScreen(!fullscreen)}
      >
        {fullscreen ? (
          <span className="i-bi-fullscreen-exit text-base" />
        ) : (
          <span className="i-bi-fullscreen text-base" />
        )}
        <span className="text-xs text-center leading-3.5 mt-1.5">
          {fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        </span>
      </div>
      <div
        className="cc-grid col-span-4 px-2.5 py-2 space-y-1 flex flex-col justify-around"
        style={{ gridColumn: "span 4" }}
      >
        <span className="font-medium ml-0.5">Display</span>
        <SliderComponent
          icon="i-ion-sunny"
          value={brightness}
          setValue={setBrightness}
          dark={dark}
        />
      </div>
      <div
        className="cc-grid col-span-4 px-2.5 py-2 space-y-1 flex flex-col justify-around"
        style={{ gridColumn: "span 4" }}
      >
        <span className="font-medium ml-0.5">Sound</span>
        <SliderComponent
          icon="i-ion-volume-high"
          value={volume}
          setValue={setVolume}
          dark={dark}
        />
      </div>
      <div
        className="cc-grid col-span-4 flex items-center space-x-2.5 py-2 pl-2 pr-4"
        style={{ gridColumn: "span 4" }}
      >
        <img className="w-12 rounded-lg" src={music.cover} alt="cover art" />
        <div className="flex-1">
          <div className="font-medium">{music.title}</div>
          <div className="cc-text">{music.artist}</div>
        </div>
        {playing ? (
          <span
            className="i-bi-pause-fill text-2xl cursor-pointer"
            onClick={() => toggleAudio(false)}
          />
        ) : (
          <span
            className="i-bi-play-fill text-2xl cursor-pointer"
            onClick={() => toggleAudio(true)}
          />
        )}
      </div>
    </div>
  );
}
