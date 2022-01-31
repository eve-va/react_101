import avatar from '../images/avatar.jpg';

export default function Info() {
    return (
        <div className='info'>
            <img src={avatar} alt="Avatar" className='info--avatar'></img>
            <h1 className='info--title'>Yeva Vakhtina</h1>
            <h3 className='info--position'>Node.js Developer</h3>
            <h4 className='info--website'>yevavakhtina.website</h4>
            <button className='email'><i className="fa fa-envelope-square"></i> Email</button>
            <button className='linkedin'><i className="fa fa-linkedin"></i> LinkedIn</button>
        </div>
    )
}