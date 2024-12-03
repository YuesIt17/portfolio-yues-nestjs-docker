import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json' })
  data: string;
}
