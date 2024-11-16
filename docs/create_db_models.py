# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Client(Base):
    """description: Represents a client in the dog walking business."""
    __tablename__ = 'client'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    phone_number = Column(String)
    email = Column(String)


class Dog(Base):
    """description: Represents a dog belonging to a client."""
    __tablename__ = 'dog'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    breed = Column(String)
    age = Column(Integer)
    client_id = Column(Integer, ForeignKey('client.id'))


class Walker(Base):
    """description: Represents a dog walker."""
    __tablename__ = 'walker'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    phone_number = Column(String)
    email = Column(String)


class WalkSchedule(Base):
    """description: Represents a schedule for a dog walk."""
    __tablename__ = 'walk_schedule'

    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_date = Column(Date, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime)
    walker_id = Column(Integer, ForeignKey('walker.id'))
    dog_id = Column(Integer, ForeignKey('dog.id'))


class WalkLog(Base):
    """description: Logs details about a completed dog walk."""
    __tablename__ = 'walk_log'

    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_schedule_id = Column(Integer, ForeignKey('walk_schedule.id'))
    distance_walked = Column(Integer)
    duration = Column(Integer)  # duration in minutes
    notes = Column(String)


class Feedback(Base):
    """description: Represents feedback from clients about a walk/walker."""
    __tablename__ = 'feedback'

    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_log_id = Column(Integer, ForeignKey('walk_log.id'))
    client_id = Column(Integer, ForeignKey('client.id'))
    rating = Column(Integer)  # rating out of 5
    comments = Column(String)


class Invoice(Base):
    """description: Represents an invoice for services provided to a client."""
    __tablename__ = 'invoice'

    id = Column(Integer, primary_key=True, autoincrement=True)
    client_id = Column(Integer, ForeignKey('client.id'))
    amount_due = Column(Integer, nullable=False)
    due_date = Column(Date, nullable=False)
    paid_date = Column(Date)


class Payment(Base):
    """description: Represents a payment made by a client."""
    __tablename__ = 'payment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    invoice_id = Column(Integer, ForeignKey('invoice.id'))
    amount_paid = Column(Integer, nullable=False)
    payment_date = Column(Date, nullable=False)


class ServiceType(Base):
    """description: Represents different types of services offered."""
    __tablename__ = 'service_type'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    rate = Column(Integer)  # rate per hour or service
    description = Column(String)


class WalkService(Base):
    """description: Represents a specific service type linked to a walk schedule."""
    __tablename__ = 'walk_service'

    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_schedule_id = Column(Integer, ForeignKey('walk_schedule.id'))
    service_type_id = Column(Integer, ForeignKey('service_type.id'))


class SpecialInstruction(Base):
    """description: Represents special instructions for a dog walk."""
    __tablename__ = 'special_instruction'

    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_schedule_id = Column(Integer, ForeignKey('walk_schedule.id'))
    instruction = Column(String, nullable=False)


class Promotion(Base):
    """description: Represents promotional offers available to clients."""
    __tablename__ = 'promotion'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    discount_percentage = Column(Integer)  # discount as a percentage
    validity_start_date = Column(Date)
    validity_end_date = Column(Date)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

# Test Data Creation

# Clients
client1 = Client(name='John Doe', phone_number='555-0100', email='john.doe@example.com')
client2 = Client(name='Jane Smith', phone_number='555-0101', email='jane.smith@example.com')
client3 = Client(name='Chris Johnson', phone_number='555-0102', email='chris.johnson@example.com')
client4 = Client(name='Patricia Brown', phone_number='555-0103', email='patricia.brown@example.com')

# Dogs

# Assume each dog belongs to a client

dog1 = Dog(name='Rex', breed='German Shepherd', age=5, client_id=1)
dog2 = Dog(name='Buddy', breed='Golden Retriever', age=3, client_id=1)
dog3 = Dog(name='Luna', breed='Labrador', age=4, client_id=2)
dog4 = Dog(name='Bella', breed='Poodle', age=2, client_id=3)

# Walkers
walker1 = Walker(name='Oliver Grey', phone_number='555-0200', email='oliver.grey@example.com')
walker2 = Walker(name='Emily Rose', phone_number='555-0201', email='emily.rose@example.com')
walker3 = Walker(name='Jack Black', phone_number='555-0202', email='jack.black@example.com')
walker4 = Walker(name='Sophia White', phone_number='555-0203', email='sophia.white@example.com')

# Walk Schedule
walk_schedule1 = WalkSchedule(walk_date=date(2023, 8, 1), start_time=datetime(2023, 8, 1, 9, 0), end_time=datetime(2023, 8, 1, 10, 0), walker_id=1, dog_id=1)
walk_schedule2 = WalkSchedule(walk_date=date(2023, 8, 2), start_time=datetime(2023, 8, 2, 11, 0), end_time=datetime(2023, 8, 2, 12, 0), walker_id=2, dog_id=2)
walk_schedule3 = WalkSchedule(walk_date=date(2023, 8, 3), start_time=datetime(2023, 8, 3, 14, 0), end_time=datetime(2023, 8, 3, 15, 0), walker_id=3, dog_id=3)
walk_schedule4 = WalkSchedule(walk_date=date(2023, 8, 4), start_time=datetime(2023, 8, 4, 10, 0), end_time=datetime(2023, 8, 4, 11, 0), walker_id=4, dog_id=4)

# Walk Log
walk_log1 = WalkLog(walk_schedule_id=1, distance_walked=2000, duration=60, notes='Good walk, sunny weather.')
walk_log2 = WalkLog(walk_schedule_id=2, distance_walked=1500, duration=60, notes='Dog seemed tired.')
walk_log3 = WalkLog(walk_schedule_id=3, distance_walked=1800, duration=60, notes='Cloudy day.')
walk_log4 = WalkLog(walk_schedule_id=4, distance_walked=2200, duration=60, notes='Great energy.')

# Feedback
feedback1 = Feedback(walk_log_id=1, client_id=1, rating=5, comments='Excellent service.')
feedback2 = Feedback(walk_log_id=2, client_id=1, rating=4, comments='Good, but was late.')
feedback3 = Feedback(walk_log_id=3, client_id=2, rating=4, comments='Tiring but fun.')
feedback4 = Feedback(walk_log_id=4, client_id=3, rating=5, comments='Amazing experience.')

# Invoices
invoice1 = Invoice(client_id=1, amount_due=150, due_date=date(2023, 8, 10))
invoice2 = Invoice(client_id=2, amount_due=120, due_date=date(2023, 8, 12))
invoice3 = Invoice(client_id=3, amount_due=130, due_date=date(2023, 8, 15))
invoice4 = Invoice(client_id=4, amount_due=100, due_date=date(2023, 8, 18))

# Payments
payment1 = Payment(invoice_id=1, amount_paid=150, payment_date=date(2023, 8, 9))
payment2 = Payment(invoice_id=2, amount_paid=120, payment_date=date(2023, 8, 11))
payment3 = Payment(invoice_id=3, amount_paid=130, payment_date=date(2023, 8, 14))
payment4 = Payment(invoice_id=4, amount_paid=100, payment_date=date(2023, 8, 17))

# Service Types
service_type1 = ServiceType(name='Basic Walk', rate=20, description='A simple walk around the neighborhood.')
service_type2 = ServiceType(name='Intensive Walk', rate=30, description='A long walk including play time.')
service_type3 = ServiceType(name='Short Walk', rate=15, description='A quick walk for busy schedules.')
service_type4 = ServiceType(name='Puppy Session', rate=25, description='A session focused on younger dogs.')

# Walk Services
walk_service1 = WalkService(walk_schedule_id=1, service_type_id=1)
walk_service2 = WalkService(walk_schedule_id=2, service_type_id=2)
walk_service3 = WalkService(walk_schedule_id=3, service_type_id=3)
walk_service4 = WalkService(walk_schedule_id=4, service_type_id=4)

# Special Instructions
instruction1 = SpecialInstruction(walk_schedule_id=1, instruction="Avoid crowded areas.")
instruction2 = SpecialInstruction(walk_schedule_id=2, instruction="Focus on training commands.")
instruction3 = SpecialInstruction(walk_schedule_id=3, instruction="Bring dog treats.")
instruction4 = SpecialInstruction(walk_schedule_id=4, instruction="Avoid other dogs.")

# Promotions
promotion1 = Promotion(name='Summer Special', discount_percentage=10, validity_start_date=date(2023, 6, 1), validity_end_date=date(2023, 8, 31))
promotion2 = Promotion(name='Return Client Discount', discount_percentage=15, validity_start_date=date(2023, 7, 1), validity_end_date=date(2023, 9, 30))
promotion3 = Promotion(name='Holiday Discount', discount_percentage=20, validity_start_date=date(2023, 12, 1), validity_end_date=date(2024, 1, 31))
promotion4 = Promotion(name='Loyalty Program', discount_percentage=5, validity_start_date=date(2023, 1, 1), validity_end_date=date(2023, 12, 31))


session.add_all([client1, client2, client3, client4, dog1, dog2, dog3, dog4, walker1, walker2, walker3, walker4, walk_schedule1, walk_schedule2, walk_schedule3, walk_schedule4, walk_log1, walk_log2, walk_log3, walk_log4, feedback1, feedback2, feedback3, feedback4, invoice1, invoice2, invoice3, invoice4, payment1, payment2, payment3, payment4, service_type1, service_type2, service_type3, walk_service1, walk_service2, walk_service3, walk_service4, instruction1, instruction2, instruction3, instruction4, promotion1, promotion2, promotion3, promotion4])
session.commit()
