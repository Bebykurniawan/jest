const { averageExams, isStudentPassExam } = require('../gradeCalculation');
 
describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });
 
    test('it should handle non-number ', () => {
        const listValueOfExams = [80, 'a', '100', 80];
        expect(() => averageExams(listValueOfExams)).toThrow();
    })
    /**
     * Integration testing
     */
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Rusdi')).toEqual(true);
    })
 
 
    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Rusdi')).toEqual(false);
    })
})