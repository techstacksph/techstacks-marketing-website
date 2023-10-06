import {
  careerImg,
  exposureImg,
  mentoringImg,
  positiveImg,
  projectImg,
  trainingImg,
} from '@/assets/images/trainings';

export const TRAINING_PLANS = [
  [
    'Customize learning',
    'Ensuring our trainees receive the training and development opportunities that align with their career goals and aspirations.',
    trainingImg,
  ],
  [
    'Mentoring and support',
    'Providing a dedicated mentor who will guide throughout the program, provide with constructive feedback on your work.',
    mentoringImg,
  ],
  [
    'Project-based learning',
    'Get hands-on experience with real-world web development projects. You work on projects that challenge you and your skills.',
    projectImg,
  ],
  [
    'Positive work environment',
    'Providing a positive work environment inspires creativity and drives innovation. Trainees thrive in a cooperative setting.',
    positiveImg,
  ],
  [
    'Exposure to Industry Best Practices',
    'Work alongside experienced developers and get a first-hand look at how websites and applications are built.',
    exposureImg,
  ],
  [
    'Exciting Career Pathways',
    'We are always on the lookout for talented developers to join our team to build skill and expand your proficient networks.',
    careerImg,
  ],
] as const;
