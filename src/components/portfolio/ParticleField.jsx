import { useEffect, useRef } from "react";

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationFrame;

    let particles = [];
    let circuits = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      
      particles = Array.from(
        {
          length: Math.min(
            75,
            Math.floor((width * height) / 18000)
          ),
        },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.25 + 0.05,
          phase: Math.random() * Math.PI * 2,
        })
      );

      circuits = [];

      const rows = Math.floor(height / 110);

      for (let i = 0; i < rows; i++) {
        const y = i * 110 + 45 + Math.random() * 30;

        circuits.push({
          x: Math.random() * width,
          y,
          length: 140 + Math.random() * 280,
          direction: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const drawCircuit = (circuit) => {
      const startX = circuit.x;
      const startY = circuit.y;

      const length = circuit.length;
      const direction = circuit.direction;

      ctx.beginPath();

      ctx.moveTo(startX, startY);

      ctx.lineTo(
        startX + direction * length * 0.35,
        startY
      );

      ctx.lineTo(
        startX + direction * length * 0.35,
        startY + 35
      );

      ctx.lineTo(
        startX + direction * length,
        startY + 35
      );

      ctx.strokeStyle =
        "rgba(37, 99, 235, 0.16)";

      ctx.lineWidth = 1;

      ctx.stroke();

      ctx.beginPath();

      ctx.arc(
        startX,
        startY,
        2,
        0,
        Math.PI * 2
      );

      ctx.arc(
        startX + direction * length,
        startY + 35,
        2,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "rgba(96, 165, 250, 0.55)";

      ctx.fill();
    };

    const draw = (time) => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      circuits.forEach(drawCircuit);

      /* Data particles */
      particles.forEach((particle) => {
        particle.y -= particle.speed;

        if (particle.y < -10) {
          particle.y = height + 10;
        }

        const dx =
          particle.x - mouse.x;

        const dy =
          particle.y - mouse.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        let alpha = 0.35;

        if (distance < 150) {
          alpha = 0.9;
        }

        const pulse =
          Math.sin(
            time * 0.002 +
              particle.phase
          ) *
            0.25 +
          0.75;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(96, 165, 250, ${
          alpha * pulse
        })`;

        ctx.shadowColor =
          "rgba(59, 130, 246, 0.8)";

        ctx.shadowBlur = 8;

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      /* Connections between nearby particles */
      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const a = particles[i];
          const b = particles[j];

          const distance = Math.hypot(
            a.x - b.x,
            a.y - b.y
          );

          if (distance < 115) {
            ctx.beginPath();

            ctx.moveTo(
              a.x,
              a.y
            );

            ctx.lineTo(
              b.x,
              b.y
            );

            ctx.strokeStyle = `rgba(37, 99, 235, ${
              0.08 *
              (1 - distance / 115)
            })`;

            ctx.lineWidth = 0.5;

            ctx.stroke();
          }
        }
      }

      animationFrame =
        requestAnimationFrame(draw);
    };

    const handleMouseMove = (event) => {
      const rect =
        canvas.getBoundingClientRect();

      mouse.x =
        event.clientX - rect.left;

      mouse.y =
        event.clientY - rect.top;
    };

    resize();

    animationFrame =
      requestAnimationFrame(draw);

    window.addEventListener(
      "resize",
      resize
    );

    canvas.parentElement?.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      canvas.parentElement?.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleField;
