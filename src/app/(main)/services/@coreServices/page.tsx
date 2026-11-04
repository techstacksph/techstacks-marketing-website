import { Band } from '@/components/marketing';
import { SolutionDetail } from '@/components/solution-detail';
import { SOLUTIONS } from '@/constants/solutions';
import { isOdd } from '@/utils/is-odd';

export default function CoreServices() {
  return (
    <>
      {SOLUTIONS.map((solution, index) => (
        <Band
          id={solution.id}
          key={solution.id}
          tone={isOdd(index) ? 'surface' : 'default'}
        >
          <SolutionDetail reverse={isOdd(index)} solution={solution} />
        </Band>
      ))}
    </>
  );
}
