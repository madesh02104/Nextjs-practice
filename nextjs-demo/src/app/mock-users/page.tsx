import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const authObj = await auth();
  const userObj = await currentUser();

  const res = await fetch("https://684d20d165ed087139152957.mockapi.io/users");
  const users = await res.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://684d20d165ed087139152957.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    console.log(newUser);
    revalidatePath("/mock-users");
  }

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="border bg-white text-gray-700 rounded-md p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-2xl text-gray-800"
          >
            <h3 className="text-lg font-bold">{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
