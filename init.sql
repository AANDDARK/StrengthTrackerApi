CREATE TYPE datelogtype AS (
    date DATE,
    count INTEGER
);


CREATE TABLE exercises (
    user_id INTEGER NOT NULL,
    id INTEGER NOT NULL,
    create_time DATE,
    name VARCHAR(255),
    describe TEXT,
    count INTEGER,
    datelog datelogtype[] DEFAULT '{}'::datelogtype[],
    PRIMARY KEY (user_id, id)
);
