import { Link, Outlet } from '@remix-run/react';
import moduleStyles from '~/styles/routes/modules.css';
import contentStyles from '~/styles/routes/module-content.css';

export function links() {
  return [
    { rel: 'stylesheet', href: moduleStyles },
    { rel: 'stylesheet', href: contentStyles }
  ];
}

function SidebarHeading({ text }: { text: string }) {
  return <h3 className="sidebar-heading">{text}</h3>;
}

function SidebarItem({ text, link }: { text: string; link: string }) {
  return (
    <li>
      <Link className="sidebar-link" to={link} prefetch="intent">
        {text}
      </Link>
    </li>
  );
}

const sidebarContent = [
  {
    heading: 'Introduction',
    items: [
      {
        text: 'Prerequisites',
        link: '/modules/introduction/prerequisites'
      },
      {
        text: 'Scenario',
        link: '/modules/introduction/scenario'
      }
    ]
  },
  {
    heading: 'Remix Basics',
    items: [
      {
        text: 'What is a PESPA?',
        link: '/modules/remix-basics/what-is-a-pespa'
      },
      {
        text: 'Why Remix?',
        link: '/modules/remix-basics/why-remix'
      },
      {
        text: 'Creating a Project',
        link: '/modules/remix-basics/creating-a-project'
      },
      {
        text: 'Routing',
        link: '/modules/remix-basics/routing'
      },
      {
        text: 'Data Fetching',
        link: '/modules/remix-basics/data-fetching'
      },
      {
        text: 'Data Mutation',
        link: '/modules/remix-basics/data-mutation'
      },
      {
        text: 'In Review',
        link: '/modules/remix-basics/in-review'
      }
    ]
  }
];

export default function Modules() {
  return (
    <div className="layout">
      <div className="menu">
        <Link to="/" prefetch="intent">
          Intro to Remix
        </Link>
      </div>

      <div className="sidebar">
        {sidebarContent.map((section, sectionIndex) => (
          <div key={sectionIndex} className="sidebar-section">
            <SidebarHeading text={section.heading} />
            <hr />

            <ul className="sidebar-list">
              {section.items.map((item, itemIndex) => (
                <SidebarItem
                  key={`${sectionIndex} - ${itemIndex}`}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="content">
        <div className="padding">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
