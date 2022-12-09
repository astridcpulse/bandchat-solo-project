-- not up to date. Copy from bit io or the dump.sql in downloads
--database name: bandchat_db

CREATE TABLE "user" (
	"id" serial PRIMARY KEY,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL
);


CREATE TABLE "project_data" (
	"id" serial PRIMARY KEY,
	"project_name" varchar(255) NOT NULL
);



CREATE TABLE "part_data" (
	"id" serial PRIMARY KEY,
	"part_name" varchar(255) NOT NULL,
	"notes" TEXT NOT NULL,
	"key" TEXT NOT NULL,
	"sound_url" TEXT NOT NULL,
	"project_id" int REFERENCES "project_data" NOT NULL
);



CREATE TABLE "user_part_data" (
	"id" serial PRIMARY KEY,
	"user_id" int REFERENCES "user" NOT NULL,
	"part_id" int REFERENCES "part_data" NOT NULL
);



CREATE TABLE "user_project_data" (
	"id" serial PRIMARY KEY,
	"user_id" int REFERENCES "user" NOT NULL,
	"project_id" int REFERENCES "project_data" NOT NULL
);

