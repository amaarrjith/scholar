import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { StaffviewComponent } from './admin/staffview/staffview.component';
import { AdminviewComponent } from './admin/adminview/adminview.component';
import { StudentviewComponent } from './admin/studentview/studentview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { CommonModule } from '@angular/common';
import { EventsRegisterComponent } from './student/events-register/events-register.component';
import { CourseviewComponent } from './student/courseview/courseview.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { GuestchangepasswordComponent } from './guestchangepassword/guestchangepassword.component';
import { SubjecteditComponent } from './admin/subjectedit/subjectedit.component';
import { FeepaymentComponent } from './guest/feepayment/feepayment.component';
import { ChoosefeeComponent } from './guest/choosefee/choosefee.component';
import { FeesviewComponent } from './student/feesview/feesview.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestmasterComponent,
    GuesthomeComponent,
    CoursesComponent,
    EventsComponent,
    RegisterComponent,
    LoginComponent,
    AdminmasterComponent,
    AdminhomeComponent,
    StaffComponent,
    AdminregisterComponent,
    StaffviewComponent,
    AdminviewComponent,
    StudentviewComponent,
    CourseComponent,
    StaffeditComponent,
    StudentmasterComponent,
    StudenthomeComponent,
    MessageComponent,
    SubjectviewComponent,
    StaffmasterComponent,
    StaffhomeComponent,
    StudentsComponent,
    AttendanceComponent,
    StudentattendanceComponent,
    StudenteditComponent,
    PasswordComponent,
    EditpageComponent,
    ChangepasswordComponent,
    MessagestaffComponent,
    ChatboxComponent,
    TeamComponent,
    AddeventsComponent,
    EventviewComponent,
    EventeditComponent,
    EventregisterComponent,
    GuestcontactComponent,
    EventsStudentComponent,
    EventsRegisterComponent,
    CourseviewComponent,
    OtpverificationComponent,
    GuestchangepasswordComponent,
    SubjecteditComponent,
    FeepaymentComponent,
    ChoosefeeComponent,
    FeesviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
