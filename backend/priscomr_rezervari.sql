-- --------------------------------------------------------

--
-- Table structure for table `payments_public_orders`
--

CREATE TABLE `payments_public_orders` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` enum('pending','pos_ok_waiting_receipt','paid','failed','voided','refunded') NOT NULL DEFAULT 'pending',
  `payment_method` varchar(20) DEFAULT NULL,
  `provider` varchar(20) DEFAULT NULL,
  `provider_transaction_id` text DEFAULT NULL,
  `provider_payment_id` varchar(64) DEFAULT NULL,
  `provider_order_number` varchar(64) DEFAULT NULL,
  `timestamp` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for table `payments_public_orders`
--
ALTER TABLE `payments_public_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_payments_public_orders_order` (`order_id`),
  ADD KEY `idx_payments_public_orders_provider_payment_id` (`provider_payment_id`);

--
-- AUTO_INCREMENT for table `payments_public_orders`
--
ALTER TABLE `payments_public_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for table `payments_public_orders`
--
ALTER TABLE `payments_public_orders`
  ADD CONSTRAINT `fk_payments_public_orders_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

