import Image from 'next/image';
import Link from 'next/link';
import { crossImg } from '@/assets/images';
import { events } from '@/constants/blackbear-constants/events';
import { Subheading } from '../ui/typography';

export function EventDetails() {
  const formatPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  });

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
              {e.benefits.map((ben) => (
                <li className="list-disc" key={ben}>
                  {ben}
                </li>
              ))}
            </ul>

            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
              <div className="flex flex-col p-6 gap-4 w-full max-w-52 bg-amber-400">
                <div className="relative">
                  <Image
                    alt="err"
                    className="absolute red-cross w-16 left-5 "
                    src={crossImg}
                  />
                  <Subheading className="w-full text-2xl font-bold text-muted ">
                    {/* PHP {e.oldPrice} */}
                    {formatPrice.format(e.oldPrice)}
                  </Subheading>
                </div>
                <Subheading className="w-full   text-2xl font-bold text-foreground dark:text-background ">
                  {formatPrice.format(e.newPrice)}
                </Subheading>
              </div>
              <Link
                className="flex justify-center items-center text-center bg-background dark:bg-foreground h-16 text-muted/50 w-52 rounded-full text-xl p-6"
                href="#form"
              >
                I want this
              </Link>
            </div>
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
