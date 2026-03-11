class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter your email ID: ");
        string email = Console.ReadLine();
        if (email.Contains("@"))
        {
            string username = email.Substring(0, email.IndexOf("@"));
            Console.WriteLine($"Username: {username}");
        }
        else
        {
            Console.WriteLine("Invalid email format! Email must contain '@'");
        }
    }
}