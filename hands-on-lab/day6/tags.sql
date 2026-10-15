USE quicknotes_db;

SHOW TABLES;

DESCRIBE users;

-- 1. Create tags
CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
) ENGINE = InnoDB;

-- 2. Create table connecting notes and tags
CREATE TABLE note_tags (
    note_id INT NOT NULL,
    tag_id INT NOT NULL,

    PRIMARY KEY (note_id, tag_id),

    FOREIGN KEY (note_id)
            REFERENCES notes(id)
            ON DELETE CASCADE,
    FOREIGN KEY (tag_id)
            REFERENCES tags(id)
            ON DELETE CASCADE
) ENGINE = InnoDB;

-- Verify the tables
SHOW TABLES;

-- All notes tagged "urgent"
SELECT notes.note_text
FROM notes
JOIN note_tags
    ON note_tags.note_id = notes.id
JOIN tags
    ON tags.id = note_tags.tag_id
WHERE tags.name = 'urgent';

SELECT 
    users.name,
    COUNT(notes.id) AS note_count
FROM users
LEFT JOIN notes
    ON notes.user_id = users.id
GROUP BY users.id, users.name;

DESCRIBE notes;
DESCRIBE note_tags;
DESCRIBE tags;

-- Number of notes per user
SELECT users.name, COUNT(notes.id) AS note_count
FROM users
LEFT JOIN notes ON notes.user_id = users.id
GROUP BY users.id;