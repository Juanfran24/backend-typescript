import { Request, Response, NextFunction } from "express";

export class TaskController {
  
  async createTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(201).json({
      message: "Tasks"
    });
  }

  async getTasks(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "Tasks"
    });
  }

  async getTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "Tasks"
    });
  }

  async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "Tasks"
    });
  }

  async removeTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "Tasks"
    });
  }
}