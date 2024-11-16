# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 16, 2024 19:12:41
# Database: sqlite:////tmp/tmp.xp30ruux64-01JCV67F3SSWFP1BX6HERXP9ZT/DogWalkingDB/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Client(SAFRSBaseX, Base):
    """
    description: Represents a client in the dog walking business.
    """
    __tablename__ = 'client'
    _s_collection_name = 'Client'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    phone_number = Column(String)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    DogList : Mapped[List["Dog"]] = relationship(back_populates="client")
    InvoiceList : Mapped[List["Invoice"]] = relationship(back_populates="client")
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="client")



class Promotion(SAFRSBaseX, Base):
    """
    description: Represents promotional offers available to clients.
    """
    __tablename__ = 'promotion'
    _s_collection_name = 'Promotion'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    discount_percentage = Column(Integer)
    validity_start_date = Column(Date)
    validity_end_date = Column(Date)

    # parent relationships (access parent)

    # child relationships (access children)



class ServiceType(SAFRSBaseX, Base):
    """
    description: Represents different types of services offered.
    """
    __tablename__ = 'service_type'
    _s_collection_name = 'ServiceType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    rate = Column(Integer)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    WalkServiceList : Mapped[List["WalkService"]] = relationship(back_populates="service_type")



class Walker(SAFRSBaseX, Base):
    """
    description: Represents a dog walker.
    """
    __tablename__ = 'walker'
    _s_collection_name = 'Walker'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    phone_number = Column(String)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    WalkScheduleList : Mapped[List["WalkSchedule"]] = relationship(back_populates="walker")



class Dog(SAFRSBaseX, Base):
    """
    description: Represents a dog belonging to a client.
    """
    __tablename__ = 'dog'
    _s_collection_name = 'Dog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    breed = Column(String)
    age = Column(Integer)
    client_id = Column(ForeignKey('client.id'))

    # parent relationships (access parent)
    client : Mapped["Client"] = relationship(back_populates=("DogList"))

    # child relationships (access children)
    WalkScheduleList : Mapped[List["WalkSchedule"]] = relationship(back_populates="dog")



class Invoice(SAFRSBaseX, Base):
    """
    description: Represents an invoice for services provided to a client.
    """
    __tablename__ = 'invoice'
    _s_collection_name = 'Invoice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    client_id = Column(ForeignKey('client.id'))
    amount_due = Column(Integer, nullable=False)
    due_date = Column(Date, nullable=False)
    paid_date = Column(Date)

    # parent relationships (access parent)
    client : Mapped["Client"] = relationship(back_populates=("InvoiceList"))

    # child relationships (access children)
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="invoice")



class Payment(SAFRSBaseX, Base):
    """
    description: Represents a payment made by a client.
    """
    __tablename__ = 'payment'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    invoice_id = Column(ForeignKey('invoice.id'))
    amount_paid = Column(Integer, nullable=False)
    payment_date = Column(Date, nullable=False)

    # parent relationships (access parent)
    invoice : Mapped["Invoice"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)



class WalkSchedule(SAFRSBaseX, Base):
    """
    description: Represents a schedule for a dog walk.
    """
    __tablename__ = 'walk_schedule'
    _s_collection_name = 'WalkSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_date = Column(Date, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime)
    walker_id = Column(ForeignKey('walker.id'))
    dog_id = Column(ForeignKey('dog.id'))

    # parent relationships (access parent)
    dog : Mapped["Dog"] = relationship(back_populates=("WalkScheduleList"))
    walker : Mapped["Walker"] = relationship(back_populates=("WalkScheduleList"))

    # child relationships (access children)
    SpecialInstructionList : Mapped[List["SpecialInstruction"]] = relationship(back_populates="walk_schedule")
    WalkLogList : Mapped[List["WalkLog"]] = relationship(back_populates="walk_schedule")
    WalkServiceList : Mapped[List["WalkService"]] = relationship(back_populates="walk_schedule")



class SpecialInstruction(SAFRSBaseX, Base):
    """
    description: Represents special instructions for a dog walk.
    """
    __tablename__ = 'special_instruction'
    _s_collection_name = 'SpecialInstruction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_schedule_id = Column(ForeignKey('walk_schedule.id'))
    instruction = Column(String, nullable=False)

    # parent relationships (access parent)
    walk_schedule : Mapped["WalkSchedule"] = relationship(back_populates=("SpecialInstructionList"))

    # child relationships (access children)



class WalkLog(SAFRSBaseX, Base):
    """
    description: Logs details about a completed dog walk.
    """
    __tablename__ = 'walk_log'
    _s_collection_name = 'WalkLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_schedule_id = Column(ForeignKey('walk_schedule.id'))
    distance_walked = Column(Integer)
    duration = Column(Integer)
    notes = Column(String)

    # parent relationships (access parent)
    walk_schedule : Mapped["WalkSchedule"] = relationship(back_populates=("WalkLogList"))

    # child relationships (access children)
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="walk_log")



class WalkService(SAFRSBaseX, Base):
    """
    description: Represents a specific service type linked to a walk schedule.
    """
    __tablename__ = 'walk_service'
    _s_collection_name = 'WalkService'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_schedule_id = Column(ForeignKey('walk_schedule.id'))
    service_type_id = Column(ForeignKey('service_type.id'))

    # parent relationships (access parent)
    service_type : Mapped["ServiceType"] = relationship(back_populates=("WalkServiceList"))
    walk_schedule : Mapped["WalkSchedule"] = relationship(back_populates=("WalkServiceList"))

    # child relationships (access children)



class Feedback(SAFRSBaseX, Base):
    """
    description: Represents feedback from clients about a walk/walker.
    """
    __tablename__ = 'feedback'
    _s_collection_name = 'Feedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_log_id = Column(ForeignKey('walk_log.id'))
    client_id = Column(ForeignKey('client.id'))
    rating = Column(Integer)
    comments = Column(String)

    # parent relationships (access parent)
    client : Mapped["Client"] = relationship(back_populates=("FeedbackList"))
    walk_log : Mapped["WalkLog"] = relationship(back_populates=("FeedbackList"))

    # child relationships (access children)
