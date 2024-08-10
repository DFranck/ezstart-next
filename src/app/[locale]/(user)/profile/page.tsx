import ComingSoon from '@/components/coming-soon';
import UserProfileInfos from '@/components/shared/user-profile-infos';
import getDeviceType from '@/lib/getDeviceType';

const Profile = async () => {
  const device = await getDeviceType();
  return (
    <>
      <UserProfileInfos className="mt-28" device={device} />
      <ComingSoon message="You can add in this page your personal user information for your project" />
    </>
  );
};

export default Profile;
