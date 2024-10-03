import { type FormInput } from '@/components/blackbear-techstacks/blackbear-form';

export interface InputType {
  field: keyof FormInput;
  placeHolder: string;
  required: boolean;
  pattern?: string;
  customMessage?: string;
  courseSelect?: string[];
}

export const inputDetails: InputType[] = [
  {
    field: 'firstName',
    placeHolder: 'First Name',
    required: true,
  },
  {
    field: 'lastName',
    placeHolder: 'Last Name',
    required: true,
  },
  {
    field: 'email',
    placeHolder: 'Email',
    required: true,

    pattern: '/^S+@S+$/i',
    customMessage: 'Email must be in correct Format',
  },
  {
    field: 'phone',
    placeHolder: 'Phone',
    required: true,
    customMessage: 'Phone Number must be in correct Format',
  },
  {
    field: 'countryAddress',
    placeHolder: 'Country Address',
    required: true,
  },
  {
    field: 'itPosition',
    placeHolder: 'Current IT Position',
    required: false,
  },
  {
    field: 'course',
    placeHolder: 'Course',
    courseSelect: [
      'Cybersecurity Awareness',
      'Certified digital forensic & incident responder',
      'Certified pentester - VAPT',
      'Table-top exercise Technical',
    ],
    required: false,
  },
  {
    field: 'feedBackEssay',
    placeHolder: 'What do you expect from this training?',
    required: false,
  },
];

export const otherCourse: string[] = [
  'Cybersecurity Awareness',

  'Certified Digital Forensic Incident Responder',
  'Certified Pentester - VAPT',

  'Table Top Exercise - Technical',

  'Table Top Exercise - Management',
];
