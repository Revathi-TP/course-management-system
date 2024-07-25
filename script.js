document.addEventListener('DOMContentLoaded', function () {
    const courseForm = document.getElementById('course-form');
    const studentForm = document.getElementById('student-form');
    const courseList = document.getElementById('course-list');
    const studentList = document.getElementById('student-list');

    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    let students = JSON.parse(localStorage.getItem('students')) || [];

    function renderLists() {
        courseList.innerHTML = '';
        studentList.innerHTML = '';

        courses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = `${course.name}: ${course.description}`;
            courseList.appendChild(li);
        });

        students.forEach(student => {
            const li = document.createElement('li');
            li.textContent = `${student.name} (Course: ${student.course})`;
            studentList.appendChild(li);
        });
    }

    courseForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const courseName = document.getElementById('course-name').value;
        const courseDescription = document.getElementById('course-description').value;

        const course = { name: courseName, description: courseDescription };
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));

        renderLists();
        courseForm.reset();
    });

    studentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const studentName = document.getElementById('student-name').value;
        const studentCourse = document.getElementById('student-course').value;

        const student = { name: studentName, course: studentCourse };
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));

        renderLists();
        studentForm.reset();
    });

    renderLists();
});
