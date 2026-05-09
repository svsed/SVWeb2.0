import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorIndex: number;
  phase: number;
  type: 'cluster' | 'satellite';
}

const COLORS = [
  'rgba(108, 84, 255, ',
  'rgba(136, 117, 255, ',
  'rgba(155, 140, 255, ',
  'rgba(183, 175, 255, ',
  'rgba(108, 84, 255, ',
];

const LINE_COLOR_1 = 'rgba(108, 84, 255, ';
const LINE_COLOR_2 = 'rgba(136, 117, 255, ';

export function SystemsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const nodes: Node[] = [];
    const N_NODES = 90;
    const MAX_DIST = 160;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function init() {
      resize();
      nodes.length = 0;
      for (let i = 0; i < N_NODES; i++) {
        const isCluster = Math.random() < 0.15;
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: isCluster ? Math.random() * 2.5 + 2 : Math.random() * 1.5 + 0.5,
          colorIndex: Math.floor(Math.random() * COLORS.length),
          phase: Math.random() * Math.PI * 2,
          type: isCluster ? 'cluster' : 'satellite',
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.0007;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12;
            const isSpecial =
              nodes[i].type === 'cluster' || nodes[j].type === 'cluster';
            const lineAlpha = isSpecial ? alpha * 2.5 : alpha;
            const lineCol = (i + j) % 3 === 0 ? LINE_COLOR_2 : LINE_COLOR_1;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = lineCol + lineAlpha + ')';
            ctx.lineWidth = isSpecial ? 0.8 : 0.4;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        const pulse =
          node.radius + Math.sin(t + node.phase) * (node.type === 'cluster' ? 1 : 0.4);

        const col = COLORS[node.colorIndex];

        // Glow for cluster nodes
        if (node.type === 'cluster') {
          const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulse * 6);
          grd.addColorStop(0, col + '0.35)');
          grd.addColorStop(1, col + '0)');
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulse * 6, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulse, 0, Math.PI * 2);
        ctx.fillStyle = col + (node.type === 'cluster' ? '0.9)' : '0.6)');
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();

    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.55 }}
    />
  );
}