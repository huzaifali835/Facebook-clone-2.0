import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Jauon Ali",
        src: "images/huzaifa-1.jpg",
        profile: "images/jauon.jpg",
    },
    {
        name: "Azeem Arain",
        src: "images/huzaifa-1.jpg",
        profile: "images/azeem.jpg",
    },
    {
        name: "Syed Hamza",
        src: "images/huzaifa-1.jpg",
        profile: "images/hamza.jpg",
    },
    {
        name: "Shaikh Wasif",
        src: "images/huzaifa-1.jpg",
        profile: "images/wasif.jpg",
    },
    {
        name: "Shazil Khan",
        src: "images/huzaifa-1.jpg",
        profile: "images/shazil.jpg",
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
