import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPasswordHash = await bcrypt.hash("ChangeMe123!", 10);

  await prisma.user.upsert({
    where: { email: "admin@firesafepro.in" },
    create: {
      name: "FireSafe Admin",
      email: "admin@firesafepro.in",
      phone: "9999999999",
      passwordHash: adminPasswordHash,
      role: "ADMIN"
    },
    update: {}
  });

  console.log("Seed complete: admin user ready");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
