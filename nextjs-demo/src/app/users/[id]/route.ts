import { users } from "../route";

export async function GET(request: Request, { params }: { params: { id: string } }){
    const { id } = await params;
    const user = users.find((user) => user.id === parseInt(id));
    return Response.json(user); 
}

export async function DELETE(request: Request, { params }: { params: { id: string } }){
    const { id } = await params;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return Response.json({ error: "User not found" }, { status: 404 });
    }
    const filteredUsers = users.filter((user) => user.id !== parseInt(id));
    return Response.json(filteredUsers);
}