-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Nov-2023 às 12:59
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbanimatronic`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbanimatronic`
--

CREATE TABLE `tbanimatronic` (
  `idanimatronic` int(5) NOT NULL,
  `nomeanimatronic` varchar(100) NOT NULL,
  `idespecie` int(5) NOT NULL,
  `idfuncao` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tbanimatronic`
--

INSERT INTO `tbanimatronic` (`idanimatronic`, `nomeanimatronic`, `idespecie`, `idfuncao`) VALUES
(1, 'Bunny', 1, 1),
(2, 'Foxy', 2, 2),
(3, 'Frederico', 3, 4),
(4, 'Sandro', 4, 3),
(5, 'Amumu', 2, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbavaliacao`
--

CREATE TABLE `tbavaliacao` (
  `idavaliacao` int(50) NOT NULL,
  `cpfcliente` varchar(11) NOT NULL,
  `nomeanimatronic` varchar(100) NOT NULL,
  `estrelas` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbcliente`
--

CREATE TABLE `tbcliente` (
  `idcliente` int(50) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `nomecliente` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbespecie`
--

CREATE TABLE `tbespecie` (
  `idespecie` int(5) NOT NULL,
  `nomeespecie` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tbespecie`
--

INSERT INTO `tbespecie` (`idespecie`, `nomeespecie`) VALUES
(1, 'coelho'),
(2, 'raposa'),
(3, 'Urso'),
(4, 'Tartaruga');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbfuncao`
--

CREATE TABLE `tbfuncao` (
  `idfuncao` int(5) NOT NULL,
  `nomefuncao` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tbfuncao`
--

INSERT INTO `tbfuncao` (`idfuncao`, `nomefuncao`) VALUES
(1, 'Guitarrista'),
(2, 'Baixista'),
(3, 'Baterista'),
(4, 'Vocalista');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbanimatronic`
--
ALTER TABLE `tbanimatronic`
  ADD PRIMARY KEY (`idanimatronic`),
  ADD UNIQUE KEY `nomeanimatronic` (`nomeanimatronic`),
  ADD KEY `idespecie` (`idespecie`),
  ADD KEY `idfuncao` (`idfuncao`);

--
-- Índices para tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD PRIMARY KEY (`idavaliacao`),
  ADD KEY `cpfcliente` (`cpfcliente`),
  ADD KEY `nomeanimatronic` (`nomeanimatronic`);

--
-- Índices para tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  ADD PRIMARY KEY (`idcliente`),
  ADD UNIQUE KEY `cpf` (`cpf`);

--
-- Índices para tabela `tbespecie`
--
ALTER TABLE `tbespecie`
  ADD PRIMARY KEY (`idespecie`);

--
-- Índices para tabela `tbfuncao`
--
ALTER TABLE `tbfuncao`
  ADD PRIMARY KEY (`idfuncao`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbanimatronic`
--
ALTER TABLE `tbanimatronic`
  MODIFY `idanimatronic` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  MODIFY `idavaliacao` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  MODIFY `idcliente` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbespecie`
--
ALTER TABLE `tbespecie`
  MODIFY `idespecie` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tbfuncao`
--
ALTER TABLE `tbfuncao`
  MODIFY `idfuncao` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tbanimatronic`
--
ALTER TABLE `tbanimatronic`
  ADD CONSTRAINT `tbanimatronic_ibfk_1` FOREIGN KEY (`idespecie`) REFERENCES `tbespecie` (`idespecie`),
  ADD CONSTRAINT `tbanimatronic_ibfk_2` FOREIGN KEY (`idfuncao`) REFERENCES `tbfuncao` (`idfuncao`);

--
-- Limitadores para a tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD CONSTRAINT `tbavaliacao_ibfk_1` FOREIGN KEY (`cpfcliente`) REFERENCES `tbcliente` (`cpf`),
  ADD CONSTRAINT `tbavaliacao_ibfk_2` FOREIGN KEY (`nomeanimatronic`) REFERENCES `tbanimatronic` (`nomeanimatronic`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
