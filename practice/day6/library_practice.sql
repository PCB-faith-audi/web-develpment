CREATE DATABASE IF NOT EXISTS library_practice;
USE library_practice;

CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARBINARY(150) NOT NULL UNIQUE,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    category_id INT NOT NULL,
    published_year YEAR,
    FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE = InnoDB;

CREATE TABLE borrowings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    borrowed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    returned_at TIMESTAMP NULL DEFAULT NULL,
    FOREIGN KEY (member_id) REFERENCES members(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
) ENGINE = InnoDB;

SHOW TABLES;

INSERT INTO members (full_name, email)
VALUES 
        ('Amina Otieno', 'amina.library@example.com'),
        ('Brian Kamau', 'brian.library@example.com');

INSERT INTO categories (name)
VALUES
    ('Technology'),
    ('Business'),
    ('Fiction');

 INSERT INTO books (title, category_id, published_year)
 VALUES
        ('Learning SQL', 1, 2024),
        ('Web Development Basics', 1, 2023),
        ('Business Fundamentals', 2, 2022),
        ('The River Between', 3, 1965);

INSERT INTO borrowings (member_id, book_id, borrowed_at)
VALUES
        (1, 1, '2026-10-12 10:00:00'),
        (1, 2, '2026-10-14 09:00:00'),
        (2, 3, '2026-10-13 14:00:00'),
        (2, 1, '2026-10-14 11:00:00');

SELECT m.full_name, b.title, br.borrowed_at
FROM borrowings AS br
JOIN members AS m
        ON br.member_id = m.id
JOIN books AS b
        ON br.book_id = b.id
WHERE m.full_name = 'Amina Otieno'
ORDER BY br.borrowed_at DESC;

SELECT DISTINCT
    b.title,
    c.name AS category
FROM borrowings AS br
JOIN books AS b
    ON br.book_id = b.id
JOIN categories AS c
    ON b.category_id = c.id
WHERE c.name = 'Technology';

SELECT
    m.full_name,
    COUNT(br.id) AS books_borrowed
FROM members AS m
LEFT JOIN borrowings AS br
    ON m.id = br.member_id
GROUP BY m.id, m.full_name
ORDER BY m.full_name;

CREATE INDEX idx_borrowings_member_date
ON borrowings (member_id, borrowed_at);

SHOW INDEX FROM borrowings;