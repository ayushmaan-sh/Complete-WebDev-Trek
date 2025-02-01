-- Create table for Indian trains at Kanpur Central
CREATE TABLE kanpur_trains (
    train_number VARCHAR(20) PRIMARY KEY,
    train_name VARCHAR(100)NOT NULL,
	tickets_booked INT,
    starting_station VARCHAR(100) NOT NULL,
    last_destination VARCHAR(100) NOT NULL,
    current_location VARCHAR(100) NOT NULL,
    arrival_time TIME,
    delay_time INTERVAL DEFAULT '00:00'
);

-- Insert sample data
INSERT INTO kanpur_trains VALUES
('12301', 'Rajdhani Express',200, 'New Delhi', 'Howrah', 'Aligarh', '15:30', '00:10'),
('12555', 'Gorakhdham Express',230, 'Gorakhpur', 'Bhatinda', 'Lucknow', '18:45', '00:30'),
('12178', 'Chambal Express',240, 'Agra Cantt', 'Howrah', 'Etawah', '14:10', '00:00'),
('12452', 'Shram Shakti Express',345, 'New Delhi', 'Kanpur Central', 'Tundla', '23:55', '00:05'),
('12591', 'Gorakhpur Yesvantpur Express', 400, 'Gorakhpur', 'Yesvantpur', 'Allahabad', '20:15', '01:20'),
('12616', 'Grand Trunk Express',350, 'New Delhi', 'Chennai Central', 'Kanpur Central', '12:40', '00:00'),
('12780', 'Goa Express',270, 'Vasco da Gama', 'Hazrat Nizamuddin', 'Jhansi', '17:25', '00:45'),
('12988', 'Ajmer Sealdah Express',330, 'Ajmer', 'Sealdah', 'Agra Fort', '22:10', '00:20'),
('12225', 'Kaifiyaat Express',300, 'Azamgarh', 'Old Delhi', 'Lucknow', '05:50', '00:00'),
('14163', 'Sangam Express',400, 'Allahabad', 'Meerut City', 'Fatehpur', '07:15', '00:10'),
('19038', 'Avadh Express',440, 'Barauni', 'Bandra Terminus', 'Lucknow', '09:30', '00:25'),
('15018', 'Gorakhpur LTT Express',480, 'Gorakhpur', 'Lokmanya Tilak Terminus', 'Varanasi', '19:00', '01:00'),
('12273', 'Howrah Duronto Express',380, 'Howrah', 'New Delhi', 'Mughalsarai', '16:10', '00:00'),
('12310', 'Patna Rajdhani',440, 'New Delhi', 'Patna', 'Kanpur Central', '06:30', '00:05'),
('12138', 'Punjab Mail',230, 'Firozpur Cantt', 'Mumbai CST', 'Kanpur Central', '03:50', '00:15');


-- Update data from the table
UPDATE kanpur_trains SET current_location='Kanpur Central' WHERE train_number='12555';


-- Deleting data from the table
DELETE FROM kanpur_trains WHERE train_number = '12555';
-- Add it again
INSERT INTO kanpur_trains VALUES
('12555', 'Gorakhdham Express', 'Gorakhpur', 'Bhatinda', 'Lucknow', '18:45', '00:30')


-- CLAUSES (DATA REFINING)
-- where clause
SELECT * FROM kanpur_trains WHERE train_number = '12178';
-- using relational operators
SELECT * FROM kanpur_trains WHERE delay_time >= '00:30:00';
--using logical operator
SELECT * FROM kanpur_trains WHERE delay_time >= '00:00:00' AND starting_station = 'New Delhi';
SELECT * FROM kanpur_trains WHERE delay_time >= '00:00:00' AND arrival_time >= '12:00:00' AND arrival_time <= '18:00:00';


-- Aggregate function
-- count()
SELECT COUNT(train_number) from kanpur_trains;
-- sum()
SELECT SUM(tickets_booked) from kanpur_trains;
-- avg()
SELECT AVG(tickets_booked) from kanpur_trains;
-- min()
SELECT MIN(tickets_booked) from kanpur_trains;
-- max()
SELECT MAX(tickets_booked) from kanpur_trains;


-- GROUP BY


DROP TABLE kanpur_trains; 
-- Show all data
SELECT * FROM kanpur_trains;
