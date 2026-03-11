using System;
using IPv4Validator;

class Program
{
    public static void Main()
    {
        Console.WriteLine("--------IP VALIDATOR -----------");
        Console.Write("Enter the IPv4 Address: ");
        string input = Console.ReadLine();
        IPv4Address myIp = new IPv4Address(input);
        if(myIp.IsValid)
        {
            Console.WriteLine($"Status: Valid");
            Console.WriteLine($"Classification: {myIp.GetClassification()}");
        }
        else
        {
            Console.WriteLine("Status: Invalid IP Format");
        }
    }
}