-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04/12/2023 às 01:31
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `animatronics`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbanimatronics`
--

CREATE TABLE `tbanimatronics` (
  `idAnimatronic` int(11) NOT NULL,
  `animatronic` varchar(50) NOT NULL,
  `idEspecie` int(11) NOT NULL,
  `idFuncao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbanimatronics`
--

INSERT INTO `tbanimatronics` (`idAnimatronic`, `animatronic`, `idEspecie`, `idFuncao`) VALUES
(1, 'Freddy', 1, 3),
(2, 'Bonnie', 2, 2),
(3, 'Sandro', 3, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbavaliacao`
--

CREATE TABLE `tbavaliacao` (
  `idAvaliacao` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `idAnimatronic` int(11) NOT NULL,
  `Avaliacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbavaliacao`
--

INSERT INTO `tbavaliacao` (`idAvaliacao`, `idCliente`, `idAnimatronic`, `Avaliacao`) VALUES
(1, 1, 3, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbcliente`
--

CREATE TABLE `tbcliente` (
  `idCliente` int(11) NOT NULL,
  `cliente` varchar(50) NOT NULL,
  `CPF` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbcliente`
--

INSERT INTO `tbcliente` (`idCliente`, `cliente`, `CPF`) VALUES
(1, 'Jeziel Honorato', '717.510.734-08'),
(2, 'Jeyvidisson Felipe', '123.456.789-01'),
(3, 'Miguel Haruki', '987.654.321-10');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbespecie`
--

CREATE TABLE `tbespecie` (
  `idEspecie` int(11) NOT NULL,
  `especie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbespecie`
--

INSERT INTO `tbespecie` (`idEspecie`, `especie`) VALUES
(1, 'Urso'),
(2, 'Coelho'),
(3, 'Tartaruga');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbfuncao`
--

CREATE TABLE `tbfuncao` (
  `idFuncao` int(11) NOT NULL,
  `funcao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbfuncao`
--

INSERT INTO `tbfuncao` (`idFuncao`, `funcao`) VALUES
(1, 'Baterista'),
(2, 'Guitarrista'),
(3, 'Vocalista'),
(4, 'Baixista');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tbanimatronics`
--
ALTER TABLE `tbanimatronics`
  ADD PRIMARY KEY (`idAnimatronic`),
  ADD KEY `idFuncao` (`idFuncao`),
  ADD KEY `idEspecie` (`idEspecie`);

--
-- Índices de tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD PRIMARY KEY (`idAvaliacao`),
  ADD KEY `idAnimatronic` (`idAnimatronic`),
  ADD KEY `idCliente` (`idCliente`);

--
-- Índices de tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Índices de tabela `tbespecie`
--
ALTER TABLE `tbespecie`
  ADD PRIMARY KEY (`idEspecie`);

--
-- Índices de tabela `tbfuncao`
--
ALTER TABLE `tbfuncao`
  ADD PRIMARY KEY (`idFuncao`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbanimatronics`
--
ALTER TABLE `tbanimatronics`
  MODIFY `idAnimatronic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  MODIFY `idAvaliacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tbespecie`
--
ALTER TABLE `tbespecie`
  MODIFY `idEspecie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tbfuncao`
--
ALTER TABLE `tbfuncao`
  MODIFY `idFuncao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tbanimatronics`
--
ALTER TABLE `tbanimatronics`
  ADD CONSTRAINT `tbanimatronics_ibfk_1` FOREIGN KEY (`idFuncao`) REFERENCES `tbfuncao` (`idFuncao`),
  ADD CONSTRAINT `tbanimatronics_ibfk_2` FOREIGN KEY (`idEspecie`) REFERENCES `tbespecie` (`idEspecie`);

--
-- Restrições para tabelas `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD CONSTRAINT `tbavaliacao_ibfk_1` FOREIGN KEY (`idAnimatronic`) REFERENCES `tbanimatronics` (`idAnimatronic`),
  ADD CONSTRAINT `tbavaliacao_ibfk_2` FOREIGN KEY (`idCliente`) REFERENCES `tbcliente` (`idCliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
