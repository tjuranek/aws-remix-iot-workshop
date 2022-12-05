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
    heading: 'PESPAs',
    items: [
      {
        text: 'Short History of Web Architecture',
        link: '/modules/pespas/short-history-of-web-architecture'
      },
      {
        text: 'Progressively Enhanced Single Page App',
        link: '/modules/pespas/progressively-enhanced-single-page-app'
      },
      {
        text: 'Where Does Remix Fit?',
        link: '/modules/pespas/where-does-remix-fit'
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
