export interface Testimonial {
  /** The quality this client's words speak to; shown as the card's headline. */
  label: string;
  quote: string;
  name: string;
  from: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    label: 'Proactive',
    quote:
      'Techstacks completed the task in great detail. They were very proactive and took the initiative in many different areas, including informing us of a potential security vulnerability in our existing software.',
    name: 'Don',
    from: 'NextPay Ph',
  },
  {
    label: 'Fast',
    quote:
      'Working with Techstacks was a great experience—they were proactive, friendly, and incredibly fast in delivering exactly what we needed. Their responsiveness and attention to detail made the entire process smooth and efficient from start to finish.',
    name: 'Danilo Dela Pena',
    from: 'CEO, Shoe Crew PH',
  },
  {
    label: 'Responsive',
    quote:
      "One of the best agencies we've ever worked with. Solid work that is very responsive to our needs. Techstacks, thank you so much for everything you've done.",
    name: 'Peter',
    from: 'CTO, Release Media Inc.',
  },
  {
    label: 'Clear communication',
    quote:
      'I had a coding problem with a website I was developing for a client that Techstacks helped me to resolve. Their expertise made the difference! They communicated clearly and efficiently, which greatly impressed me.',
    name: 'Rheanna',
    from: 'Owner, Fancypants Design Co.',
  },
];
