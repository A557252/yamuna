create database yamuna;
use yamuna;

drop table vwuser;
drop table model_package;
drop table car;
drop table model;
drop table additional_items;
drop table package_maintenance;
drop table maintenance;
drop table inquiry_package;
drop table inquiry;
drop table package_spare;
drop table spare;
drop table vwpackage;
drop table vin_package;

create table vwuser (
    user_id integer(3) primary key auto_increment,
    user_name varchar(100),
	login_name varchar(50),
    is_active varchar(3),
    user_role varchar(20),
	user_pwd varchar(20)
);
insert into vwuser (user_id, user_name, is_active, login_name, user_pwd, user_role) values (1, 'horst', 'Y', 'horst', 'abc123', 'admin');
insert into vwuser (user_id, user_name, is_active, login_name, user_pwd, user_role) values (2, 'arup', 'Y', 'arup', 'pqr789', 'user');
create table car (
    car_id integer(3) primary key auto_increment,
    vin varchar(100),
	model_id integer(3)
);
alter table car add constraint foreign key (model_id) references model(model_id);
insert into car (car_id, vin, model_id) values (4, 'WVWZZZ1J3W0000001' , 1);
insert into car (car_id, vin, model_id) values (5, 'WVWZZZ1J3W0000002' , 2);
insert into car (car_id, vin, model_id) values (6, 'WVWZZZ1J3W0000003' , 3);

create table model (
	model_id integer(3) primary key,
    model_name varchar(20)
);
insert into model (model_id, model_name) values (1, 'polo');
insert into model (model_id, model_name) values (2, 'vento');
insert into model (model_id, model_name) values (3, 'beetle');
insert into model (model_id, model_name) values (4, 'golf');

create table additional_items (
	addItem_id integer(3) primary key auto_increment,
	inquiry_id integer (3),
    description varchar(100),
    price numeric(10)
);
alter table additional_items add constraint foreign key (inquiry_id) references inquiry(inquiry_id);

create table vwpackage (
    package_id integer(3) primary key auto_increment,
    package_name varchar(100),
    price numeric(10),
    description varchar(200),
	labour_positions numeric(10),
	is_active varchar(1)
);
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (1, 'Basic package', 11, 'Basic package description', 'Y', 111);
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (2, 'Summer package', 22, 'Summer package description', 'Y', 222);
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (3, 'Vacation package', 33, 'Vacation package description', 'Y', 333);
insert into vwpackage (package_id, package_name, price, description, is_active, labour_positions) values (4, '15.000 km Service inspection', 44, '15.000 km Service inspection description', 'Y', 444);

create table spare (
    spare_id integer(3) primary key auto_increment,
    spare_name varchar(100),
	spare_price numeric(10)
);
insert into spare (spare_id, spare_name, spare_price) values (1, 'nut 4mm',22);
insert into spare (spare_id, spare_name, spare_price) values (2, 'wiper 36mm',34);
insert into spare (spare_id, spare_name, spare_price) values (3, 'rear view mirror',56);
insert into spare (spare_id, spare_name, spare_price) values (4, 'engine crank',12);
insert into spare (spare_id, spare_name, spare_price) values (5, 'engine valve',45);

create table package_spare (
	package_id integer(3),
    spare_id integer(3) 
);
alter table package_spare add constraint foreign key (package_id) references vwpackage(package_id);
alter table package_spare add constraint foreign key (spare_id) references spare(spare_id);
insert into package_spare (package_id, spare_id) values (1, 5);
insert into package_spare (package_id, spare_id) values (1, 5);
insert into package_spare (package_id, spare_id) values (2, 3);
insert into package_spare (package_id, spare_id) values (3, 4);

create table inquiry (
	inquiry_id integer(3) auto_increment primary key,
	car_id integer(3),
    vin varchar(17),
    total_price numeric(10),
    created_on varcahr(30),
    modified_on varcahr(30),
	user_id integer(3),
	title varchar(50)
);
--alter table inquiry add constraint foreign key (car_id) references car(car_id);
--alter table inquiry add constraint foreign key (user_id) references user(user_id);

create table inquiry_package (
	inq_pack_id integer(3) primary key auto_increment,
	inquiry_id integer(3),
    package_id integer(3),
	package_price numeric(10)
);
alter table inquiry_package add constraint foreign key (inquiry_id) references inquiry(inquiry_id);
--alter table inquiry_package add constraint foreign key (package_id) references vwpackage(package_id);

create table maintenance (
    lposition_id integer(3) primary key auto_increment,
    lposition_name varchar(100),
	lposition_price numeric(10)
);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (1, 'oil change',22);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (2, 'brake lining change',33);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (3, 'internal washing',54);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (4, 'teflon coating',12);
insert into maintenance (lposition_id, lposition_name, lposition_price) values (5, 'wheel balancing',43);

create table package_maintenance (
	package_id integer(3),
    lposition_id integer(3) 
); 
alter table package_maintenance add constraint foreign key (package_id) references vwpackage(package_id);
alter table package_maintenance add constraint foreign key (lposition_id) references maintenance(lposition_id);
insert into package_maintenance (package_id, lposition_id) values (1, 5);
insert into package_maintenance (package_id, lposition_id) values (1, 5);
insert into package_maintenance (package_id, lposition_id) values (2, 3);
insert into package_maintenance (package_id, lposition_id) values (3, 4);


create table car_package (
    car_id integer(3),
    package_id integer(3)
);
alter table car_package add constraint foreign key (car_id) references car(car_id);
alter table car_package add constraint foreign key (package_id) references vwpackage(package_id);
insert into car_package values(1,1);
insert into car_package values(1,2);
insert into car_package values(2,1);
insert into car_package values(3,2);
insert into car_package values(1,4);

commit;

-- select Query

select * from vin_package;

select * from vwpackage;

select * from spare;

select * from package_spare;

select * from maintenance;

select p.package_name, p.price, p.description, s.spare_name, lp.lposition_name
from vin_package vp, vwpackage p, spare s, package_spare ps, package_maintenance pls, maintenance lp
where vp.vin = 'WVWZZZ1J3W000001'
and vp.package_id = p.package_id
and p.package_id = ps.package_id
and ps.spare_id = s.spare_id
and p.package_id = pls.package_id
and pls.lposition_id = lp.lposition_id;