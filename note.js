class NoteManager {
  constructor() {
    this.notes = [];
  }

  // Thêm một bài viết mới
  addNote(title, content) {
    const newNote = { title, content };
    this.notes.push(newNote);
    console.log('Bài viết đã được thêm vào danh sách.');
  }

  // Hiển thị danh sách các bài viết
  displayNotes() {
    console.log('Danh sách các bài viết:');
    this.notes.forEach((note, index) => {
      console.log(`#${index + 1}:`);
      console.log(`Title: ${note.title}`);
      console.log(`Content: ${note.content}`);
      console.log('-------------------');
    });
  }
}

// Tạo đối tượng quản lý ghi chú
const noteManager = new NoteManager();

// Thêm một số bài viết
noteManager.addNote('Bài viết 1', 'Nội dung bài viết 1');
noteManager.addNote('Bài viết 2', 'Nội dung bài viết 2');
noteManager.addNote('Bài viết 3', 'Nội dung bài viết 3');

// Hiển thị danh sách bài viết
noteManager.displayNotes();