import { prisma } from '~/db.server';

/**
 * Gets all available employees.
 */
export async function getEmployees() {
  return await prisma.employee.findMany();
}
