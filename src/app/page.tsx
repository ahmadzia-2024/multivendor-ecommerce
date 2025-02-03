import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div>
      <p>This is Simple</p>
      <p>TThis Simple</p>
      <p className="font-geist">This is Ghost</p>
      <p className="font-geistMono">This is Ghost Mono</p>
      <p className="font-barlow">This is Barlow</p>
      <ThemeToggle />
    </div>
  );
}
