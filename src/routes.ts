import express from 'express';

import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repositories';
import { NodemailerMailService } from './services/nodemailer/nodemailer-mail-service';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

try {
routes.post('/feedbacks', async (req, res) => {
    console.log(req.body)

    const { comment, type, screenshot } = req.body

    const prismaFeedbacskRepository = new PrismaFeedbacksRepository()
    const nodeMailerMailAdapter = new NodemailerMailService()
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacskRepository,
        nodeMailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send()
})

} catch (error) {
 console.log(error)   
}