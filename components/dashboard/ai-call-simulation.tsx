"use client";

import { PhoneOff, Mic, Volume2 } from "lucide-react";
import { Button } from "../ui/button";

const AICallSimulation = ({ endCall }: { endCall: () => void }) => {
  return (
    <div className="relative w-full h-[84vh] rounded-3xl overflow-hidden bg-zinc-950 text-white flex flex-col justify-between p-6">
      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />

      {/* 🌊 Bottom Wave Glow */}
      <div className="animate-fade absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[160%] h-[400px] bg-blue-500/25 blur-3xl rounded-full animate-wave" />

      {/* 🎤 Top Info */}
      <div className="relative z-10 text-center mt-6">
        <h2 className="text-2xl font-semibold tracking-tight">AI Assistant</h2>

        {/* Animated Listening Text */}
        <p className="text-sm text-zinc-400 mt-2 flex justify-center gap-1">
          Listening
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
        </p>
      </div>

      {/* 🎛️ Controls */}
      <div className="relative z-10 flex justify-center gap-8 mb-6">
        {/* Mic */}
        {/* <button className="group w-14 h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg">
          <Mic size={20} className="group-hover:scale-110 transition" />
        </button> */}

        {/* End Call */}
        <Button className="cursor-pointer w-16 h-16 flex items-center justify-center rounded-full text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.6)]" onClick={endCall}>
          <PhoneOff className="size-5!" />
        </Button>

        {/* Volume */}
        {/* <button className="group w-14 h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg">
          <Volume2 size={20} className="group-hover:scale-110 transition" />
        </button> */}
      </div>
    </div>
  );
};

export default AICallSimulation;
