import { BlackBearForm as Form } from '@/components/blackbear-techstacks/blackbear-form';

export default function BlackBearForm() {
  return (
    <div className=" w-full flex justify-center bg-gradient-to-br from-black from-10% via-amber-600 via-100% to-orange-500 to-40%">
      <div className="max-screen-w-5xl w-full">
        <Form />
      </div>
    </div>
  );
}
