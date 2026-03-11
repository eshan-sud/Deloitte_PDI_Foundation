public delegate void MyDelegate(string message);

class Program
{
    static void Main(string[] args)
    {
        MyDelegate del = new MyDelegate(DisplayMessage);
        del("Hello, World!");        
    }
    
    static void DisplayMessage(string message)
    {
        Console.WriteLine(message);
    }
}
