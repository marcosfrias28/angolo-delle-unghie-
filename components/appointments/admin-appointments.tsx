"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  addAppointmentSlot,
  deleteAppointment,
  bookAppointment,
  getAvailableAppointments,
  getAppointments,
} from "@/lib/actions/appointment";
import { User } from "@/lib/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon,
  BarChartIcon,
  CalendarDaysIcon,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getReviews from "@/lib/actions/reviews";
import { signOut } from "@/app/(login)/actions";

interface Appointment {
  id: number;
  date: string;
  time: string;
  status?: string;
  userId?: number;
}

interface Review {
  id: number;
  content: string;
  rating: string;
  date: string;
}

export default function Dashboard({ user }: { user: User }) {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [newSlot, setNewSlot] = useState({ date: "", time: "" });
  const [isPending, startTransition] = useTransition();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const appointmentsData = await getAvailableAppointments();
      setAppointments(appointmentsData);
      if (user.role === "customer") {
        const reviewsData = await getReviews(user.id);
        setReviews(reviewsData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addAppointmentSlot(newSlot.date, newSlot.time);
      setNewSlot({ date: "", time: "" });
      fetchData();
    } catch (error) {
      console.error("Error adding new slot:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAppointment(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleBooking = async (slotId: number) => {
    try {
      await bookAppointment(slotId, user.id);
      fetchData();
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const handleStatusChange = async (
    id: number,
    status: "approved" | "rejected"
  ) => {
    // Implement status change logic here
    console.log(`Changing status of appointment ${id} to ${status}`);
    // After changing status, refetch data
    fetchData();
  };

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Dashboard
            </h1>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push("/dashboard")}
            >
              <BarChartIcon className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push("/dashboard/appointments")}
            >
              <CalendarDaysIcon className="mr-2 h-4 w-4" />
              Appuntamenti
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push("/dashboard/reviews")}
            >
              <StarIcon className="mr-2 h-4 w-4" />
              Recensioni
            </Button>
          </nav>
          <div className="flex items-center px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <Avatar>
              <AvatarImage
                src={user?.profile_image_url || "/placeholder-avatar.png"}
                alt={user?.name || ""}
              />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </div>
            <div className="ml-3">
              <Button variant="link" onClick={() => handleLogout()}>
                <LogOut />
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:pl-64">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Benvenuto, {user.name}!
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Ecco un riepilogo della tua attività recente.
              </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Appuntamenti Totali
                  </CardTitle>
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {appointments.length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Appuntamenti in Attesa
                  </CardTitle>
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {appointments.filter((a) => a.status === "pending").length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Recensioni
                  </CardTitle>
                  <StarIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{reviews.length}</div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs for different sections */}
            <Tabs
              defaultValue={user.role === "owner" ? "manage" : "appointments"}
              className="mt-8"
            >
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
                {user.role === "owner" && (
                  <TabsTrigger value="manage">
                    Gestione Appuntamenti
                  </TabsTrigger>
                )}
                <TabsTrigger value="appointments">
                  I Miei Appuntamenti
                </TabsTrigger>
                {user.role === "customer" && (
                  <TabsTrigger value="reviews">Le Mie Recensioni</TabsTrigger>
                )}
              </TabsList>

              {user.role === "owner" && (
                <TabsContent value="manage">
                  <Card>
                    <CardHeader>
                      <CardTitle>Aggiungi Nuovo Slot</CardTitle>
                      <CardDescription>
                        Crea nuovi slot per gli appuntamenti.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleAddSlot} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="date"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Data
                            </label>
                            <Input
                              id="date"
                              type="date"
                              value={newSlot.date}
                              onChange={(e) =>
                                setNewSlot({ ...newSlot, date: e.target.value })
                              }
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="time"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Ora
                            </label>
                            <Input
                              id="time"
                              type="time"
                              value={newSlot.time}
                              onChange={(e) =>
                                setNewSlot({ ...newSlot, time: e.target.value })
                              }
                              required
                            />
                          </div>
                        </div>
                        <Button type="submit">Aggiungi Slot</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Gestione Appuntamenti</CardTitle>
                      <CardDescription>
                        Visualizza e gestisci tutti gli appuntamenti.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Data</TableHead>
                              <TableHead>Ora</TableHead>
                              <TableHead>Stato</TableHead>
                              <TableHead>Azioni</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {appointments.map((appointment) => (
                              <TableRow key={appointment.id}>
                                <TableCell>
                                  {new Date(
                                    appointment.date
                                  ).toLocaleDateString()}
                                </TableCell>
                                <TableCell>{appointment.time}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      appointment.status === "approved"
                                        ? "outline"
                                        : appointment.status === "rejected"
                                        ? "destructive"
                                        : "secondary"
                                    }
                                  >
                                    {appointment.status === "approved"
                                      ? "Approvato"
                                      : appointment.status === "rejected"
                                      ? "Rifiutato"
                                      : "In attesa"}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  {appointment.status === "pending" && (
                                    <>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="mr-2"
                                        onClick={() =>
                                          handleStatusChange(
                                            appointment.id,
                                            "approved"
                                          )
                                        }
                                      >
                                        <CheckCircleIcon className="w-4 h-4 mr-1" />{" "}
                                        Approva
                                      </Button>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                          handleStatusChange(
                                            appointment.id,
                                            "rejected"
                                          )
                                        }
                                      >
                                        <XCircleIcon className="w-4 h-4 mr-1" />{" "}
                                        Rifiuta
                                      </Button>
                                    </>
                                  )}
                                  {appointment.status === "approved" && (
                                    <Button
                                      variant="destructive"
                                      size="sm"
                                      onClick={() =>
                                        handleDelete(appointment.id)
                                      }
                                    >
                                      Elimina
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              <TabsContent value="appointments">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {user.role === "customer"
                        ? "Prenota un Appuntamento"
                        : "Appuntamenti"}
                    </CardTitle>
                    <CardDescription>
                      Visualizza e gestisci i tuoi appuntamenti.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Slot disponibili
                        </h3>
                        <ScrollArea className="h-[300px]">
                          {appointments
                            .filter(
                              (appointment) =>
                                new Date(appointment.date).toDateString() ===
                                selectedDate?.toDateString()
                            )
                            .map((appointment) => (
                              <div
                                key={appointment.id}
                                className="flex items-center justify-between py-2 border-b last:border-b-0"
                              >
                                <div className="flex items-center">
                                  <ClockIcon className="w-4 h-4 mr-2 text-gray-500" />
                                  <span>{appointment.time}</span>
                                </div>
                                {user.role === "customer" &&
                                  appointment.status === "pending" && (
                                    <Button
                                      size="sm"
                                      onClick={() =>
                                        handleBooking(appointment.id)
                                      }
                                    >
                                      Prenota
                                    </Button>
                                  )}
                                {user.role === "customer" &&
                                  appointment.status !== "pending" && (
                                    <Badge
                                      variant={
                                        appointment.status === "approved"
                                          ? "outline"
                                          : "destructive"
                                      }
                                    >
                                      {appointment.status === "approved"
                                        ? "Approvato"
                                        : "Rifiutato"}
                                    </Badge>
                                  )}
                              </div>
                            ))}
                        </ScrollArea>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {user.role === "customer" && (
                <TabsContent value="reviews">
                  <Card>
                    <CardHeader>
                      <CardTitle>Le Mie Recensioni</CardTitle>
                      <CardDescription>
                        Visualizza le tue recensioni passate.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        {reviews.map((review) => (
                          <div
                            key={review.id}
                            className="mb-4 p-4 border rounded-lg"
                          >
                            <div className="flex items-center mb-2">
                              <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                              <span className="font-semibold">
                                {review.rating}/5
                              </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                              {review.content}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                        ))}
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
