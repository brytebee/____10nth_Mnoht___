import Link from 'next/link';
import ProfileLink from './ProfileLink';

interface IMapProps {
  label: string;
  href: string;
}

interface ILinks {
  [key: string]: IMapProps[];
}

function LinksContainer<T>({ links, path }: any): React.ReactElement<T> {
  const isActive = (href: string) => {
    return path === href;
  }
  const getClassName = (href: string) => {
    return isActive(href) ? 'px-4 py-1 bg-gray-100 font-bold text-[#333] shadow-sm w-[200px] rounded-[20px]' : 'px-2 py-1 text-base font-bold text-[#333] rounded-[20px] hover:bg-gray-100 hover:text-gray-900 w-[200px]';
  }
  return (
    <div className='mb-auto' >
      <div className='w-auto'>
        {links.map((roleLinks: ILinks, index: number) => (
          Object.entries(roleLinks).map(([section, sectionLinks]) => (
            <div key={index}>
              <dt className="my-[12px] text-sm font-normal text-[#333] capitalize">{section}</dt>
              <dd>
                <ul className="flex flex-col gap-1">
                  {sectionLinks.map(({ label, href }: IMapProps) => (
                    <li key={href} className={getClassName(href)}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))
        ))}
      </div>
      <div className="mt-2 flex flex-col w-auto gap-1">
        <Link href='https://slack.com' target='_blank' className={`mt-auto ${getClassName('https://slack.com')}`}>
          Slack
        </Link>
        <ProfileLink classes={getClassName} />
      </div >
      <div>
        <dt className="mt-[14px] text-sm font-normal text-[#333] capitalize">
          Get Help
        </dt>
        <dd>
          <ul className="mt-2 flex flex-col gap-1">
            <li className={`${getClassName('/questions')}`}>
              <Link href='/questions'>
                Ask questions
              </Link>
            </li>
            <li className={`${getClassName('/announcement')}`}>
              <Link href='/annoucement'>
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