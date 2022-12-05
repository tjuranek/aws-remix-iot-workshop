import { json } from '@remix-run/node';
import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getEmployees } from '~/models/employee.server';
import { requireUser } from '~/session.server';

export async function loader({ request }: LoaderArgs) {
  await requireUser(request);

  const employees = await getEmployees();

  return json({ employees });
}

export default function Employees() {
  const { employees } = useLoaderData<typeof loader>();

  return (
    <>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          email={employee.emailAddress}
          phone={employee.phoneNumber}
        />
      ))}
    </>
  );
}

function EmployeeCard({
  name,
  email,
  phone
}: {
  name: string;
  email: string;
  phone: string;
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div>
          <p>
            <b>Email: </b>
            {email}
          </p>
          <p>
            <b>Phone: </b>
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
}
