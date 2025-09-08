"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Helper function to convert polar coordinates to Cartesian
function polarToXY(cx, cy, radius, angleDeg) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round((cx + radius * Math.cos(angleRad)) * 100) / 100,
    y: Math.round((cy + radius * Math.sin(angleRad)) * 100) / 100
  };
}

// Helper to get responsive size
function getResponsiveSize(size) {
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    return Math.min(size, 300);
  }
  return size;
}

export default function SpiderWeb({
  size = 400,
  rings = 5,
  spokes = 12,
  nodes = [],
  centerLabel = "You",
  onNodeClick
}) {
  const [responsiveSize, setResponsiveSize] = useState(size);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      const newSize = getResponsiveSize(size);
      setResponsiveSize(newSize);
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  // Scroll detection for animations
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('spiderweb-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use consistent calculations to avoid hydration mismatch
  const centerX = Math.round(responsiveSize / 2);
  const centerY = Math.round(responsiveSize / 2);
  const maxRadius = Math.round(responsiveSize * 0.45);

  // Generate ring radii with consistent rounding
  const ringRadii = Array.from({ length: rings }, (_, i) => 
    Math.round((maxRadius / rings) * (i + 1) * 100) / 100
  );

  // Generate spoke angles with consistent rounding
  const spokeAngles = Array.from({ length: spokes }, (_, i) => 
    Math.round((360 / spokes) * i * 100) / 100
  );

  const handleNodeClick = (nodeId) => {
    if (onNodeClick) {
      onNodeClick(nodeId);
    }
  };

  const handleKeyDown = (event, nodeId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNodeClick(nodeId);
    }
  };

  // Prevent hydration mismatch by only rendering on client
  if (!isClient) {
    return (
      <div className="relative">
        <div className="w-full h-[400px] flex items-center justify-center">
          <div className="animate-pulse text-white/60">Loading...</div>
        </div>
      </div>
    );
  }

  return (
      <div id="spiderweb-container" className="relative">
      <svg
        viewBox={`0 0 ${responsiveSize} ${responsiveSize}`}
        className="w-full h-auto"
        role="img"
        aria-label="Inner circle connection graph"
      >
        <defs>
          {/* Outer glow gradient */}
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.3" />
          </radialGradient>
          
          {/* Center node gradient */}
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#f8fafc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.8" />
          </radialGradient>
          
          {/* Node gradient */}
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#f8fafc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.7" />
          </radialGradient>
          
          {/* Connection line gradient */}
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Concentric rings */}
        {ringRadii.map((radius, index) => (
          <motion.circle
            key={`ring-${index}`}
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="1"
            opacity={0.3 - (index * 0.05)}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.3 - (index * 0.05) } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2, delay: index * 0.2 }}
          />
        ))}

        {/* Radial spokes */}
        {spokeAngles.map((angle, index) => {
          const endPoint = polarToXY(centerX, centerY, maxRadius, angle);
          return (
            <motion.line
              key={`spoke-${index}`}
              x1={centerX}
              y1={centerY}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke="url(#glowGradient)"
              strokeWidth="0.8"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, delay: 0.5 + (index * 0.05) }}
            />
          );
        })}

        {/* Connection lines to nodes */}
        {nodes.map((node, index) => {
          const nodePos = polarToXY(
            centerX, 
            centerY, 
            ringRadii[node.ring - 1] || maxRadius, 
            node.angleDeg
          );
          const isHighlighted = hoveredNode === node.id;
          
          return (
            <motion.line
              key={`connection-${node.id}`}
              x1={centerX}
              y1={centerY}
              x2={nodePos.x}
              y2={nodePos.y}
              stroke="url(#connectionGradient)"
              strokeWidth={isHighlighted ? "2" : "1.2"}
              opacity={isHighlighted ? "0.8" : "0.6"}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 1 + (index * 0.1) }}
            />
          );
        })}

        {/* Center node */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="12"
          fill="url(#centerGradient)"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        
        {/* Center label */}
        <motion.text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dy="4"
          className={`fill-white font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {centerLabel}
        </motion.text>

        {/* Outer nodes */}
        {nodes.map((node, index) => {
          const nodePos = polarToXY(
            centerX, 
            centerY, 
            ringRadii[node.ring - 1] || maxRadius, 
            node.angleDeg
          );
          const isHovered = hoveredNode === node.id;
          
          return (
            <g key={node.id}>
              {/* Node circle */}
              <motion.circle
                cx={nodePos.x}
                cy={nodePos.y}
                r="6"
                fill="url(#nodeGradient)"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: isInView ? (isHovered ? 1.1 : 1) : 0
                }}
                transition={{ 
                  scale: { duration: 0.2 }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNodeClick(node.id)}
                onKeyDown={(e) => handleKeyDown(e, node.id)}
                tabIndex={0}
                role="button"
                aria-label={`Connect with ${node.label}`}
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              />
              
              {/* Tooltip */}
              {isHovered && (
                <motion.text
                  x={nodePos.x}
                  y={nodePos.y - 15}
                  textAnchor="middle"
                  className={`fill-white font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  style={{ 
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                    filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))'
                  }}
                >
                  {node.label}
                </motion.text>
              )}
            </g>
          );
        })}

        {/* Pulsing energy effect around center */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="15"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          opacity="0.6"
          animate={{
            r: [15, 25, 15],
            opacity: [0.6, 0.2, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}

