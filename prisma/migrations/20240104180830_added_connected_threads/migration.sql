-- CreateTable
CREATE TABLE "thread_connections" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parentThreadId" TEXT NOT NULL,
    "threadId" TEXT NOT NULL,

    CONSTRAINT "thread_connections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "thread_connections" ADD CONSTRAINT "thread_connections_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "threads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
