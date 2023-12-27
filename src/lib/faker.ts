import { faker } from '@faker-js/faker';
import type { Job } from '@/constants/jobs';
import { EMPLOYMENT, POSITIONS } from '@/constants/jobs';

faker.seed(2);

export const SAMPLE_JOBS: Job[] = Array.from(Array(4)).map(() => {
  const empIndx = Math.floor(Math.random() * EMPLOYMENT.length);
  const posIndx = Math.floor(Math.random() * POSITIONS.length);
  return {
    description: faker.lorem.sentences(),
    employment: EMPLOYMENT[empIndx] || EMPLOYMENT[0],
    location: faker.location.city(),
    name: faker.person.jobTitle(),
    type: POSITIONS[posIndx] || POSITIONS[0],
  };
});
