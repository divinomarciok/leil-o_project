import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from 'typeorm';
import { User } from './user';


@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    nomeProd!: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    categoriaProd?: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    tamanhoProd?: string;

    @Column({ type: 'int', nullable: true })
    quantidadeProd?: number;

    @ManyToOne(() => User, user => user.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })  // Altere o nome da coluna para "user_id"
    user!: User;
}
