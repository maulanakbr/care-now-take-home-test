import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.treatmentDescription.createMany({
    data: [
      { description: 'Physical therapy' },
      { description: 'Massage therapy' },
      { description: 'Chiropractic adjustment' },
      { description: 'Acupuncture' },
      { description: 'Ultrasound therapy' },
      { description: 'Electrotherapy' },
      { description: 'Hydrotherapy' },
      { description: 'Cryotherapy' },
      { description: 'Heat therapy' },
      { description: 'Occupational therapy' },
    ],
    skipDuplicates: true,
  });

  await prisma.medicationPrescribed.createMany({
    data: [
      { prescribed: 'Ibuprofen 200mg' },
      { prescribed: 'Paracetamol 500mg' },
      { prescribed: 'Amoxicillin 250mg' },
      { prescribed: 'Metformin 500mg' },
      { prescribed: 'Lisinopril 10mg' },
      { prescribed: 'Atorvastatin 20mg' },
      { prescribed: 'Omeprazole 40mg' },
      { prescribed: 'Losartan 50mg' },
      { prescribed: 'Gabapentin 300mg' },
      { prescribed: 'Sertraline 50mg' },
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
