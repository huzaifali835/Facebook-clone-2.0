import Image from "next/image"
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
function Post({name, message, email, postImage, image, timestamp}) {
  return (
    <div className="flex flex-col">
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">
                <Image src={image} width={40} height={40} layout='fixed' className='rounded-full' />
                <div>
                    <p className="font-medium">{name}</p>
                    {timestamp ? (
                        <p className="text-xs text-gray-400">
                            {new Date(timestamp?.toDate()).toLocaleDateString()}
                        </p>
                    ) : (
                        <p className="text-xs text-gray-400">
                            Loading
                        </p>
                    )}
                </div>
            </div>
            <p className="pt-4">{message}</p>
        </div>
        {postImage && (
            <div className="relative h-56 md:h-[492px] bg-white">
                <Image
                    objectFit="cover"
                    layout="fill"
                    src={postImage}
                />
            </div>
        )}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
            <div className="inputIcon rounded-none p-2">
                <ThumbUpIcon className="h-6" />
                <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon rounded-none p-2">
                <ChatAltIcon className="h-6" />
                <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="inputIcon rounded-none p-2">
                <ShareIcon className="h-6" />
                <p className="text-xs sm:text-base">Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post
