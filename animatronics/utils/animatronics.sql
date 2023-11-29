-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Nov-2023 às 14:24
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
-- Banco de dados: `animatronics`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbanimatronics`
--

CREATE TABLE `tbanimatronics` (
  `idAnimatronic` int(11) NOT NULL,
  `animatronic` varchar(50) NOT NULL,
  `idEspecie` int(11) NOT NULL,
  `idFuncao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbavaliacao`
--

CREATE TABLE `tbavaliacao` (
  `idAvaliacao` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `idAnimatronic` int(11) NOT NULL,
  `Avaliacao` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbcliente`
--

CREATE TABLE `tbcliente` (
  `idCliente` int(11) NOT NULL,
  `cliente` varchar(50) NOT NULL,
  `CPF` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbespecie`
--

CREATE TABLE `tbespecie` (
  `idEspecie` int(11) NOT NULL,
  `Especie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbfuncao`
--

CREATE TABLE `tbfuncao` (
  `idFuncao` int(11) NOT NULL,
  `funcao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbanimatronics`
--
ALTER TABLE `tbanimatronics`
  ADD PRIMARY KEY (`idAnimatronic`),
  ADD KEY `idFuncao` (`idFuncao`),
  ADD KEY `idEspecie` (`idEspecie`);

--
-- Índices para tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD PRIMARY KEY (`idAvaliacao`),
  ADD KEY `idAnimatronic` (`idAnimatronic`),
  ADD KEY `idCliente` (`idCliente`);

--
-- Índices para tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Índices para tabela `tbespecie`
--
ALTER TABLE `tbespecie`
  ADD PRIMARY KEY (`idEspecie`);

--
-- Índices para tabela `tbfuncao`
--
ALTER TABLE `tbfuncao`
  ADD PRIMARY KEY (`idFuncao`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbanimatronics`
--
ALTER TABLE `tbanimatronics`
  MODIFY `idAnimatronic` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  MODIFY `idAvaliacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbespecie`
--
ALTER TABLE `tbespecie`
  MODIFY `idEspecie` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbfuncao`
--
ALTER TABLE `tbfuncao`
  MODIFY `idFuncao` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tbanimatronics`
--
ALTER TABLE `tbanimatronics`
  ADD CONSTRAINT `tbanimatronics_ibfk_1` FOREIGN KEY (`idFuncao`) REFERENCES `tbfuncao` (`idFuncao`),
  ADD CONSTRAINT `tbanimatronics_ibfk_2` FOREIGN KEY (`idEspecie`) REFERENCES `tbespecie` (`idEspecie`);

--
-- Limitadores para a tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD CONSTRAINT `tbavaliacao_ibfk_1` FOREIGN KEY (`idAnimatronic`) REFERENCES `tbanimatronics` (`idAnimatronic`),
  ADD CONSTRAINT `tbavaliacao_ibfk_2` FOREIGN KEY (`idCliente`) REFERENCES `tbcliente` (`idCliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
