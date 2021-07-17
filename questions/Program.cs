using System;

namespace questions
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("I want to learn programming because it...");
            Console.WriteLine("1. is a fun thing to learn.");
            Console.WriteLine("2. is useful for me.");
            string inp_choice = Console.ReadLine("Input 1 or 2: ");
            int choice = Int32.Parse(inp_choice);

            if (choice == 1) 
            {
                Console.WriteLine("Have a particular area of interest in mind?");
                inp_choice = Console.ReadLine("Y or N: ");
                if (inp_choice == "Y" || inp_choice == "y") {
                    interested_area();

                }
            }

            else if (choice == 2) 
            {

            }

            else 
            {
                Console.WriteLine("Invalid input.");
            }

        }

        public static int interest_area() 
        {

        }
    

    }
}
