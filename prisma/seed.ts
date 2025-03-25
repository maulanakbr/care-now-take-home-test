import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.treatmentDescription.createMany({
    data: [
      { description: 'Physical therapy', fee: 50000 },
      { description: 'Massage therapy', fee: 75000 },
      { description: 'Chiropractic adjustment', fee: 60000 },
      { description: 'Acupuncture', fee: 55000 },
      { description: 'Ultrasound therapy', fee: 70000 },
      { description: 'Electrotherapy', fee: 65000 },
      { description: 'Hydrotherapy', fee: 80000 },
      { description: 'Cryotherapy', fee: 45000 },
      { description: 'Heat therapy', fee: 40000 },
      { description: 'Occupational therapy', fee: 90000 },
    ],
    skipDuplicates: true,
  });

  await prisma.medicationPrescribed.createMany({
    data: [
      { prescribed: 'Ibuprofen 200mg', fee: 15000 },
      { prescribed: 'Paracetamol 500mg', fee: 10000 },
      { prescribed: 'Amoxicillin 250mg', fee: 20000 },
      { prescribed: 'Metformin 500mg', fee: 25000 },
      { prescribed: 'Lisinopril 10mg', fee: 30000 },
      { prescribed: 'Atorvastatin 20mg', fee: 28000 },
      { prescribed: 'Omeprazole 40mg', fee: 18000 },
      { prescribed: 'Losartan 50mg', fee: 22000 },
      { prescribed: 'Gabapentin 300mg', fee: 26000 },
      { prescribed: 'Sertraline 50mg', fee: 24000 },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
