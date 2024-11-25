import { Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  
    @PrimaryGeneratedColumn()
    id!: number;
   
    @Column({ type: 'varchar', length: 255 })
    nome!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email!: string;

    @Column({ type: 'varchar', length: 255 })
    login!: string;
   
    @Column({ type: 'varchar', length: 255 })
    senha!: string;
   
    //@CreateDateColumn({ type: 'timestamp' })
    //data_cadastro!: Date;
   
    //@Column({ type: 'varchar', length: 50, default: 'ATIVO' })
    //status!: string;
   
   // @Column({ type: 'varchar', length: 50, default: 'USUARIO' })
   // role!: string;
    
    //@UpdateDateColumn({ type: 'timestamp' })
   // data_atualizacao!: Date;
}
