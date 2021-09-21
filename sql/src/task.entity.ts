import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Task{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @ManyToOne(()=>Employee, employee => employee.tasks)
    employee : Employee

}