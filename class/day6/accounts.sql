USE quicknotes_db;
SHOW INDEX FROM notes;

-- a transaction
CREATE TABLE IF NOT EXISTS accounts (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL
) ENGINE = InnoDB;

-- add accounts
INSERT INTO accounts (id, name, balance)
VALUES (1, 'Amina', 2000.00),
       (2, 'Brian', 1000.00)
ON DUPLICATE KEY UPDATE
        name = VALUES(name);

 SELECT * FROM accounts;

 START TRANSACTION;

-- amina remove 500
 UPDATE accounts
 SET balance = balance - 500
 WHERE id = 1;

-- to brian add 500
 UPDATE accounts
 SET balance = balance + 500
 WHERE id = 2;

 SELECT * FROM accounts;

 COMMIT; -- save changes

 ROLLBACK; -- Undo changes