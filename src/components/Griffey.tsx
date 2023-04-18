import Image from "next/image";

export default function Griffey() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image width={600} height={400} src={"/griffey.gif"} alt="8-bit King Griffey Jr." className="space-x-50 space-y-20" />
        </div>
  );
}
