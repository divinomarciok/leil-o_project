import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from 'typeorm';
import { Enterprise } from './enterprise';
import { Product } from './product';
import { User } from './user';

@Entity('enterprise_products')
export class EnterpriseProduct {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Enterprise, (enterprise) => enterprise.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'enterprise_id' }) 
    enterprise!: Enterprise;

    @ManyToOne(() => Product, (product) => product.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product!: Product;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    price!: number;

    @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' }) 
    user!: User;

}
