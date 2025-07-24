import Image from 'next/image';
import { PAGE_PATH } from '@/lib/constants';

export default async function Index() {
  return (
    <>
      <div className="container pt-12">
        <div className="text-4xl font-semibold text-center">
          Let&apos;s talk
        </div>
        <div className="mt-10 grid xs:grid-cols-1 gap-4">
          <div className="text-center flex flex-col gap-2">
            <div className="text-base">Thanawat Kittichaikarn</div>
            <div className="text-base">boss41680@gmail.com</div>
            <div className="text-base">096 946 6098</div>
            <div className="text-base">Bangkok, Thailand</div>
          </div>
          <div className="mt-10"></div>
          <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 h-fit max-w-xl w-full mx-auto">
            <a
              href={PAGE_PATH.RESUME}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-2 flex flex-col gap-2 items-center rounded-lg [box-shadow:0px_4px] border-2 border-gray-900 ">
                <Image
                  src="/assets/icons/mdi--resume.svg"
                  alt="email"
                  width={24}
                  height={24}
                />
                <div className="flex gap-2 items-center">
                  <span className="text-lg font-medium">Resume</span>
                </div>
              </div>
            </a>
            <a href="mailto: boss41680@gmail.com">
              <div className="p-2 flex flex-col gap-2 items-center rounded-lg [box-shadow:0px_4px] border-2 border-gray-900 ">
                <Image
                  src="/assets/icons/ic--baseline-email.svg"
                  alt="email"
                  width={24}
                  height={24}
                />
                <div className="flex gap-2 items-center">
                  <span className="text-lg font-medium">Email</span>
                </div>
              </div>
            </a>
            <a
              href={PAGE_PATH.OUT_PATH.GITHUB}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-2 flex flex-col gap-2 items-center rounded-lg [box-shadow:0px_4px] border-2 border-gray-900">
                <Image
                  src="/assets/icons/github.svg"
                  alt="github"
                  width={24}
                  height={24}
                />
                <span className="text-lg font-medium">Github</span>
              </div>
            </a>

            <a
              href={PAGE_PATH.OUT_PATH.LINKEDIN}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-2 flex flex-col gap-2 items-center rounded-lg [box-shadow:0px_4px] border-2 border-gray-900">
                <Image
                  src="/assets/icons/mdi--linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
                <span className="text-lg font-medium">linkedin</span>
              </div>
            </a>

            <a
              href={PAGE_PATH.OUT_PATH.BLOG_MEDIUM}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-2 flex flex-col gap-2 items-center rounded-lg [box-shadow:0px_4px] border-2 border-gray-900">
                <Image
                  src="/assets/icons/mingcute--medium-fill.svg"
                  alt="medium"
                  width={24}
                  height={24}
                />
                <span className="text-lg font-medium">medium</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
