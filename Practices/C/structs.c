#include<stdio.h>
#include<stdlib.h>
#include<string.h>

struct Student
{
    char name[50];
    char degree[100];
    int age;
    double gpa;
};


int main()  {

    struct Student student1;
    /*student1.age = 22;
    student1.gpa = 3.2;
    strcpy(student1.name, "Julian");
    strcpy(student1.major, "Computer Science");
    */

    printf("Welcome to the University of Alicante student database!!\n");
    printf("--------------------------------------------------------\n");

    printf("Insert your name: ");
    scanf(" %c", &student1.name);
    printf("College degree: ");
    scanf(" %c", &student1.degree);
    printf("Insert your curent age: ");
    scanf("%d", &student1.age);
    printf("Insert your GPA: ");
    scanf("%lf", &student1.gpa);

    printf("Name: %c", student1.name);
    printf("Degree: %c", student1.degree);
    printf("Age: %f", student1.age);
    printf("GPA: %.2f", student1.gpa);



    return 0;
}