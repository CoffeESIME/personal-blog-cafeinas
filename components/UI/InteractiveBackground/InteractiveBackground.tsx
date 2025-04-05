"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, moved: false });
  const pointsRef = useRef<Point[]>([]);
  const requestRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Colores
  const purpleColor = [99, 102, 241]; // Un morado índigo
  const blackColor = [13, 13, 13]; // Un negro ligeramente más suave

  // Crear puntos aleatorios
  const createPoints = (width: number, height: number) => {
    const points: Point[] = [];
    const numPoints = Math.floor((width * height) / 25000); // Densidad de puntos

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 30 + 20, // Radio aleatorio entre 20 y 50
        color: getRandomColor(),
        vx: (Math.random() - 0.5) * 0.3, // Velocidad aleatoria
        vy: (Math.random() - 0.5) * 0.3,
      });
    }
    return points;
  };

  // Obtener un color aleatorio en la gama de morados
  const getRandomColor = () => {
    // Interpolar entre negro y morado con un valor aleatorio
    const t = Math.random() * 0.7; // Limitar el brillo máximo
    const r = Math.floor(blackColor[0] + (purpleColor[0] - blackColor[0]) * t);
    const g = Math.floor(blackColor[1] + (purpleColor[1] - blackColor[1]) * t);
    const b = Math.floor(blackColor[2] + (purpleColor[2] - blackColor[2]) * t);

    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  };

  // Actualizar el canvas
  const updateCanvas = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar un fondo degradado
    const gradient = ctx.createRadialGradient(
      mouseRef.current.x,
      mouseRef.current.y,
      0,
      mouseRef.current.x,
      mouseRef.current.y,
      500
    );

    gradient.addColorStop(0, "rgba(99, 102, 241, 0.3)"); // Morado cerca del cursor
    gradient.addColorStop(1, "rgb(0, 0, 0)"); // Negro lejos del cursor

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Actualizar y dibujar los puntos
    pointsRef.current.forEach((point) => {
      // Mover los puntos suavemente
      point.x += point.vx;
      point.y += point.vy;

      // Rebote en los bordes
      if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
      if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

      // Distancia al mouse
      const dx = mouseRef.current.x - point.x;
      const dy = mouseRef.current.y - point.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Dibujar punto con un brillo basado en la cercanía al mouse
      if (mouseRef.current.moved && distance < 300) {
        const intensity = 1 - distance / 300;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius + intensity * 5, 0, Math.PI * 2);

        // Color más brillante cerca del mouse
        const t = intensity * 0.8;
        const r = Math.floor(
          blackColor[0] + (purpleColor[0] - blackColor[0]) * t
        );
        const g = Math.floor(
          blackColor[1] + (purpleColor[1] - blackColor[1]) * t
        );
        const b = Math.floor(
          blackColor[2] + (purpleColor[2] - blackColor[2]) * t
        );

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.1 + intensity * 0.3})`;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
      }
    });

    // Solicitar próxima animación
    requestRef.current = requestAnimationFrame(updateCanvas);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar tamaño del canvas
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    // Manejar movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        moved: true,
      };
    };

    // Inicializar
    handleResize();
    pointsRef.current = createPoints(window.innerWidth, window.innerHeight);
    updateCanvas();

    // Agregar event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Regenerar puntos cuando cambia el tamaño de la ventana
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      pointsRef.current = createPoints(dimensions.width, dimensions.height);
    }
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "black" }}
    />
  );
};

export default InteractiveBackground;
