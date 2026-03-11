namespace GradeCalculator
{
    public class Course
    {
        public string Name { get; set; }
        public double Grade { get; set; }
        public int CreditHours { get; set; }
    }
    public class Student
    {
        public string Name { get; set; }
        public List<Course> Courses { get; set; } = new List<Course>();
        public double CalculateGPA()
        {
            double totalPoints = 0;
            int totalCreditHours = 0;
            foreach (var course in Courses)
            {
                totalPoints += course.Grade * course.CreditHours;
                totalCreditHours += course.CreditHours;
            }
            return totalPoints / totalCreditHours;
        }
    }
}