'use client';

import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import {
  inputDetails,
  otherCourse,
} from '@/constants/blackbear-constants/form';
import { useToast } from '../ui/use-toast';
import { Button } from '../ui/button';
import { blackbearAction } from './action/blackbear-action';

export interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryAddress: string;
  itPosition?: string;
  course?: string;
  feedBackEssay?: string;
  feedBackCheck?: string | string[];
}

export function BlackBearForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormInput>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);

    const response = await blackbearAction(data);

    if (response.type === 'success') {
      setIsLoading(false);
      toast({
        title: 'Submitted!',
        description: 'Thanks, we received your submission.',
      });
    }

    reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryAddress: '',
      itPosition: '',
      course: '',
      feedBackEssay: '',
      feedBackCheck: '',
    });
    setSelectedCourses([]);
  };

  const handleCheckboxChange = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course],
    );
  };

  const getInputType = (field: string) => {
    if (field === 'email') return 'email';
    if (field === 'phone') return 'number';
    return 'text';
  };

  // const emailPattern = /^S+@S+$/i;

  return (
    <div className="flex justify-center w-full py-10 px-3 font-poppins ">
      <form
        className="flex-col flex  w-full max-w-lg space-y-4 p-3 shadow-3xl "
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputDetails.map((data) => (
          <div key={data.placeHolder}>
            <div className="text-background dark:text-foreground ">
              {data.placeHolder}
              {data.required ? '*' : null}
            </div>
            <div>
              {!data.courseSelect ? (
                <div>
                  {data.field !== 'feedBackEssay' ? (
                    <input
                      className="w-full text-background bg-background dark:bg-foreground border-2 border-gray-500 h-12 p-2"
                      placeholder={data.placeHolder}
                      type={getInputType(data.field)}
                      {...register(data.field, {
                        required: data.required
                          ? `${data.placeHolder} is required`
                          : false,
                        maxLength: 80,
                      })}
                    />
                  ) : (
                    <textarea
                      className="w-full text-background bg-background dark:bg-foreground border-2 border-gray-500 h-24 p-2"
                      placeholder={data.placeHolder}
                      {...register(data.field, {
                        required: data.required
                          ? `${data.placeHolder} is required`
                          : false,
                      })}
                    />
                  )}
                </div>
              ) : (
                <div>
                  <select
                    className="w-full h-12 bg-background dark:bg-foreground text-foreground dark:text-background"
                    {...register(data.field, { required: data.required })}
                  >
                    {data.courseSelect.map((course) => (
                      <option
                        className="text-foreground dark:text-background"
                        key={course}
                        value={course}
                      >
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            {errors[data.field]?.message ? (
              <div className="text-md text-red-500 flex py-2 drop-shadow-whiteLine ">
                <div className="border-2 text-sm rounded-full border-red-500 w-[1.3rem] pb-2 h-[1.3rem] text-center ">
                  !
                </div>
                <div className="px-3 ">{errors[data.field]?.message}</div>
              </div>
            ) : null}
          </div>
        ))}

        <div>
          <div className="text-white ">
            What other courses do you want to see in the future?
          </div>
          <div className="px-2 md:px-4 space-y-2 tracking-normal md:tracking-wide py-4">
            {otherCourse.map((course) => (
              <div key={course}>
                <label
                  className="hover:cursor-pointer flex "
                  style={{ background: 'none' }}
                >
                  <input
                    checked={selectedCourses.includes(course)}
                    className="absolute opacity-0"
                    onChange={() => {
                      handleCheckboxChange(course);
                    }}
                    type="checkbox"
                  />
                  <div
                    className={`w-[1.5rem] h-[1.5rem]  border-2  border-gray-500 rounded flex items-center justify-center ${
                      selectedCourses.includes(course)
                        ? 'text-background dark:text-foreground'
                        : 'bg-transparent'
                    }`}
                  >
                    {selectedCourses.includes(course) && (
                      <svg
                        className="w-4 h-4 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    )}
                  </div>
                  <div className="pl-2 text-background dark:text-foreground">
                    {course}
                  </div>
                </label>
              </div>
            ))}
          </div>

          <Button
            className="w-full bg-amber-500 drop-shadow-md py-2 text-white hover:cursor-pointer shadow-xl"
            disabled={
              isLoading ||
              !watch('firstName') ||
              !watch('lastName') ||
              !watch('email') ||
              !watch('phone') ||
              !watch('countryAddress')
            }
            type="submit"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
}
