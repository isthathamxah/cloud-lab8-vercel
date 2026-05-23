export default function Home() {
  const name = process.env.NEXT_PUBLIC_STUDENT_NAME;
  return (
    <main style={{ textAlign: "center", marginTop: "10%" }}>
      <h1>Lab 8 : Vercel Deployment</h1>
      <p>Name: {name}</p>
      <p>Roll: 01-131232-056</p>
    </main>
  );
}