import './App.css';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';

export default function Invite(){
    const cld = new Cloudinary({cloud: {cloudName: 'peruviansoftwaresolutions'}});
    const imageUrl = `samples/petizo/Invitacion`;
    const myImage = cld.image(imageUrl)
    return(
        <div className='flex justify-center items-center w-full h-full'>
            <div className="w-1/3 flex justify-center items-center" >
                <iframe src="https://embed.waze.com/iframe?zoom=17&lat=-12.070844&lon=-77.091762&ct=livemap" width="400" height="390" allowfullscreen></iframe>
            </div>
            <div className="w-1/3 items-center" >
            <   AdvancedImage className="px-1" cldImg={myImage} />
            </div>
            <div  className="w-1/3 flex justify-center items-center ">
                <iframe src="https://embed.waze.com/iframe?zoom=17&lat=-12.070844&lon=-77.091762&ct=livemap" width="400" height="390" allowfullscreen></iframe>
            </div>
        </div>
    )
}