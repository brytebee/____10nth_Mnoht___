import Link from 'next/link';

interface ILinks {
  [key: string]: IMapProps[];
}

interface IMapProps {
  label: string;
  href: string;
}

const LinksContainer = ({ links }: any) => {
  return (
    <div className='mb-auto'>
      <div className='w-auto'>
        {links.map((roleLinks: ILinks, index: number) => (
          Object.entries(roleLinks).map(([section, sectionLinks]) => (
            <div key={index}>
              <dt className="text-sm font-medium text-gray-500">{section}</dt>
              <dd>
                <ul className="">
                  {sectionLinks.map(({ label, href }: IMapProps) => (
                    <li key={href} className="px-2 py-1 text-sm font-normal text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 w-36">
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))
        ))}
      </div>

      <div className="mt-2 pl-0 flex flex-col w-auto">
        <Link href='slack' className='mt-auto px-2 py-1 text-sm font-normal text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 w-36'>
          Slack
        </Link>
        <Link href='profile' className='mt-auto px-2 py-1 text-sm font-normal text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 w-36'>
          Profile
        </Link>
      </div >
      <div>
        <dt className="">
          Get Help
        </dt>
        <dd>
          <ul className="mt-2 space-y-2">
            <li className="px-2 py-1 text-sm font-normal text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 w-36">
              <Link href='/projects'>
                Ask questions
              </Link>
            </li>
            <li className="px-2 py-1 text-sm font-normal text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 w-36">
              <Link href='/projects/1'>
                Announcement
              </Link>
            </li>
          </ul>
        </dd>
      </div>
    </div >
  );
};

export default LinksContainer;