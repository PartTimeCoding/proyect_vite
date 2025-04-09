// src/paginas/CourseSelection.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseSelection.module.css'; // Importación de CSS Module

interface Course {
    id: number;
    name: string;
    credits: number;
    days: string;
    time: string;
}

const MOCK_COURSES: Course[] = [
    { id: 1, name: 'CS101: Introducción a la Programación', credits: 3, days: 'Lun/Mié', time: '10:00-11:30 AM' },
    { id: 2, name: 'MATH201: Cálculo I', credits: 4, days: 'Mar/Jue', time: '1:00-2:30 PM' },
    { id: 3, name: 'ENG101: Inglés Técnico', credits: 2, days: 'Mié/Vie', time: '3:00-4:30 PM' }
];

const CourseSelection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
    const [courses] = useState<Course[]>(MOCK_COURSES);

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddCourse = (course: Course) => {
        if (!selectedCourses.some(c => c.id === course.id)) {
            setSelectedCourses(prev => [...prev, course]);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Página 3: Selección de Cursos</h2>

            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Buscar cursos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>Buscar</button>
            </div>

            <div className={styles.coursesList}>
                <h3 className={styles.subtitle}>Cursos Disponibles</h3>
                {filteredCourses.map(course => (
                    <div key={course.id} className={styles.courseCard}>
                        <div className={styles.courseInfo}>
                            <p className={styles.courseName}><strong>{course.name}</strong></p>
                            <p className={styles.courseDetails}>
                                Créditos: {course.credits} | {course.days} {course.time}
                            </p>
                        </div>
                        <button
                            className={styles.addButton}
                            onClick={() => handleAddCourse(course)}
                        >
                            Agregar
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.buttons}>
                <Link to="/dashboard">
                    <button className={styles.backButton}>Atrás</button>
                </Link>
                <button
                    className={styles.completeButton}
                    onClick={() => console.log('Cursos seleccionados:', selectedCourses)}
                >
                    Completar
                </button>
            </div>
        </div>
    );
};

export default CourseSelection;