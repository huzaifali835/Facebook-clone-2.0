import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Jauon Ali",
        src: "images/1st.jpg",
        profile: "images/jauon.jpg",
    },
    {
        name: "Azeem Arain",
        src: "images/2nd.jpg",
        profile: "images/azeem.jpg",
    },
    {
        name: "Syed Hamza",
        src: "images/3rd.jpg",
        profile: "images/hamza.jpg",
    },
    {
        name: "Shaikh Wasif",
        src: "images/4th.jpg",
        profile: "images/wasif.jpg",
    },
    {
        name: "Shazil Khan",
        src: "images/5th.jpg",
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
