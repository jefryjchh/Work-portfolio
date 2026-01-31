"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Carga el bundle 
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  if (!engineReady) return null;

  const options: ISourceOptions = {
    
    fpsLimit: 120,
  
    detectRetina: true,

    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 60,
          duration: 0.4,
        },
      },
    },

    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 90,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 40,
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
      },
    },
  };

  return (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <Particles
      id="tsparticles"
      options={options}
      className="w-full h-full"
    />
  </div>
);
};

export default ParticlesBackground;