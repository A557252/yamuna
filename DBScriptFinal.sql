drop database IF EXISTS yamuna;
CREATE DATABASE IF NOT EXISTS yamuna;

use yamuna;

drop table IF EXISTS vwuser;
drop table IF EXISTS car_package;
drop table IF EXISTS model_package;
drop table IF EXISTS car;
drop table IF EXISTS model;
drop table IF EXISTS additional_items;
drop table IF EXISTS package_maintenance;
drop table IF EXISTS maintenance;
drop table IF EXISTS inquiry_package;
drop table IF EXISTS inquiry;
drop table IF EXISTS package_spare;
drop table IF EXISTS spare;
drop table IF EXISTS vwpackage;
drop table IF EXISTS vin_package;

create table vwuser (
    user_id integer(3) primary key auto_increment,
    user_name varchar(100),
	login_name varchar(50),
    is_active varchar(3),
    user_role varchar(1),
	user_pwd varchar(20)
);
create table car (
    car_id integer(3) primary key auto_increment,
    vin varchar(100),
	model_id integer(3)
);
create table model (
	model_id integer(3) primary key,
    model_name varchar(20)
);
create table additional_items (
	addItem_id integer(3) primary key auto_increment,
	inquiry_id integer (3),
    description varchar(100),
    price numeric(10)
);
create table vwpackage (
    package_id integer(3) primary key auto_increment,
    package_name varchar(100),
    price numeric(10),
    description varchar(200),
	labour_positions numeric(10),
	is_active varchar(1)
);
create table spare (
    spare_id integer(3) primary key auto_increment,
    spare_name varchar(100),
	spare_price numeric(10)
);
create table package_spare (
	package_id integer(3),
    spare_id integer(3) 
);

create table inquiry (
	inquiry_id integer(3) auto_increment primary key,
	car_id integer(3),
    vin varchar(17),
    total_price numeric(10),
    created_on varchar(30),
    modified_on varchar(30),
	user_id integer(3),
	title varchar(50)
);
create table inquiry_package (
	inq_pack_id integer(3) primary key auto_increment,
	inquiry_id integer(3),
    package_id integer(3),
	package_price numeric(10)
);
create table maintenance (
    lposition_id integer(3) primary key auto_increment,
    lposition_name varchar(100),
	lposition_price numeric(10)
);
create table package_maintenance (
	package_id integer(3),
    lposition_id integer(3) 
); 
create table model_package (
    model_id integer(3),
    package_id integer(3)
);
insert into vwuser (user_id, user_name, is_active, login_name, user_pwd, user_role) values (1, 'horst', 'Y', 'horst', 'abc123', '1');
insert into vwuser (user_id, user_name, is_active, login_name, user_pwd, user_role) values (2, 'arup', 'Y', 'arup', 'pqr789', '2');
insert into car (car_id, vin, model_id) values (1, 'WVWZZZ1J3W0000001' , 1);
insert into car (car_id, vin, model_id) values (2, 'WVWZZZ1J3W0000002' , 2);
insert into car (car_id, vin, model_id) values (3, 'WVWZZZ1J3W0000003' , 3);
insert into model (model_id, model_name) values (1, 'polo');
insert into model (model_id, model_name) values (2, 'vento');
insert into model (model_id, model_name) values (3, 'beetle');
insert into model (model_id, model_name) values (4, 'golf');
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (1, 'Basic package', 11, 'Basic package description', 'Y', 111);
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (2, 'Summer package', 22, 'Summer package description', 'Y', 222);
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (3, 'Vacation package', 33, 'Vacation package description', 'Y', 333);
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (4, '15.000 km Service inspection', 44, '15.000 km Service inspection description', 'Y', 444);
insert into spare (spare_id, spare_name, spare_price) values (1, 'nut 4mm',22);
insert into spare (spare_id, spare_name, spare_price) values (2, 'wiper 36mm',34);
insert into spare (spare_id, spare_name, spare_price) values (3, 'rear view mirror',56);
insert into spare (spare_id, spare_name, spare_price) values (4, 'engine crank',12);
insert into spare (spare_id, spare_name, spare_price) values (5, 'engine valve',45);
insert into package_spare (package_id, spare_id) values (1, 5);
insert into package_spare (package_id, spare_id) values (1, 5);
insert into package_spare (package_id, spare_id) values (2, 3);
insert into package_spare (package_id, spare_id) values (3, 4);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (1, 'oil change',22);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (2, 'brake lining change',33);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (3, 'internal washing',54);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (4, 'teflon coating',12);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (5, 'wheel balancing',43);
insert into package_maintenance (package_id, lposition_id) values (1, 5);
insert into package_maintenance (package_id, lposition_id) values (1, 5);
insert into package_maintenance (package_id, lposition_id) values (2, 3);
insert into package_maintenance (package_id, lposition_id) values (3, 4);
insert into model_package values(1,1);
insert into model_package values(1,2);
insert into model_package values(2,1);
insert into model_package values(3,2);
insert into model_package values(1,4);

alter table model_package add constraint foreign key (model_id) references model(model_id);
alter table car add constraint foreign key (model_id) references model(model_id);
alter table model_package add constraint foreign key (package_id) references vwpackage(package_id);
alter table additional_items add constraint foreign key (inquiry_id) references inquiry(inquiry_id);
alter table package_spare add constraint foreign key (package_id) references vwpackage(package_id);
alter table package_spare add constraint foreign key (spare_id) references spare(spare_id);
alter table inquiry_package add constraint foreign key (inquiry_id) references inquiry(inquiry_id);
alter table package_maintenance add constraint foreign key (package_id) references vwpackage(package_id);
alter table package_maintenance add constraint foreign key (lposition_id) references maintenance(lposition_id);


commit;

