import { prisma } from '../../prisma'
import { FeedbacksRepository, FeedbackCreateData } from '../feedbacks-repositories'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        const feedback = await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    };
}