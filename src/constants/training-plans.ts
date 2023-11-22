import { LearningIcon } from '@/components/icons/learning-icon';
import { SupportIcon } from '@/components/icons/support-icon';
import { ProjectIcon } from '@/components/icons/project-icon';
import { WorkEnviIcon } from '@/components/icons/work-envi-icon';
import { ExposureIcon } from '@/components/icons/exposure-icon';
import { CareerIcon } from '@/components/icons/career-icon';

export const TRAINING_PLANS = [
  [
    'Customize learning',
    'Ensuring our trainees receive the training and development opportunities that align with their career goals and aspirations.',
    LearningIcon,
  ],
  [
    'Mentoring and support',
    'Providing a dedicated mentor who will guide throughout the program, provide with constructive feedback on your work.',
    SupportIcon,
  ],
  [
    'Project-based learning',
    'Get hands-on experience with real-world web development projects. You work on projects that challenge you and your skills.',
    ProjectIcon,
  ],
  [
    'Positive work environment',
    'Providing a positive work environment inspires creativity and drives innovation. Trainees thrive in a cooperative setting.',
    WorkEnviIcon,
  ],
  [
    'Exposure to Industry Best Practices',
    'Work alongside experienced developers and get a first-hand look at how websites and applications are built.',
    ExposureIcon,
  ],
  [
    'Exciting Career Pathways',
    'We are always on the lookout for talented developers to join our team to build skill and expand your proficient networks.',
    CareerIcon,
  ],
] as const;
