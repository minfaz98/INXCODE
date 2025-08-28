import SocialMediaLinks from "./SocialmediaLinks";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-center">
      <p>© {new Date().getFullYear()} INXCODE Pvt Ltd. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <SocialMediaLinks/>
      </div>
    </footer>
  );
}
