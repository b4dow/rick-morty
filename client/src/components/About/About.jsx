import imageProfile from '../../assets/image-profile.jpg'
import style from './About.module.css'
console.log(style);

const About = ()=> {
    return (
        <>
            <h1>My Profile</h1>
            <img 
                src={imageProfile} 
                alt="my profile" 
                width='300px'
            />
            <h3 className={style.parrafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, ipsam iste! Tempore adipisci fugiat rem quod ducimus, ab doloremque maxime exercitationem ut, aliquam dolores dicta neque. Deleniti, distinctio dolor! Quae.</h3>
        </>
    )
}

export default About