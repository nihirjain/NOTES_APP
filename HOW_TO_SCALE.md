🚀 How It Can Scale
1️⃣ Horizontal Scaling

Deploy multiple Node.js instances behind a load balancer (NGINX).
Improves traffic handling and fault tolerance.

2️⃣ Database Indexing

Add index on notes user field:

notesSchema.index({ user: 1 });

Improves query performance for large datasets.

3️⃣ Caching Layer (Redis)

Cache frequently accessed endpoints like:

/admin/notes/getall

Reduces database load and improves response time.