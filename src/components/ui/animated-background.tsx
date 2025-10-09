"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // Warna hijau transparan (opsional, tapi stroke dikontrol via className)
        width: 0.5 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Yayasan Masjid Ibnusina Background Animation</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        // strokeOpacity diatur via className untuk konsistensi Tailwind
                        className="text-emerald-600/20" // 🔵 Ganti ke hijau zamrud transparan
                        initial={{ pathLength: 0.2, opacity: 0.4 }}
                        animate={{
                            pathLength: [0.2, 1, 0.2],
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: path.id * 0.1,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
            {/* Multiple layers of animated paths */}
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
            
            {/* Additional decorative elements with green theme */}
            <div className="absolute inset-0">
                {/* Floating geometric shapes - hijau lembut */}
                <motion.div 
                    className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/20 rounded-full"
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div 
                    className="absolute bottom-40 right-20 w-32 h-32 bg-teal-200/15 rounded-lg rotate-45"
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.2, 0.5, 0.2],
                        rotate: [45, 65, 45],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                
                <motion.div 
                    className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-200/25 rounded-full"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                
                {/* Gradient orbs - hijau transparan */}
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/10 to-teal-200/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-200/8 to-emerald-200/8 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />
            </div>
        </div>
    );
}