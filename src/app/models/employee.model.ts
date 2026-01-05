import { Dept } from './departement.model';
import { Level } from './level.model';

export interface Employee{
    id: string;
    name: string;
    department: Dept;
    level: Level;
}