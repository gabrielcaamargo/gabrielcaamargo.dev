import Image from "next/image";
import personal from '../../assets/images/personal.png'

export function IntroductionImage() {
  return (
    <div className="flex justify-end">
      <Image src={personal} alt="Gabriel Camargo" width={372} className="rounded-lg max-md:w-full"/>
    </div>
  )
}