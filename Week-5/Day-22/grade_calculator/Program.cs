using GradeCalculator;
public class Program
{
    public static void Main(string[] args)
    {
        Student student = new Student { Name = "Eshan Sud" };
        student.Courses.Add(new Course { Name = "JS", Grade = 3.5, CreditHours = 3 });
        student.Courses.Add(new Course { Name = "Python", Grade = 4.0, CreditHours = 4 });
        student.Courses.Add(new Course { Name = "HTML", Grade = 3.0, CreditHours = 2 });
        double gpa = student.CalculateGPA();
        Console.WriteLine($"Student: {student.Name}");
        Console.WriteLine($"GPA: {gpa:F2}");
    }
}