import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Huzaifa Ali",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/100821097_851441318673450_1023238519042080768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T8H9_okTUoEAX9XKHjY&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT_5JTrb21_Inl1zA2mhK9ax8DdOBWuiFIZrof3dRWu9nQ&oe=636A16F3",
        profile: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/99299556_853336445150604_2807755202411626496_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=84a396&_nc_ohc=LvaMOFB1UMIAX_Bu_lt&_nc_oc=AQll56GLU62mwgLx8AFcDx-U25ZSqRc37D3BV1tYch5i3sMxR1ei6yRI6HBT5MNJuA0&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT-rmM50gShRA0pjMelsDERZvhpyh6YceEfBXGtwkBCuCw&oe=63694FED",
    },
    {
        name: "Muhammad Azeem Ahmed",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/83514998_1037072466658155_6272796677791285248_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=LldEcKHzvoQAX8HAy1E&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT8g_nSIjUE4dhQDKwBgLNm-AozyCxQdhoq_xbWpLZ3S9w&oe=636675F0",
        profile: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/150942949_1339499226415476_2420047159248570483_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ay8HwLk98loAX8i2fTV&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT97IPQH_YyS5rgv5e5W8wpYD5RQMGYzW0g7w6HSbCpi2w&oe=636754AF",
    },
    {
        name: "Shaikh Wasif",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/185941200_1435611290105041_399843925456179033_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=oA-1I0M3iBwAX8rdJyc&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT-u8Exqy1g2LlZNzTQB5_c7wkFMO72JA935niq0uur9FQ&oe=6368B3A1",
        profile: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/280960717_1692428767756624_4134242218033439282_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3yGhNX0JSoQAX-m7-k5&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT-ghY7NThntPJW_V-FEk-vbxJ9hqM9poR4-mfr7Jio5yw&oe=63487DA2",
    },
    {
        name: "Ahad Ali Shaikh",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/249676881_2321620214640351_7704935115913666702_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=h8po13H_ifwAX9nkh3f&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT83QYncnxsQFcoqJXVu_cfNDvYw93gAU8rG1dqGjqZrhg&oe=634873AA",
        profile: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/249676881_2321620214640351_7704935115913666702_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=h8po13H_ifwAX9nkh3f&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT83QYncnxsQFcoqJXVu_cfNDvYw93gAU8rG1dqGjqZrhg&oe=634873AA",
    },
    {
        name: "Mudabbir Siddiki",
        src: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/294317732_5273015066152535_4428007265180922628_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=mqgmtEJHIPQAX_pSShl&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT_OClkEszyB5vX0Tr01xg--utlHq5bgv3F49XIHxARpfQ&oe=63471233",
        profile: "https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/120529637_3333455736775154_3906555214581432986_n.jpg?stp=dst-jpg_s417x417&_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=4QSDpQfx2HUAX-jL7TR&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT-qHSgfcxVi5GIoYDAFGPMrsjBQl6g5BcwHYWJw0aqR9w&oe=636842DE",
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  )
}

export default Stories
