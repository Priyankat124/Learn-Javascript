#include<iostream>
using namespace std;
class info {
    private:
    int age;
    string name;
    string college;
    string course;
    public:
    info(int age,string name,string college,string course){
        this->age = age;
        this->name = name;
        this->college = college;
        this->course = course;
    }
    void printInfo(){
        cout<<"age is : "<<age<<endl;;
        cout<<"name is :"<<name<<endl;;
        cout<<"college is : "<<college<<endl;;
        cout<<"course is: "<<course<<endl;
    }

};

int main(){
    cout<<"hello wolrd"<<endl;
    //creating the object of information 
   info Student(12,"shriram","svvv","btech");
   //accessing the method
   Student.printInfo();
    return 0;
}