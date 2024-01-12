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
    return isActive(href) ? 'px-4 py-1 bg-gray-100 font-bold text-body shadow-sm w-[148px] rounded-[20px]' : 'px-2 py-1 text-base font-bold text-[#333] rounded-[20px] hover:bg-gray-100 hover:text-gray-900 w-[148px]';
  }
  return (
    <div className='mb-auto' >
      <div className='w-auto'>
        {links.map((roleLinks: ILinks, index: number) => (
          Object.entries(roleLinks).map(([section, sectionLinks]) => (
            <div key={index}>
              <dt className="my-[12px] text-sm font-normal text-body capitalize">{section}</dt>
              <dd>
                <div className="flex flex-col gap-1">
                  {sectionLinks.map(({ label, href }: IMapProps) => (
                    <Link key={href} href={href} className={getClassName(href)}>{label}</Link>
                  ))}
                </div>
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
        <dt className="mt-[14px] text-sm font-normal text-body capitalize">
          Get Help
        </dt>
        <dd>
          <div className="mt-2 flex flex-col gap-1">
            <Link href='/questions' className={`${getClassName('/questions')}`}>
              Ask questions
            </Link>
            <Link href='/annoucement' className={`${getClassName('/announcement')}`}>
              Announcement
            </Link>
          </div>
        </dd>
      </div>
    </div >
  );
};

export default LinksContainer;