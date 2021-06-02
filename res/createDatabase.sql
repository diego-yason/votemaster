CREATE TABLE `servers` (
  `id` int64 PRIMARY KEY,
  `name` text NOT NULL,
  `start_polls` bool DEFAULT true,
  `end_polls` bool DEFAULT false,
  `election` bool DEFAULT false,
  `delete_polls` bool DEFAULT false
);

CREATE TABLE `authorized` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int64 NOT NULL,
  `serverId` int64 NOT NULL,
  `start_polls` bool DEFAULT false,
  `end_polls` bool DEFAULT false,
  `election` bool DEFAULT false,
  `delete_polls` bool DEFAULT false
);

CREATE TABLE `votes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int64 NOT NULL,
  `option` int NOT NULL,
  `poll` int NOT NULL
);

CREATE TABLE `polls` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `server` int64 NOT NULL,
  `owner` int64 NOT NULL,
  `timeLimit` datetime NOT NULL,
  `type` int NOT NULL,
  `voteLimit` int DEFAULT 1,
  `active` bool DEFAULT true
);

CREATE TABLE `options` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` int NOT NULL,
  `pollId` int NOT NULL,
  `optionText` text NOT NULL
);

CREATE TABLE `type` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` text NOT NULL
);

CREATE TABLE `permissions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `snowflake` int64 NOT NULL,
  `poll` int NOT NULL,
  `user` bool DEFAULT false COMMENT 'true means user, false means role'
);

CREATE TABLE `multioptions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `vote_id` int NOT NULL,
  `option` int NOT NULL
);

ALTER TABLE `multioptions` ADD FOREIGN KEY (`vote_id`) REFERENCES `votes` (`id`);

ALTER TABLE `options` ADD FOREIGN KEY (`id`) REFERENCES `multioptions` (`option`);

ALTER TABLE `polls` ADD FOREIGN KEY (`server`) REFERENCES `servers` (`id`);

ALTER TABLE `authorized` ADD FOREIGN KEY (`serverId`) REFERENCES `servers` (`id`);

ALTER TABLE `options` ADD FOREIGN KEY (`pollId`) REFERENCES `polls` (`id`);

ALTER TABLE `votes` ADD FOREIGN KEY (`option`) REFERENCES `options` (`id`);

ALTER TABLE `votes` ADD FOREIGN KEY (`poll`) REFERENCES `polls` (`id`);

ALTER TABLE `type` ADD FOREIGN KEY (`id`) REFERENCES `polls` (`type`);

ALTER TABLE `type` ADD FOREIGN KEY (`id`) REFERENCES `options` (`type`);

ALTER TABLE `polls` ADD FOREIGN KEY (`id`) REFERENCES `permissions` (`poll`);

CREATE INDEX `votes_casted_by_person` ON `votes` (`userId`, `poll`);

CREATE INDEX `polls_in_server` ON `polls` (`server`, `active`);

CREATE INDEX `poll_options` ON `options` (`pollId`);

CREATE INDEX `type_names` ON `type` (`name`);

CREATE INDEX `poll_permission` ON `permissions` (`poll`);

CREATE INDEX `multi_option_vote` ON `multioptions` (`vote_id`);