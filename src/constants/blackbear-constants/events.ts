interface EventType {
  title: string;
  date: string;
  days: number;
  benefits: string[];
  oldPrice: number;
  newPrice: number;
  pdfLink: string;
}

export const events: EventType[] = [
  {
    title: 'Cybersecurity Awareness',
    date: 'JANUARY 24, 2025',
    days: 1,
    benefits: [
      ' Understand the core principles of cybersecurity.',
      'Identify and assess common cyber threats.',
      'Learn proactive measures to prevent attacks.',
      'Recognize individual roles in maintaining security.',
      'Understand the importance of incident reporting.',
      'Respond effectively to security incidents.',
      'Promote a cybersecurity culture within your organization.',
      'Develop strategies to protect critical assets.',
      'Stay updated with evolving cybersecurity threats.',
      'Foster continuous training and awareness initiatives.',
    ],
    oldPrice: 5630,
    newPrice: 2815,
    pdfLink:
      'https://www.innovatemarketing.co.nz/_files/ugd/89fa3f_aef3e1cf0fb34c9c9e416554c7b8bd46.pdf',
  },
  {
    title: 'Certified digital forensic & incident responder',
    date: 'JAN 30-FEB 1, 2025',
    days: 3,
    benefits: [
      'Understand the fundamentals of digital forensics and incident response.',
      'Identify and analyze different types of digital evidence.',
      'Learn to use forensic tools for acquiring and analyzing data.',
      'Master advanced forensic analysis techniques.',
      'Apply incident response methodologies in real-world scenarios.',
      'Develop strategies for containment and eradication of threats.',
      'Coordinate effective incident response across teams.',
      'Improve skills in documenting and reporting forensic findings.',
      'Communicate technical information to non-technical audiences.',
      'Validate your expertise with a recognized certification.',
    ],
    oldPrice: 50671,
    newPrice: 39411,
    pdfLink:
      'https://www.innovatemarketing.co.nz/_files/ugd/89fa3f_6afab90c811f4723b527fff3e9c61555.pdf',
  },
  {
    title: 'Certified Pentester - VAPT',
    date: 'JANUARY 24-26, 2025',
    days: 3,
    benefits: [
      'Gain real-world insights into the daily activities of an ethical hacker.',
      'Understand the concepts and importance of Vulnerability Assessment and Penetration Testing (VAPT).',
      'Master foundational networking, Linux, and web application knowledge.',
      'Learn critical planning and scoping techniques for VAPT engagements.',
      'Understand the structured phases of VAPT, from reconnaissance to reporting.',
      'Discover advanced information gathering and OSINT techniques.',
      'Identify and assess vulnerabilities using automated and manual methods.',
      'Explore common attack vectors and ethical hacking exploitation techniques.',
      'Get hands-on experience with popular pentesting tools like Nmap, Burp Suite, and Metasploit.',
      'Learn effective reporting and communication of findings to stakeholders.',
    ],
    oldPrice: 53486,
    newPrice: 39411,
    pdfLink:
      'https://www.innovatemarketing.co.nz/_files/ugd/89fa3f_4c7ae3e2e21b4ab582d837d131fa1850.pdf',
  },
  {
    title: 'Table-top Exercise Technical',
    date: 'FEBRUARY 7, 2025',
    days: 1,
    benefits: [
      'Gain a deep understanding of your organization’s workflow and cyber threat landscape.',
      'Identify key cybersecurity concerns specific to your operations.',
      'Conduct realistic scenario-based exercises with industry-experienced facilitators.',
      'Simulate real-world cyber incidents to test your organization’s preparedness.',
      'Engage key stakeholders in decision-making processes during simulated attacks.',
      'Evaluate the effectiveness of current cybersecurity plans, tools, and processes.',
      'Receive expert feedback on your incident response actions.',
      'Improve coordination and communication among your incident response teams.',
      'Get a detailed After-Action Report outlining key observations and recommendations.',
      'Enhance your organization’s readiness for real-world cyber threats.',
    ],
    oldPrice: 281507,
    newPrice: 230836,
    pdfLink:
      'https://www.innovatemarketing.co.nz/_files/ugd/89fa3f_91c86fe94e7544df8316e982b7ce0538.pdf',
  },
];
