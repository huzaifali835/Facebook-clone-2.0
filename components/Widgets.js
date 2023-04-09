import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    {
        name: "Jauon Ali",
        src: "images/jauon.jpg",
    },
    {
        name: "Azeem Arain",
        src: "images/azeem.jpg",
    },
    {
        name: "Syed Hamza",
        src: "images/hamza.jpg",
    },
    {
        name: "Shaikh Wasif",
        src: "images/wasif.jpg",
    },
    {
        name: "Shazil Khan",
        src: "images/shazil.jpg",
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
