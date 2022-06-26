import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {
 
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id:1,
                name:'Angular',
                imageUrl:'/assets/images/forms.png',
                price: 99.99,
                code: 'XPS : 843',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2 , 2022'
            },
            {
                id:2,
                name:'HTTP',
                imageUrl:'/assets/images/http.png',
                price: 45.99,
                code: 'XPS : 123',
                duration: 45,
                rating: 4.4,
                releaseDate: 'November, 2 , 2022'
            }  
        ];
    }
}