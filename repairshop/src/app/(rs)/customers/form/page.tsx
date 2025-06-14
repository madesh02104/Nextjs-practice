import { getCustomer } from "@/lib/queries/getCustomers";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const customer = await getCustomer(Number(params.id));

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Edit Customer</h1>
      <form>
        {/* Form fields for editing customer */}
        <input
          type="text"
          defaultValue={customer.name}
          placeholder="Customer Name"
          className="input"
        />
        {/* Add more fields as necessary */}
        <button type="submit" className="btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}
