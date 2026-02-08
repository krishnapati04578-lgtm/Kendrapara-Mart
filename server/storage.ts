import { db } from "./db";
import { categories, type Category, type InsertCategory } from "@shared/schema";

export interface IStorage {
  getCategories(): Promise<Category[]>;
}

export class DatabaseStorage implements IStorage {
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }
}

export const storage = new DatabaseStorage();
