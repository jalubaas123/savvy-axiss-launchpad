import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, TrendingUp, Star, Target } from 'lucide-react';
const stats = [{
  icon: Users,
  value: 280,
  suffix: '+',
  label: 'Students Trained'
}, {
  icon: Briefcase,
  value: 120,
  suffix: '+',
  label: 'Projects Completed'
}, {
  icon: TrendingUp,
  value: 3,
  suffix: '+',
  label: 'Years of Experience'
}, {
  icon: Star,
  value: 4.8,
  suffix: '/5',
  label: 'Average Rating',
  decimals: 1
}];
const CountUp = ({
  end,
  duration = 2,
  decimals = 0,
  suffix = ''
}: {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(easeOutQuart * end);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);
  return <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>;
};
export const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-r from-secondary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5
      }} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <p className="text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </p>
              <p className="text-secondary-foreground/80 text-sm lg:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};