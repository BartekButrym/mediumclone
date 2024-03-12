import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1613122798443 implements MigrationInterface {
  name = 'SeedDb1613122798443';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // Password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('john', 'john@doe.com', '$2b$10$ZIuxjyyaUkoCIiR2XL.jx.xqV9aprp9nvX7z13XpjGGdODK4BLYYW')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First Article', 'First article description', 'First article body', 'coffee,dragons', 1), ('second-article', 'Second Article', 'Second article description', 'Second article body', 'coffee,nestjs', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
