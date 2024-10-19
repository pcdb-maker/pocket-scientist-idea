// src/pages/profiles/index.js
import Link from 'next/link';
import Layout from '../../components/Layout';
import { profiles } from '../../data/profilesData';

const Profiles = () => {
  return (
    <Layout>
      <section>
        <h1>Employee Profiles</h1>
        <div className="profile-grid">
          {profiles.map(profile => (
            <div key={profile.id} className="profile-card">
              <h2>
                <Link href={`/profiles/${profile.id}`}>
                  {profile.name}
                </Link>
              </h2>
              <p><strong>Role:</strong> {profile.role}</p>
              <p><strong>Department:</strong> {profile.department}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Profiles;
