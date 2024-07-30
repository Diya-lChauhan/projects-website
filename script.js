document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, title: 'Course 1', description: 'Description for course 1', content: 'Content for course 1' },
        { id: 2, title: 'Course 2', description: 'Description for course 2', content: 'Content for course 2' },
        { id: 3, title: 'Course 3', description: 'Description for course 3', content: 'Content for course 3' }
    ];

    const courseList = document.getElementById('course-list');

    if (courseList) {
        courses.forEach(course => {
            const li = document.createElement('li');
            li.innerHTML = `<h2>${course.title}</h2><p>${course.description}</p><a href="course.html?id=${course.id}">View Details</a>`;
            courseList.appendChild(li);
        });
    }

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');

    if (courseId) {
        const course = courses.find(c => c.id == courseId);

        if (course) {
            document.getElementById('course-title').textContent = course.title;
            document.getElementById('course-description').textContent = course.description;
            document.getElementById('course-content').textContent = course.content;
        }
    }
});