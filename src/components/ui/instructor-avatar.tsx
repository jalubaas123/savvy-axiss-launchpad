import { User } from 'lucide-react';

interface InstructorAvatarProps {
  gender?: 'male' | 'female';
  className?: string;
}

export const InstructorAvatar = ({ gender = 'female', className = '' }: InstructorAvatarProps) => {
  // Color gradients based on gender
  const gradientClass = gender === 'male' 
    ? 'from-blue-500 to-cyan-500' 
    : 'from-pink-500 to-rose-500';

  return (
    <div className={`w-full h-full rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center ${className}`}>
      <User className="w-1/2 h-1/2 text-white" strokeWidth={2} />
    </div>
  );
};
