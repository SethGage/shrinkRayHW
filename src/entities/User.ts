import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation, Check } from 'typeorm';

import { Link } from './Link';

@Entity()
@Check('isPro = false and links <= 5')
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ unique: true })
  userName: string;

  @Column({ unique: true })
  passwordHash: string;

  @Column({ default: false })
  isPro: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Link, (link) => link.linkId)
  links: Relation<Link>[];
}
