const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcrypt");
const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.users.upsert({
        where: { email: "admin@gmail.com" },
        update: {},
        create: {
            id: 1,
            name: "admin",
            email: "admin@gmail.com",
            password: await hash("admin", 10),
            profile_picture: "https://ik.imagekit.io/7kqwhmhtfm/image.png?updatedAt=1731064015426",
            role_id: 1,
        },
    });

    // const types = await prisma.types.createMany({
    //     data: [
    //         { type: "Sedan", description: "A car with a closed body and a closed trunk separated from the part where the driver and passengers sit" },
    //         { type: "SUV", description: "A large vehicle that is designed to be used on rough surfaces but that is often used on city roads or highways" },
    //         { type: "Truck", description: "A large road vehicle used for carrying goods from one place to another" },
    //         { type: "Van", description: "A vehicle used for carrying goods or people, especially for commercial purposes, such as a truck or a cargo van" },
    //     ],
    // });

    // const manufactures = await prisma.manufactures.createMany({
    //     data: [
    //         {
    //             name: "Toyota",
    //             description:
    //                 "A Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan",
    //             establishment: 1937,
    //             office: "Toyota City, Aichi, Japan",
    //             country: "Japan",
    //             logo: "https://ik.imagekit.io/7kqwhmhtfm/Toyota-logo-25BC276E4D-seeklogo.com.png?updatedAt=1731063503549",
    //         },
    //         {
    //             name: "Honda",
    //             description:
    //                 "A Japanese public multinational conglomerate corporation known as a manufacturer of automobiles, motorcycles, and power equipment",
    //             establishment: 1946,
    //             office: "Minato City, Tokyo, Japan",
    //             country: "Japan",
    //             logo: "https://ik.imagekit.io/7kqwhmhtfm/honda.img?updatedAt=1731072703400",
    //         },
    //         {
    //             name: "Ford",
    //             description:
    //                 "An American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit",
    //             establishment: 1903,
    //             office: "Dearborn, Michigan, United States",
    //             country: "United States",
    //             logo: "https://ik.imagekit.io/7kqwhmhtfm/Ford-Motor-Company-Logo.png?updatedAt=1731063739296",
    //         },
    //         {
    //             name: "Chevrolet",
    //             description:
    //                 "An American automobile division of the American manufacturer General Motors (GM)",
    //             establishment: 1911,
    //             office: "Detroit, Michigan, United States",
    //             country: "United States",
    //             logo: "https://ik.imagekit.io/7kqwhmhtfm/images_q=tbn:ANd9GcTw_Xerxl8zGpSiIVa5RhE3ZTY524YZwaE9NA&s?updatedAt=1731063737199",
    //         },
    //     ],
    // });

    console.log({ admin });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
