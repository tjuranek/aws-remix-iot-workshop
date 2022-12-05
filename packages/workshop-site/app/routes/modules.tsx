import { Link, Outlet } from '@remix-run/react';
import { CheckOutline, Home, CheckFill } from '~/icons';
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

function SidebarItem({
  text,
  link,
  checked
}: {
  text: string;
  link: string;
  checked: boolean;
}) {
  return (
    <li>
      <Link className="sidebar-link" to={link} prefetch="intent">
        {checked ? <CheckFill /> : <CheckOutline />}
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
      },
      {
        text: 'Define a Tech Stack',
        link: '/modules/introduction/define-a-tech-stack'
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
        <Link className="menu-link" to="/" prefetch="intent">
          <span className="menu-icon">
            <Home />
          </span>

          <p className="menu-title">Building with Remix and Iot-App-Kit</p>
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
                  checked={true}
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
