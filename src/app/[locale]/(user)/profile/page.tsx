import ComingSoon from "@/components/coming-soon";
import MobileUserProfileBanner from "@/components/mobile/mobile-user-profile-banner";
import UserProfileGallery from "@/components/mobile/user-profile-gallery";
import UserProfileInfos from "@/components/mobile/user-profile-infos";

const Profile = () => {
  return (
    <>
      <MobileUserProfileBanner />
      <UserProfileInfos />
      <UserProfileGallery />
      <ComingSoon />
    </>
  );
};

export default Profile;
