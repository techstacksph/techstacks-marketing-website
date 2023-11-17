interface Faq {

    topic: string;
    questions: {
      q: string;
      a: string;
    }[];
  }
  
export const CompanyFaqs: Faq[] = [
    {
      topic: "GeneralQuestion",
      questions: [
        {
          q: "What services does your IT company provide?",
          a: "We specialize in creating custom web applications and websites tailored to meet the unique needs of our clients. Our services encompass everything from initial concept and design to development, testing, and ongoing support.",
        },
      ],
    },
    {
        topic: "GeneralQuestion1",
        questions: [
            {
                q: "How can I get in touch with your team?",
                a: "You can reach us through our techstacksph.com on our website. Alternatively, you can email us at techstacks@gmail.com or call us at [your contact number].",
              },
        ],
      },
    {
      topic: "Project Process",
      questions: [
        {
          q: "What is the typical process for a web development project?",
          a: "Our process typically involves a discovery phase, project planning, design mockups, development, testing, and deployment. We work closely with clients at each stage to ensure their vision is realized.",
        }
      ],
    },
    {
      topic: "Project Process1",
      questions: [
        {
          q: "How long does it take to complete a web development project?",
          a: "The timeline varies depending on the complexity and scope of the project. We provide detailed project timelines during the planning phase, taking into account client feedback and approvals.",
        },
      ],
    },
    {
        topic: "Technical Details",
            questions: [     
                {
                    q: "What technologies do you use for web development?",
                    a: "We leverage a range of technologies based on project requirements. This includes but is not limited to HTML, CSS, JavaScript, and popular frameworks such as React, Angular, and Vue.js for front-end development. For back-end development, we work with technologies like Node.js, Django, and Ruby on Rails.",
            },
            ],
  },
    {
      topic: "Technical Details1",
      questions: [
      
        {
          q: "Do you provide website maintenance services?",
          a: "Yes, we offer ongoing maintenance and support services to ensure your website or web app remains up-to-date, secure, and performs optimally.",
        },
      ],
    },
    {
      topic: "Technical Details2",
      questions: [
      
        {
            q: "How do you determine the cost of a project?",
            a: "Project costs are determined based on factors like project scope, complexity, and estimated time required. We provide detailed project proposals with transparent pricing.",
          },
      ],
    },
    {
        topic: "Technical Details3",
        questions: [
        
          {
              q: "What payment methods do you accept?",
              a: "We accept various payment methods, including bank transfers and online payments. Details will be provided in the project proposal.",
            },
        ],
      },
    {
        topic: "Security and Privacy",
        questions: [
        
          {
              q: "How do you ensure the security of web applications you develop?",
              a: "Security is a top priority. We follow industry best practices, conduct regular security audits, and implement measures to protect against common vulnerabilities.",
            },
        ],
      },
      {
        topic: "Security and Privacy1",
        questions: [
        
            {
                q: "Do you sign non-disclosure agreements (NDAs)?",
                a: "Yes, we take client confidentiality seriously. We are open to signing NDAs to ensure the privacy of your project details.",
              },
        ],
      },
      {
        topic: "Support and Training",
        questions: [
        
            {
                q: "What kind of support do you provide after the project is completed?",
                a: "We offer post-launch support to address any issues or questions. Extended support plans are also available for ongoing assistance.",
              },
        ],
      },
      {
        topic: "Support and Training1",
        questions: [
        
            {
                q: "Do you provide training on using the web applications you develop?",
                a: "Yes, we provide training sessions to ensure your team is comfortable using the applications we develop. Training can be tailored to your specific needs.",
              },
        ],
      },
  
  ];
