import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    {
        name: "Huzaifa Ali",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/99299556_853336445150604_2807755202411626496_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=84a396&_nc_ohc=LvaMOFB1UMIAX_Bu_lt&_nc_oc=AQll56GLU62mwgLx8AFcDx-U25ZSqRc37D3BV1tYch5i3sMxR1ei6yRI6HBT5MNJuA0&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT-rmM50gShRA0pjMelsDERZvhpyh6YceEfBXGtwkBCuCw&oe=63694FED",
    },
    {
        name: "Muhammad Azeem Ahmed",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/150942949_1339499226415476_2420047159248570483_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ay8HwLk98loAX8i2fTV&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT97IPQH_YyS5rgv5e5W8wpYD5RQMGYzW0g7w6HSbCpi2w&oe=636754AF",
    },
    {
        name: "Shaikh Wasif",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/280960717_1692428767756624_4134242218033439282_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3yGhNX0JSoQAX-m7-k5&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT-ghY7NThntPJW_V-FEk-vbxJ9hqM9poR4-mfr7Jio5yw&oe=63487DA2",
    },
    {
        name: "Ahad Ali Shaikh",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/249676881_2321620214640351_7704935115913666702_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=h8po13H_ifwAX9nkh3f&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT83QYncnxsQFcoqJXVu_cfNDvYw93gAU8rG1dqGjqZrhg&oe=634873AA",
    },
    {
        name: "Mudabbir Siddiki",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/120529637_3333455736775154_3906555214581432986_n.jpg?stp=dst-jpg_s417x417&_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=4QSDpQfx2HUAX-jL7TR&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT-qHSgfcxVi5GIoYDAFGPMrsjBQl6g5BcwHYWJw0aqR9w&oe=636842DE",
    },
];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Widgets