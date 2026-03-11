public class BankAccount
{
    private decimal Balance;

    public decimal GetBalance()
    {
        return Balance;
    }
    public void SetBalance(decimal amount)
    {
        if (amount < 0)
        {
            Console.WriteLine("Invalid balance amount.");
            return;
        }
        Balance = amount;
    }

    public virtual void Deposit(decimal amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Invalid deposit amount.");
            return;
        }
        Balance += amount;
        Console.WriteLine($"Deposited ₹ {amount}. New balance: ₹ {Balance}");
    }

    public void Withdraw(decimal amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Invalid withdrawal amount.");
            return;
        }
        
        if (amount > Balance)
        {
            Console.WriteLine("Insufficient funds.");
            return;
        }
        
        Balance -= amount;
        Console.WriteLine($"Withdrew ₹ {amount}. New balance: ₹ {Balance}");
    }
}

public class SavingsAccount : BankAccount
{
    private decimal interestRate;

    public SavingsAccount(decimal rate)
    {
        interestRate = rate;
    }

    public void AddInterest()
    {
        decimal interest = GetBalance() * interestRate;
        SetBalance(GetBalance() + interest);
        Console.WriteLine($"Interest of ₹ {interest} added. New balance: ₹ {GetBalance()}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        SavingsAccount account = new SavingsAccount(0.0005m);
        account.SetBalance(1000);
        account.Deposit(500);
        account.Deposit(0.25m);
        account.AddInterest();
        account.Deposit(100);
        account.Deposit(100);
        account.Deposit(0.03m);
        account.AddInterest();
    }
}
