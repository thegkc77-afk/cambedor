import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ targetNumber, suffix = '+', duration = 2.2 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    let controls;
    if (isInView) {
      setCurrentValue(0);
      controls = animate(0, targetNumber, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setCurrentValue(Math.floor(latest));
        }
      });
    }
    return () => controls && controls.stop();
  }, [isInView, targetNumber, duration]);

  const formatted = currentValue.toLocaleString('en-US');

  return <span ref={ref}>{formatted}{suffix}</span>;
};

export const Stats = () => {
  const statsList = [
    { label: 'ACTIVE STUDENTS', target: 500, suffix: '+' },
    { label: 'PARTNER STARTUPS', target: 30, suffix: '+' },
    { label: 'LIVE CAMPAIGNS', target: 20, suffix: '+' },
    { label: 'COMPLETED ACTIVITIES', target: 1240, suffix: '+' }
  ];

  return (
    <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.75rem',
          textAlign: 'center'
        }}>
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                padding: '1.25rem 1rem',
                borderRadius: '1rem',
                backgroundColor: '#F9FAFB',
                border: '1px solid rgba(229, 231, 235, 0.8)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
              }}
            >
              <p style={{
                fontSize: '2.75rem',
                fontWeight: '900',
                color: 'var(--color-deep-navy)',
                lineHeight: '1.15',
                marginBottom: '0.35rem',
                fontFeatureSettings: '"tnum"',
                fontVariantNumeric: 'tabular-nums'
              }}>
                <AnimatedCounter targetNumber={stat.target} suffix={stat.suffix} duration={2.2} />
              </p>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '0.09em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
