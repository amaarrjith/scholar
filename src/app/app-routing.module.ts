import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { CoursesComponent } from './guest/courses/courses.component';
import { EventsComponent } from './guest/events/events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './guest/login/login.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { StaffComponent } from './admin/staff/staff.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { StudentviewComponent } from './admin/studentview/studentview.component';
import { StaffviewComponent } from './admin/staffview/staffview.component';
import { AdminviewComponent } from './admin/adminview/adminview.component';
import { CourseComponent } from './admin/course/course.component';
import { StaffeditComponent } from './admin/staffedit/staffedit.component';
import { StudentmasterComponent } from './student/studentmaster/studentmaster.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { MessageComponent } from './admin/message/message.component';
import { SubjectviewComponent } from './admin/subjectview/subjectview.component';
import { StaffmasterComponent } from './staff/staffmaster/staffmaster.component';
import { StaffhomeComponent } from './staff/staffhome/staffhome.component';
import { StudentsComponent } from './staff/students/students.component';
import { AttendanceComponent } from './staff/attendance/attendance.component';
import { StudentattendanceComponent } from './student/studentattendance/studentattendance.component';
import { StudenteditComponent } from './student/studentedit/studentedit.component';
import { PasswordComponent } from './guest/password/password.component';
import { EditpageComponent } from './student/editpage/editpage.component';
import { ChangepasswordComponent } from './student/changepassword/changepassword.component';
import { MessagestaffComponent } from './student/messagestaff/messagestaff.component';
import { ChatboxComponent } from './staff/chatbox/chatbox.component';
import { TeamComponent } from './guest/team/team.component';
import { AddeventsComponent } from './admin/addevents/addevents.component';
import { EventviewComponent } from './admin/eventview/eventview.component';
import { EventeditComponent } from './admin/eventedit/eventedit.component';
import { EventregisterComponent } from './guest/eventregister/eventregister.component';
import { GuestcontactComponent } from './guest/guestcontact/guestcontact.component';
import { EventsStudentComponent } from './student/events-student/events-student.component';
import { EventsRegisterComponent } from './student/events-register/events-register.component';
import { CourseviewComponent } from './student/courseview/courseview.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { GuestchangepasswordComponent } from './guestchangepassword/guestchangepassword.component';
import { SubjecteditComponent } from './admin/subjectedit/subjectedit.component';
import { FeepaymentComponent } from './guest/feepayment/feepayment.component';
import { ChoosefeeComponent } from './guest/choosefee/choosefee.component';
import { FeesviewComponent } from './student/feesview/feesview.component';


const routes: Routes = [

  {path:'', redirectTo:'guestmaster/guesthome', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'password',component:PasswordComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'otpverification',component:OtpverificationComponent},
  {path:'guestchangepassword',component:GuestchangepasswordComponent},
  {path:'chat',component:ChatboxComponent},
  {path:'feepayment',component:FeepaymentComponent},
  {path:'choosefee',component:ChoosefeeComponent},
  
  
  {path:'adminmaster',component:AdminmasterComponent,
    children:[
      {path:'adminhome',component:AdminhomeComponent},
      {path:'staffregister',component:StaffComponent},
      {path:'adminregister',component:AdminregisterComponent},
      {path:'studentview',component:StudentviewComponent},
      {path:'staffview',component:StaffviewComponent},
      {path:'adminview',component:AdminviewComponent},
      {path:'course',component:CourseComponent},
      {path:'staffedit',component:StaffeditComponent},
      {path:'staffedit/:id',component:StaffeditComponent},
      {path:'message',component:MessageComponent},
      {path:'subjectview',component:SubjectviewComponent},
      {path:'addevents',component:AddeventsComponent},
      {path:'eventview',component:EventviewComponent},
      {path:'eventedit/:id',component:EventeditComponent},
      {path:'subjectedit/:id',component:SubjecteditComponent}

    ]
  },

  {path:'guestmaster',component:GuestmasterComponent,
  children:[
    {path:'guesthome',component:GuesthomeComponent},
    {path:'courses',component:CoursesComponent},
    {path:'events',component:EventsComponent},
    {path:'registration',component:RegisterComponent},
    {path:'registration/:subjectid,/:courseid',component:RegisterComponent},
    {path:'team',component:TeamComponent},
    {path:'eventregister/:id',component:EventregisterComponent},
    {path:'contactus/:id',component:GuestcontactComponent}
    
  ]
  },
  
  {path:'studentmaster',component:StudentmasterComponent,
  children:[
    {path:'studenthome',component:StudenthomeComponent},
    {path:'attendance',component:StudentattendanceComponent},
    {path:'studentedit',component:StudenteditComponent},
    {path:'editpage',component:EditpageComponent},
    {path:'messagestaff',component:MessagestaffComponent},
    {path:'mycourse',component:CourseComponent},
    {path:'students_events',component:EventsStudentComponent},
    {path:'events_register/:id',component:EventsRegisterComponent},
    {path:'courseview',component:CourseviewComponent},
    {path:'feesview',component:FeesviewComponent}
    
    
    

  ]},
  

  {path:'staffmaster',component:StaffmasterComponent,
    children:[
      {path:'staffhome',component:StaffhomeComponent},
      {path:'students',component:StudentsComponent},
      {path:'attendance',component:AttendanceComponent},
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
