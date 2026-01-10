import './UserProfileCard.css';

const UserProfileCard = ({
  name = 'John Doe',
  role = 'Frontend Developer',
  bio = 'Passionate about building accessible and performant web applications.',
  image = 'https://ui-avatars.com/api/?name=John+Doe&background=random',
}) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
    >
      <div className="user-profile-card">
        <div className="card-header"></div>
        <img src={image} alt={name} className="card-image" />
        <div className="card-body">
          <h3 className="user-name">{name}</h3>
          <p className="user-role">{role}</p>
          <p className="user-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
