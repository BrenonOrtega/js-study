DROP TABLE IF EXISTS tbl_heroes;

CREATE TABLE tbl_heroes (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY ,
    name VARCHAR(70) NOT NULL,
    power VARCHAR(70) NOT NULL
);

INSERT INTO tbl_heroes (name, power)
    VALUES  ('flash', 'speed'),
            ('aquaman', 'aquatic'),
            ('batima', 'cash'),
            ('beast boy', 'golira');

INSERT INTO tbl_heroes (name, power)
     VALUES ('heroi zuado', 'zuado');

SELECT * FROM tbl_heroes;

SELECT * FROM tbl_heroes WHERE name='flash';

SELECT * FROM tbl_heroes WHERE id=1;

UPDATE tbl_heroes SET name='all might', power='one for all' WHERE id=2;

DELETE FROM tbl_heroes WHERE id=5;