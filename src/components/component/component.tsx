import Link from "next/link"
import Image from "next/image"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import Carousel from "@/components/Carousel"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="https://actsrehab.org/wp-content/uploads/2021/08/gww_03-1.webp" alt="Logo" width={120} height={120} />
          <span className="text-lg font-semibold">ACTS Counseling</span>
        </Link>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Schedule Appointment
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* <Carousel /> */}
              <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to ACTS Counseling
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    We provide compassionate, personalized counseling services to help you navigate life's challenges
                    and achieve greater well-being.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Schedule an Appointment
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="Counseling"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="text-center md:text-left">
                <SofaIcon className="h-12 w-12 text-primary mx-auto md:mx-0" />
                <h3 className="mt-4 text-xl font-semibold">Individual Counseling</h3>
                <p className="mt-2 text-muted-foreground">
                  Personalized support to help you overcome personal challenges and achieve your goals.
                </p>
              </div>
              <div className="text-center md:text-left">
                <GroupIcon className="h-12 w-12 text-primary mx-auto md:mx-0" />
                <h3 className="mt-4 text-xl font-semibold">Family Counseling</h3>
                <p className="mt-2 text-muted-foreground">
                  Strengthen your family relationships and navigate life's transitions together.
                </p>
              </div>
              <div className="text-center md:text-left">
                <GroupIcon className="h-12 w-12 text-primary mx-auto md:mx-0" />
                <h3 className="mt-4 text-xl font-semibold">Couples Counseling</h3>
                <p className="mt-2 text-muted-foreground">
                  Improve communication, resolve conflicts, and deepen your emotional connection.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced, compassionate therapists is dedicated to helping you achieve your personal
                  and relational goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="h-32 w-32">
                  {/* <Image src="https://actsrehab.org/wp-content/uploads/2023/03/2-2.jpg" alt="taesonlee" width={128} height={128}/> */}
                </Avatar>
                <div className="space-y-1 text-center">
                  <h4 className="text-lg font-semibold">Taeson Lee</h4>
                  <p className="text-muted-foreground">MBA, WSCGC, CDP, DVC, EXECUTIVE DIRECTOR</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="h-32 w-32">
                  {/* <Image src="https://actsrehab.org/wp-content/uploads/2023/09/Rectangle-7.png" alt="yohan chung" width={128} height={128} /> */}
                </Avatar>
                <div className="space-y-1 text-center">
                  <h4 className="text-lg font-semibold">Yohan Chung</h4>
                  <p className="text-muted-foreground">SUDP Counselor/Branch Manager</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="h-32 w-32">
                  {/* <Image src="https://actsrehab.org/wp-content/uploads/2023/06/Soo-Kim-1-1.jpg" alt="soo kim" width={128} height={128} /> */}
                </Avatar>
                <div className="space-y-1 text-center">
                  <h4 className="text-lg font-semibold">Soo Kim</h4>
                  <p className="text-muted-foreground">MA, Operations Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied clients about their experiences with our counseling services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6 shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">John Doe</p>
                      <p className="text-muted-foreground">Client</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Serenity Counseling has been a game-changer for me. The therapists are truly compassionate and\n
                    helped me work through some difficult personal issues. I highly recommend their services."
                  </p>
                </div>
              </Card>
              <Card className="p-6 shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">Jane Smith</p>
                      <p className="text-muted-foreground">Client</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I was hesitant to try counseling, but Serenity Counseling made the process so comfortable and\n
                    welcoming. The therapists truly listen and provide invaluable guidance. I'm grateful for their\n
                    support."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl text-lead grid grid-cols-1 text-center md:text-left md:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto">
          <div className="grid gap-4 md:gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" prefetch={false}>
              Our Story
            </Link>
            <Link href="#" prefetch={false}>
              Our Approach
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-4 md:gap-1">
            <h3 className="font-semibold">Services</h3>
            <Link href="#" prefetch={false}>
              Individual Counseling
            </Link>
            <Link href="#" prefetch={false}>
              Family Counseling
            </Link>
            <Link href="#" prefetch={false}>
              Couples Counseling
            </Link>
          </div>
          <div className="grid gap-4 md:gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-4 md:gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-4 md:gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" prefetch={false}>
              Phone: (123) 456-7890
            </Link>
            <Link href="#" prefetch={false}>
              Email: info@ACTS.com
            </Link>
            <Link href="#" prefetch={false}>
              Social Media
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function NotebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </svg>
  )
}


function SofaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </svg>
  )
}
