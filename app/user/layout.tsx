
import UserNavbar from "@/components/userNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyPharma",
  description: "An online pharmacy store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        
           <UserNavbar />
              <div className="mx-12 mt-8">
              {children}
              </div>
             
        </div>
      </body>
    </html>
  );
}
