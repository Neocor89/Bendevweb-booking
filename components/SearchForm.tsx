"use client" //: (1) Use the Nextjs client

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod"; //: (2) Add Zod lib

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { BabyIcon, BedDoubleIcon, CalendarCheckIcon, CalendarClockIcon, Home, PersonStanding } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger,
} from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

//: (3) Define the schema
export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
  .string()
  .min(1, {
    message: "Please select at least one adult",
  }).max(12, {
    message: "Max 12 adults Occupency" }),
    children: z.string().min(0).max(12, {
      message: "Max 12 adults Occupency",
    }),
    rooms: z.string().min(1, {
      message: "Please select at least one room",
    }),
});

function SearchForm() {

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const checkin_monthDay = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() +1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthDay = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() +1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const checkin = `${checkin_year}-${checkin_month}-${checkin_monthDay}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthDay}`;

    const url = new URL("https://www.booking.com/searchresults.html");
    url.searchParams.set("ss", values.location);
    url.searchParams.set("group_adults", values.adults);
    url.searchParams.set("group_children", values.children);
    url.searchParams.set("no_rooms", values.rooms);
    url.searchParams.set("checkin", checkin);
    url.searchParams.set("checkout", checkout);

    router.push(`/search?url=${url.href}`);
    
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white flex">
                  Search Location :
                  <BedDoubleIcon className="ml-2 w-4 h-4 text-white" />
                </FormLabel>

                <FormMessage className="font-base"/>

                <FormControl
                  className=" bg-[#f0f6ff] md:bg-[#ffb700] h-12"
                >
                  <Input
                  className="placeholder:text-gray-600"
                    placeholder="Paris, FR"
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid w-full lg:max-w-sm flex-1 items-center gap-2.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="flex items-center text-white">
                  Dates :
                  <CalendarCheckIcon className="ml-2 w-4 h-4 text-white" />
                </FormLabel>
                <FormMessage className="font-base" />

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant={"outline"}
                        className={cn(
                          "w-full lg:w-80 justify-start text-left font-normal bg-[#f0f6ff] md:bg-[#ffb700] hover:bg-[#f0f6ff] hover:md:bg-[#ffb700] h-12",
                          !field.value.from && "text-muted-foreground"

                        )}
                      >
                        <CalendarClockIcon className="mr-3 w-5 h-4 opacity-90 text-gray-600" />
                        {field.value?.from ?(
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, "LLL dd, y")} - {" "}
                              {format(field.value?.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value?.from, "LLL dd, y")
                          )
                        ) : (
                          <span className="text-gray-600">Select your dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="start">

                    {/* shadcdn component */}
                    <Calendar
                      initialFocus
                      mode="range"
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date: any) => 
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
            
          />
        </div>

        <div className="flex w-full items-center space-x-2">
          <div className="grid items-center flex-1">
          <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="flex flex-col">

                  <FormLabel className="text-white flex items-center">
                    Adults :
                    <PersonStanding className="w-5 h-4 text-white" />
                  </FormLabel>
                    <FormMessage className="font-base"/>

                    <FormControl className="bg-[#f0f6ff] md:bg-[#ffb700] hover:bg-[#f0f6ff] hover:md:bg-[#ffb700] h-12">
                      <Input
                        type="number"
                        placeholder="Adults"
                        {...field}
                      />
                    </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid items-center flex-1">
          <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem className="flex flex-col">

                  <FormLabel className="text-white flex items-center">
                    Children :
                    <BabyIcon className="ml-1 w-5 h-4 text-white" />
                  </FormLabel>
                    <FormMessage className="font-base"/>

                    <FormControl className="bg-[#f0f6ff] md:bg-[#ffb700] hover:bg-[#f0f6ff] hover:md:bg-[#ffb700] h-12">
                      <Input 
                        type="number"
                        placeholder="Children"
                        {...field}
                      />
                    </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid items-center flex-1">
          <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem className="flex flex-col">

                  <FormLabel className="text-white flex items-center">
                    Rooms :
                    <Home className="ml-1 w-5 h-4 text-white" />
                  </FormLabel>
                    <FormMessage className="font-base"/>

                    <FormControl className="bg-[#f0f6ff] md:bg-[#ffb700] hover:bg-[#f0f6ff] hover:md:bg-[#ffb700] h-12">
                      <Input 
                        type="number"
                        placeholder="Rooms"
                        {...field}
                      />
                    </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="mt-auto">
            <Button 
              type="submit" 
              className="lg:bg-[#a3d7fc] bg-[#ffb700] h-12 w-32 font-rubik font-semibold text-base text-black hover:bg-[#a3d7fc]"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default SearchForm