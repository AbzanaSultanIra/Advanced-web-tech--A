import Link from "next/link";

const NavBar = () => {
  
  return (
    <div>
         <Link href="/"> | Home | </Link>
        <Link href="/dashboard"> | Dashboard | </Link>
        <Link href="/dashboard/createBill"> | Add new Bill | </Link>
        <Link href="/dashboard/createBank"> | Add new Bank | </Link>
        <Link href="/dashboard/createVendor"> | Add new Vendor | </Link>
        <Link href="/dashboard/createPaymentschedule"> | Add new Payment Schedule | </Link>
        
        
    </div>    
  );
};

export default NavBar;