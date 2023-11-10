import React from 'react';
import Image from 'next/image';
import { thirdProfile } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { TEAM1 } from '@/constants/team';
import Link from 'next/link';

export default function OurTeamTeamSection() {
  return (
    <Section className="md:pt-52">
      <div className="flex flex-col items-center justify-center gap-20 md:gap-52">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          <div
            className="flex flex-col items-center justify-end md:rounded-md bg-gradient-to-r max-w-full from-teal-500 to-teal-300 pt-10 px-10 w-full max-w-full md:max-w-sm md:max-w-sm relative h-35 min-h-full md:h-420px "
            style={{ minHeight: '420px' }}
          >
            <Image alt="" src={thirdProfile} />
            <div className="absolute bottom-4 left-0 px-5">
              <h1 className="font-Poppins text-20 font-bold leading-20 text-white">
                Florante Sugian III
              </h1>
              <p className="font-Poppins text-xs text-white font-medium leading-20">
                Founder/Chief Technology Officer
              </p>
            </div>
          </div>
          <div className="rounded-bl-md rounded-br-md rounded md:rounded-tr-md md:rounded-br-md rounded-none md:rounded-none bg-white p-10 md:py-10 md:px-20 md:py-16 border-x-2 border-b-2 border-solid md:border-y-2 border-teal-400">
            <p className="text-black  text-shadow-md font-inter font-bold text-2xl leading-10 max-w-xl">
              Our team is a blend of creative designers, brilliant developers,
              and strategic thinkers who work in harmony to bring your visions
              to life.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-20 w-full">
          <h1 className="font-Poppins text-4xl md:text-6xl text-teal-400 font-bold text-center">
            The Techstacks Team
          </h1>
          <div className="grid items-stretch justify-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full">
            {TEAM1.map((team) => (
              <div
                key={team.id}
                className="group transition-all flex flex-col items-center justify-end rounded-lg bg-gradient-to-r from-teal-500 to-teal-300 relative w-full md:max-w-sm"
                style={{ minHeight: '400px' }}
              >
                <Image alt={team.name} src={team.src} />
                <div className="absolute bottom-4 left-0 px-5">
                  <h1 className="font-Poppins text-20 font-bold leading-20 text-white">
                    {team.name}
                  </h1>
                  <p className="font-Poppins text-xs text-white font-medium leading-20">
                    {team.position}
                  </p>
                </div>
                <div className=" flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-md bg-slate-700 bg-opacity-100 py-6 px-4 absolute right-0 bottom-0 hidden group-hover:flex transition-a duration-1000">
                  {Object.entries(team.socialMedia).map(
                    ([platform, link], index) => (
                      <Link
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-400 rounded-full p-2"
                      >
                        {platform === 'github' && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.86552 1.05396C4.10449 1.05396 1.05469 4.10322 1.05469 7.86479C1.05469 10.874 3.0062 13.427 5.71237 14.3276C6.05274 14.3907 6.17773 14.1799 6.17773 14C6.17773 13.8376 6.17138 13.301 6.16849 12.7319C4.27366 13.1439 3.87384 11.9283 3.87384 11.9283C3.56402 11.1411 3.11762 10.9318 3.11762 10.9318C2.4997 10.5091 3.1642 10.5177 3.1642 10.5177C3.84814 10.5658 4.20828 11.2196 4.20828 11.2196C4.81572 12.2608 5.80157 11.9598 6.19023 11.7858C6.25134 11.3456 6.42788 11.0451 6.62264 10.8751C5.10989 10.7028 3.51958 10.1188 3.51958 7.50909C3.51958 6.76554 3.78565 6.15793 4.22136 5.68098C4.15064 5.5094 3.91753 4.8167 4.28733 3.87855C4.28733 3.87855 4.85926 3.69549 6.1608 4.5767C6.70404 4.42575 7.28671 4.35011 7.86552 4.34755C8.44434 4.35011 9.02744 4.42575 9.57175 4.5767C10.8717 3.69549 11.4429 3.87855 11.4429 3.87855C11.8136 4.8167 11.5804 5.5094 11.5096 5.68098C11.9463 6.15793 12.2106 6.76549 12.2106 7.50909C12.2106 10.125 10.6173 10.701 9.10067 10.8696C9.34494 11.081 9.56261 11.4955 9.56261 12.1309C9.56261 13.0422 9.55471 13.7756 9.55471 14C9.55471 14.1812 9.6773 14.3936 10.0226 14.3267C12.7273 13.4251 14.6763 10.873 14.6763 7.86479C14.6763 4.10322 11.6269 1.05396 7.86552 1.05396Z"
                              fill="#353E5C"
                            />
                            <path
                              d="M3.60625 10.7561C3.59129 10.7899 3.53798 10.8001 3.48953 10.7769C3.44012 10.7547 3.41235 10.7085 3.42837 10.6746C3.44306 10.6397 3.49637 10.63 3.54567 10.6534C3.59519 10.6756 3.62339 10.7221 3.60625 10.7561ZM3.94127 11.055C3.9088 11.0852 3.84529 11.0712 3.80218 11.0236C3.75763 10.9761 3.7493 10.9126 3.78225 10.882C3.81575 10.8519 3.87733 10.866 3.92199 10.9135C3.96654 10.9616 3.97519 11.0246 3.94122 11.0551L3.94127 11.055ZM4.17112 11.4375C4.12935 11.4665 4.06109 11.4393 4.01894 11.3787C3.97722 11.3182 3.97722 11.2456 4.01985 11.2165C4.06216 11.1873 4.12935 11.2135 4.17209 11.2736C4.21375 11.3352 4.21375 11.4079 4.17107 11.4376L4.17112 11.4375ZM4.55978 11.8805C4.52244 11.9216 4.44296 11.9106 4.38474 11.8544C4.32523 11.7995 4.30862 11.7216 4.34606 11.6804C4.38383 11.6391 4.46379 11.6507 4.52244 11.7064C4.58157 11.7613 4.59963 11.8398 4.55983 11.8805H4.55978ZM5.06211 12.03C5.04571 12.0834 4.96911 12.1076 4.89198 12.085C4.81495 12.0616 4.76453 11.9991 4.78007 11.9452C4.79609 11.8915 4.87301 11.8663 4.95073 11.8905C5.02765 11.9138 5.07819 11.9758 5.06216 12.03H5.06211ZM5.63387 12.0934C5.6358 12.1496 5.57036 12.1962 5.48938 12.1972C5.40792 12.199 5.34206 12.1535 5.34121 12.0983C5.34121 12.0416 5.40515 11.9954 5.48655 11.9941C5.56753 11.9925 5.63387 12.0376 5.63387 12.0934ZM6.19549 12.0719C6.20521 12.1267 6.14891 12.183 6.06852 12.198C5.98947 12.2124 5.91629 12.1786 5.90619 12.1243C5.89636 12.0681 5.95373 12.0118 6.03263 11.9972C6.11318 11.9833 6.18524 12.0162 6.19549 12.0719Z"
                              fill="#353E5C"
                            />
                          </svg>
                        )}
                        {platform === 'linkedin' && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.05273 2.56079C1.05273 2.12398 1.20614 1.76362 1.51292 1.47971C1.81971 1.19579 2.21855 1.05383 2.70942 1.05383C3.19153 1.05383 3.58158 1.1936 3.87962 1.47316C4.1864 1.76145 4.33981 2.13709 4.33981 2.60011C4.33981 3.01943 4.1908 3.36887 3.89276 3.64843C3.58597 3.93671 3.18276 4.08086 2.68312 4.08086H2.66997C2.18787 4.08086 1.79781 3.93671 1.49978 3.64843C1.20174 3.36014 1.05273 2.99759 1.05273 2.56079ZM1.22366 14.0268V5.27332H4.14258V14.0268H1.22366ZM5.75982 14.0268H8.67874V9.13901C8.67874 8.83324 8.7138 8.59736 8.78392 8.43139C8.90664 8.13436 9.09291 7.8832 9.34273 7.67791C9.59254 7.47261 9.90591 7.36996 10.2828 7.36996C11.2646 7.36996 11.7554 8.02953 11.7554 9.34867V14.0268H14.6744V9.00797C14.6744 7.71503 14.3676 6.73442 13.754 6.06612C13.1404 5.39781 12.3296 5.06366 11.3215 5.06366C10.1908 5.06366 9.30986 5.54851 8.67874 6.5182V6.54441H8.66559L8.67874 6.5182V5.27332H5.75982C5.77735 5.55287 5.78612 6.4221 5.78612 7.88102C5.78612 9.33993 5.77735 11.3885 5.75982 14.0268Z"
                              fill="#353E5C"
                            />
                          </svg>
                        )}
                        {platform === 'facebook' && (
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.8043 18.0498V10.2497H13.5543L13.966 7.20986H10.8042V5.26903C10.8042 4.38892 11.0609 3.78918 12.3866 3.78918L14.0773 3.78842V1.0696C13.7849 1.03262 12.7812 0.949829 11.6136 0.949829C9.17591 0.949829 7.50701 2.36645 7.50701 4.96807V7.20986H4.75V10.2497H7.50701V18.0498H10.8043V18.0498Z"
                              fill="#353E5C"
                            />
                          </svg>
                        )}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
