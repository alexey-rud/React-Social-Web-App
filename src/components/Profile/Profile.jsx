import React from 'react';
import s from './Profile.module.css';



const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdeKHmWgRx40F5jyyb6k02ebuvYocIkk7eg&usqp=CAU" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU" />
      descr
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          Post 1
        </div>
        <div>
          Post 2
        </div>
      </div>
    </div>
    );
}

export default Profile;