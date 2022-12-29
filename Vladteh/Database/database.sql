create TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);


