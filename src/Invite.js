import './App.css';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
           /* <iframe  width="600"  height="450"  style={{ border: '0' }} // Provide style as an object
  title="Waze Map 2"
  loading="lazy"
  allowFullScreen // Use camelCase for boolean attributes
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8DPCd0e1IJnintEpZWnMgMFEkoOYMqXY&q=Space+Needle,Seattle+WA"></iframe>
  
              <div  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-2 py-2 ">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLima&bgcolor=%230B8043&showPrint=0&showCalendars=0&mode=MONTH&showNav=0&src=NjY5ZTkwZjQ2ZTNiZTJhNjMxNzY5NzBkOTQzNTQyMmQwZmIwYWQ5ZWVmMGEwZWMyZGY3YTQwY2Q1YTg5YTliYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" style={{ border: "solid 1px #777" }} width="400" height="390" frameborder="0" scrolling="no"></iframe>
            </div>
  
  */
export default function Invite(){
    const cld = new Cloudinary({cloud: {cloudName: 'peruviansoftwaresolutions'}});
    const imageUrl = `samples/petizo/Invitacion`;
    const myImage = cld.image(imageUrl)
    return(
        <div className='px-4 flex flex-wrap justify-center items-center w-full h-full'>
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-2 py-2 flex justify-center items-center transform motion-safe:hover:scale-150" >
                <AdvancedImage className="" cldImg={myImage} width="400" height="390" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-2 py-2 flex justify-center items-center transform motion-safe:hover:scale-150" >
                <iframe title="Waze Map 1" src="https://embed.waze.com/iframe?zoom=17&lat=-12.070844&lon=-77.091762&ct=livemap" width="400" height="390" allowfullscreen></iframe>
            </div>




        </div>
    )
}
