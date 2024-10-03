import { NextRequest, NextResponse } from 'next/server';
import { issueSchema } from '../../validationSchema';
import { StatusCodes } from 'http-status-codes';
import prisma from '../../../prisma/client';

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: StatusCodes.BAD_REQUEST,
    });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: StatusCodes.CREATED });
}
