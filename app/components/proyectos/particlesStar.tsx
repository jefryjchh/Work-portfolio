"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";

const ParticlesBackgroundStars = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // ⭐ Cargamos el preset stars
      await loadStarsPreset(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  if (!engineReady) return null;

  const options: ISourceOptions = {
    preset: "stars",

    fullScreen: {
      enable: false, // importante porque ya usamos wrapper absoluto
    },

    fpsLimit: 120,
    detectRetina: true,

    interactivity: {
        events: {
            onHover: {
            enable: true,
            mode: "bubble",
            },
            
        },
        modes: {
            bubble: {
            distance: 100,
            duration: 0.6,
            opacity: 1.8,   // ⭐ brillo máximo
            size: 2.5,    // opcional: leve crecimiento
            },
        },
    },

    particles: {
      number: {
        value: 80, // más estrellas
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
      },

      color: {
        value: "#ffffff",
      },

      opacity: {
        value: { min: 0.3, max: 0.8 },
      },

      size: {
        value: { min: 0.5, max: 1.5 },
      },

      move: {
        enable: true,
        speed: 0.1, //  velocidad
        direction: "none",
        outModes: {
          default: "out",
        },
      },

      shape: {
        type: "circle",
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

export default ParticlesBackgroundStars;