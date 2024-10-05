document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const assignment = document.getElementById('assignment').value;
    const feedback = document.getElementById('feedback');

    // Giả lập việc chấm điểm
    const score = Math.floor(Math.random() * 101); // Điểm ngẫu nhiên từ 0 đến 100

    feedback.innerHTML = `<p>Cảm ơn ${studentName}, bài nộp của bạn đã được nhận. Điểm: ${score}</p>`;

    // Xóa các trường input sau khi nộp
    this.reset();
});

