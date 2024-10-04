import Image from 'next/image';
import Link from 'next/link';
import { crossImg } from '@/assets/images';
import { events } from '@/constants/blackbear-constants/events';
import { Subheading } from '../ui/typography';
import { Button } from '../ui/button';

export function EventDetails() {
  return (
    <div className="flex justify-center py-8">
      <div className="grid  grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-20 w-full p-4">
        {events.map((e) => (
          <div
            className="p-4 md:p-8 flex flex-col  gap-10 h-full   justify-between border border-background shadow-background dark:shadow-background shadow-2xl"
            key={e.title}
          >
            <div className="flex-col">
              <div className="p-1 text-white h-full max-h-[200px] font-bold  uppercase   bg-gradient-to-r from-amber-400 from-10%  to-[rgba(255, 40, 145, 0)]">
                <span className="drop-shadow-4xl tracking-wide text-3xl xmd:text-3xl lg:text-5xl ">
                  {e.title}
                </span>
              </div>
              <div className="bg-gradient-to-r from-red-500  to-white bg-clip-text text-transparent text-3xl uppercase  drop-shadow-3xl   font-extrabold tracking-tighter font-anton ">
                {e.date}
              </div>
            </div>
            <div className="text-white text-md tracking-tigher uppercase font-bold ">
              Total Instructions: {e.days} {e.days === 1 ? 'DAY' : 'DAYS'}
            </div>
            <ul className="px-5 md:px-10 text-md roboto-regular tracking-wide text-white font-bold">
              {e.benefits.map((ben, index) => (
                <li className="list-disc" key={index}>
                  {ben}
                </li>
              ))}
            </ul>

            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
              <div className="flex flex-col gap-4 w-full max-w-52">
                <Subheading className="w-full p-6  text-2xl font-bold  text-gray-500 bg-amber-400">
                  PHP {e.newPrice}
                </Subheading>
                <div className="relative">
                  <Image
                    alt="err"
                    className="absolute red-cross w-16 left-5 "
                    src={crossImg}
                  />
                  <Subheading className="w-full text-2xl font-bold text-destructive">
                    PHP {e.oldPrice}
                  </Subheading>
                </div>
              </div>
              <Button className="bg-background dark:bg-foreground h-16 text-muted/50 w-52 rounded-full text-xl p-6">
                I want this
              </Button>
            </div>

            {/* <div className="flex justify-center  w-full px-2 md:px-5 md:px-0 ">
              <div className="flex-col md:flex md:flex-row w-full pt-5 justify-between space-y-4 md:space-y-0 md:space-x-4 ">
                <div className=" text-gray-500 bg-amber-400 px-2 py-5 text-xl   md:w-fit font-bold md:text-2xl w-full ">
                  <div className="flex justify-between w-full space-x-10">
                    <div className="relative">
                      <Image
                        alt="err"
                        className="absolute red-cross w-14 left-[60%] "
                        src={crossImg}
                      />
                      PHP<span className="">{e.oldPrice}</span>
                    </div>
                    <div>
                      PHP <span>{e.newPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:justify-end">
                  <a
                    className="w-full md:w-fit"
                    href="https://www.innovatemarketing.co.nz/blackbearacademy"
                  >
                    <div className="text-gray-500 bg-gray-200 rounded-full py-5 px-3   md:w-56  flex justify-center items-center drop-shadow-glow hover:cursor-pointer">
                      <div> I Want This</div>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
            <Link
              className="text-background dark:text-foreground"
              href={e.pdfLink}
              target="_blank"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
