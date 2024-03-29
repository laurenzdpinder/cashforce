DROP DATABASE IF EXISTS `cashforce_v3`;

CREATE DATABASE `cashforce_v3`;

USE `cashforce_v3`;

--

-- Estrutura da tabela `buyers`

--

CREATE TABLE
    `buyers` (
        `id` int NOT NULL,
        `name` varchar(255) NOT NULL,
        `tradingName` varchar(255) DEFAULT NULL,
        `cashforceTax` varchar(255) DEFAULT NULL,
        `responsibleName` varchar(255) DEFAULT NULL,
        `responsibleEmail` varchar(255) DEFAULT NULL,
        `responsiblePosition` varchar(255) DEFAULT NULL,
        `responsiblePhone` varchar(255) DEFAULT NULL,
        `responsibleMobile` varchar(255) DEFAULT NULL,
        `website` varchar(255) DEFAULT NULL,
        `postalCode` varchar(255) DEFAULT NULL,
        `address` varchar(255) DEFAULT NULL,
        `number` varchar(255) DEFAULT NULL,
        `complement` varchar(255) DEFAULT NULL,
        `neighborhood` varchar(255) DEFAULT NULL,
        `city` varchar(255) DEFAULT NULL,
        `state` varchar(255) DEFAULT NULL,
        `phoneNumber` varchar(255) DEFAULT NULL,
        `situation` varchar(255) DEFAULT NULL,
        `situationDate` varchar(255) DEFAULT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        `cnpjId` int DEFAULT NULL,
        `confirm` tinyint DEFAULT 1,
        `email` varchar(255) DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    `buyers` (
        `id`,
        `name`,
        `tradingName`,
        `cashforceTax`,
        `responsibleName`,
        `responsibleEmail`,
        `responsiblePosition`,
        `responsiblePhone`,
        `responsibleMobile`,
        `website`,
        `postalCode`,
        `address`,
        `number`,
        `complement`,
        `neighborhood`,
        `city`,
        `state`,
        `phoneNumber`,
        `situation`,
        `situationDate`,
        `createdAt`,
        `updatedAt`,
        `cnpjId`,
        `confirm`,
        `email`
    )
VALUES (
        1,
        'SACADO 001',
        'SACADO 001 LTDA',
        '0',
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        '2020-10-29 21:20:33',
        '2020-10-29 21:20:34',
        1,
        1,
        NULL
    );

--

-- Estrutura da tabela `cnpjs`

--

CREATE TABLE
    `cnpjs` (
        `id` int NOT NULL,
        `cnpj` varchar(255) NOT NULL,
        `companyType` varchar(255) NOT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    `cnpjs` (
        `id`,
        `cnpj`,
        `companyType`,
        `createdAt`,
        `updatedAt`
    )
VALUES (
        1,
        '00000000000001',
        '2',
        '2020-10-29 21:20:33',
        '2020-10-29 21:20:33'
    ), (
        2,
        '00000000000002',
        '1',
        '2020-10-29 21:20:33',
        '2020-10-29 21:20:33'
    );

--

-- Estrutura da tabela `offers`

--

CREATE TABLE
    `offers` (
        `id` int NOT NULL,
        `tax` varchar(255) NOT NULL,
        `tariff` varchar(255) NOT NULL,
        `adValorem` varchar(255) NOT NULL,
        `float` varchar(255) NOT NULL,
        `iof` varchar(255) NOT NULL,
        `expiresIn` datetime NOT NULL,
        `paymentStatusSponsor` tinyint DEFAULT 0,
        `paymentStatusProvider` tinyint DEFAULT 0,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        `orderId` int DEFAULT NULL,
        `sponsorId` int DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--

-- Estrutura da tabela `orderportions`

--

CREATE TABLE
    `orderportions` (
        `id` int NOT NULL,
        `nDup` varchar(255) NOT NULL,
        `dVenc` varchar(255) NOT NULL,
        `vDup` varchar(255) NOT NULL,
        `availableToMarket` tinyint DEFAULT 1,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        `orderId` int DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--

-- Estrutura da tabela `orders`

--

CREATE TABLE
    `orders` (
        `id` int NOT NULL,
        `orderNfId` varchar(255) NOT NULL,
        `orderNumber` varchar(255) NOT NULL,
        `orderPath` varchar(255) DEFAULT NULL,
        `orderFileName` varchar(255) DEFAULT NULL,
        `orderOriginalName` varchar(255) DEFAULT NULL,
        `emissionDate` varchar(255) DEFAULT NULL,
        `pdfFile` varchar(255) DEFAULT NULL,
        `emitedTo` varchar(255) NOT NULL,
        `nNf` varchar(255) DEFAULT NULL,
        `CTE` varchar(255) DEFAULT NULL,
        `value` varchar(255) DEFAULT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        `cnpjId` int DEFAULT NULL,
        `userId` int DEFAULT NULL,
        `buyerId` int DEFAULT NULL,
        `providerId` int DEFAULT NULL,
        `orderStatusBuyer` varchar(255) DEFAULT '0',
        `orderStatusProvider` varchar(255) DEFAULT '0',
        `deliveryReceipt` varchar(255) DEFAULT NULL,
        `cargoPackingList` varchar(255) DEFAULT NULL,
        `deliveryCtrc` varchar(255) DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    `orders` (
        `id`,
        `orderNfId`,
        `orderNumber`,
        `orderPath`,
        `orderFileName`,
        `orderOriginalName`,
        `emissionDate`,
        `pdfFile`,
        `emitedTo`,
        `nNf`,
        `CTE`,
        `value`,
        `createdAt`,
        `updatedAt`,
        `cnpjId`,
        `userId`,
        `buyerId`,
        `providerId`,
        `orderStatusBuyer`,
        `orderStatusProvider`,
        `deliveryReceipt`,
        `cargoPackingList`,
        `deliveryCtrc`
    )
VALUES (
        1,
        '1605181324132',
        '18153',
        NULL,
        NULL,
        NULL,
        '2020-10-30T11:00:00-03:00',
        NULL,
        '22843980000127',
        '18153',
        '',
        '198450',
        '2020-10-30 17:54:18',
        '2020-10-30 17:54:18',
        1,
        1,
        1,
        1,
        '0',
        '0',
        NULL,
        NULL,
        NULL
    ), (
        2,
        '160518132413',
        '18157',
        NULL,
        NULL,
        NULL,
        '2020-11-04T15:32:35-02:00',
        NULL,
        '35705180000272',
        '18157',
        '',
        '168850',
        '2020-11-10 18:33:46',
        '2020-11-10 18:33:46',
        1,
        1,
        1,
        1,
        '0',
        '0',
        NULL,
        NULL,
        NULL
    ), (
        3,
        '1605181324130',
        '18184',
        NULL,
        NULL,
        NULL,
        '2020-11-10',
        NULL,
        '00418477002640',
        '18184',
        '',
        '222795',
        '2020-11-12 11:42:06',
        '2020-11-18 12:22:14',
        1,
        1,
        1,
        1,
        '7',
        '3',
        NULL,
        NULL,
        NULL
    );

--

-- Estrutura da tabela `providers`

--

CREATE TABLE
    `providers` (
        `id` int NOT NULL,
        `name` varchar(255) NOT NULL,
        `tradingName` varchar(255) DEFAULT NULL,
        `cashforceTax` varchar(255) DEFAULT NULL,
        `responsibleName` varchar(255) DEFAULT NULL,
        `responsibleEmail` varchar(255) DEFAULT NULL,
        `responsiblePosition` varchar(255) DEFAULT NULL,
        `responsiblePhone` varchar(255) DEFAULT NULL,
        `responsibleMobile` varchar(255) DEFAULT NULL,
        `website` varchar(255) DEFAULT NULL,
        `postalCode` varchar(255) DEFAULT NULL,
        `address` varchar(255) DEFAULT NULL,
        `number` varchar(255) DEFAULT NULL,
        `complement` varchar(255) DEFAULT NULL,
        `neighborhood` varchar(255) DEFAULT NULL,
        `city` varchar(255) DEFAULT NULL,
        `state` varchar(255) DEFAULT NULL,
        `bank` varchar(255) DEFAULT NULL,
        `bankAgency` varchar(255) DEFAULT NULL,
        `account` varchar(255) DEFAULT NULL,
        `documents` varchar(255) DEFAULT NULL,
        `phoneNumber` varchar(255) DEFAULT NULL,
        `situation` varchar(255) DEFAULT NULL,
        `situationDate` varchar(255) DEFAULT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        `cnpjId` int DEFAULT NULL,
        `email` varchar(255) DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    `providers` (
        `id`,
        `name`,
        `tradingName`,
        `cashforceTax`,
        `responsibleName`,
        `responsibleEmail`,
        `responsiblePosition`,
        `responsiblePhone`,
        `responsibleMobile`,
        `website`,
        `postalCode`,
        `address`,
        `number`,
        `complement`,
        `neighborhood`,
        `city`,
        `state`,
        `bank`,
        `bankAgency`,
        `account`,
        `documents`,
        `phoneNumber`,
        `situation`,
        `situationDate`,
        `createdAt`,
        `updatedAt`,
        `cnpjId`,
        `email`
    )
VALUES (
        1,
        'CEDENTE 002',
        'CEDENTE 002 LTDA',
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        '2020-10-29 21:22:21',
        '2020-10-29 21:22:22',
        2,
        NULL
    );

--

-- Estrutura da tabela `sponsors`

--

CREATE TABLE
    `sponsors` (
        `id` int NOT NULL,
        `name` varchar(255) NOT NULL,
        `tradingName` varchar(255) DEFAULT NULL,
        `cashforceTax` varchar(255) DEFAULT NULL,
        `responsibleName` varchar(255) DEFAULT NULL,
        `responsibleEmail` varchar(255) DEFAULT NULL,
        `responsiblePosition` varchar(255) DEFAULT NULL,
        `responsiblePhone` varchar(255) DEFAULT NULL,
        `responsibleMobile` varchar(255) DEFAULT NULL,
        `website` varchar(255) DEFAULT NULL,
        `postalCode` varchar(255) DEFAULT NULL,
        `address` varchar(255) DEFAULT NULL,
        `number` varchar(255) DEFAULT NULL,
        `complement` varchar(255) DEFAULT NULL,
        `neighborhood` varchar(255) DEFAULT NULL,
        `city` varchar(255) DEFAULT NULL,
        `state` varchar(255) DEFAULT NULL,
        `bank` varchar(255) DEFAULT NULL,
        `bankAgency` varchar(255) DEFAULT NULL,
        `account` varchar(255) DEFAULT NULL,
        `phoneNumber` varchar(255) DEFAULT NULL,
        `situation` varchar(255) DEFAULT NULL,
        `situationDate` varchar(255) DEFAULT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        `cnpjId` int DEFAULT NULL,
        `email` varchar(255) DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--

-- Estrutura da tabela `users`

--

CREATE TABLE
    `users` (
        `id` int NOT NULL,
        `name` varchar(255) NOT NULL,
        `email` varchar(255) NOT NULL,
        `phoneNumber` varchar(255) DEFAULT NULL,
        `mobile` varchar(255) DEFAULT NULL,
        `departament` varchar(255) DEFAULT NULL,
        `verificationCode` varchar(255) DEFAULT NULL,
        `emailChecked` tinyint DEFAULT 0,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        `cashforceAdm` tinyint DEFAULT 0
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    `users` (
        `id`,
        `name`,
        `email`,
        `phoneNumber`,
        `mobile`,
        `departament`,
        `verificationCode`,
        `emailChecked`,
        `createdAt`,
        `updatedAt`,
        `cashforceAdm`
    )
VALUES (
        1,
        'ALLAN SOUZA',
        'allan@cashforce.com.br',
        NULL,
        NULL,
        NULL,
        '',
        1,
        '2020-10-01 21:31:37',
        '2020-10-01 22:41:23',
        1
    );

-- Índices para tabelas despejadas

ALTER TABLE `buyers`
ADD PRIMARY KEY (`id`),
ADD KEY `cnpjId` (`cnpjId`);

ALTER TABLE `cnpjs`
ADD PRIMARY KEY (`id`),
ADD UNIQUE KEY `cnpj` (`cnpj`);

ALTER TABLE `offers`
ADD PRIMARY KEY (`id`),
ADD KEY `orderId` (`orderId`),
ADD
    KEY `sponsorId` (`sponsorId`);

ALTER TABLE `orderportions`
ADD PRIMARY KEY (`id`),
ADD KEY `orderId` (`orderId`);

ALTER TABLE `orders`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `orderNfId` (`orderNfId`),
ADD
    UNIQUE KEY `orderPath` (`orderPath`),
ADD
    UNIQUE KEY `orderFileName` (`orderFileName`),
ADD
    UNIQUE KEY `orderOriginalName` (`orderOriginalName`),
ADD KEY `userId` (`userId`),
ADD KEY `buyerId` (`buyerId`),
ADD
    KEY `providerId` (`providerId`),
ADD KEY `cnpjId` (`cnpjId`);

ALTER TABLE `providers`
ADD PRIMARY KEY (`id`),
ADD KEY `cnpjId` (`cnpjId`);

ALTER TABLE `sponsors`
ADD PRIMARY KEY (`id`),
ADD KEY `cnpjId` (`cnpjId`);

ALTER TABLE `users`
ADD PRIMARY KEY (`id`),
ADD UNIQUE KEY `email` (`email`);

-- AUTO_INCREMENT de tabelas despejadas

ALTER TABLE
    `buyers` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 152;

ALTER TABLE
    `cnpjs` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 437;

ALTER TABLE
    `offers` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 40;

ALTER TABLE
    `orderportions` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 612;

ALTER TABLE
    `orders` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 540;

ALTER TABLE
    `providers` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 235;

ALTER TABLE
    `sponsors` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 17;

ALTER TABLE
    `users` MODIFY `id` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 122;

-- Restrições para despejos de tabelas

ALTER TABLE `buyers`
ADD
    CONSTRAINT `buyers_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE;

ALTER TABLE `offers`
ADD
    CONSTRAINT `offers_ibfk_61` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE,
ADD
    CONSTRAINT `offers_ibfk_62` FOREIGN KEY (`sponsorId`) REFERENCES `sponsors` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE;

ALTER TABLE `orderportions`
ADD
    CONSTRAINT `orderPortions_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE;

ALTER TABLE `orders`
ADD
    CONSTRAINT `orders_ibfk_139` FOREIGN KEY (`buyerId`) REFERENCES `buyers` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE,
ADD
    CONSTRAINT `orders_ibfk_140` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE,
ADD
    CONSTRAINT `orders_ibfk_141` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE,
ADD
    CONSTRAINT `orders_ibfk_142` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE;

ALTER TABLE `providers`
ADD
    CONSTRAINT `providers_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE;

ALTER TABLE `sponsors`
ADD
    CONSTRAINT `sponsors_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE
SET NULL ON UPDATE CASCADE;