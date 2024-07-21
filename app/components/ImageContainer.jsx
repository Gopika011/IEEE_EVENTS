import Image from "next/image"

const ImageContainer = ({src}) => {
  return (
    <div className="h-60 w-60 rounded-xl relative overflow-hidden transform transition duration-700 hover:scale-110" >
        <Image src={src} fill={true} className="object-cover" sizes="(min-width: 780px) calc(33.33vw - 80px), calc(100vw - 80px)"/>
    </div>
  )
}

export default ImageContainer